const STORAGE_KEY = 'wisdom_ai_config';

export type AIProvider = 'openai' | 'anthropic';

export interface AIConfig {
  provider: AIProvider;
  apiKey: string;
  model: string;
}

export interface ArticleRequest {
  titulo: string;
  tamanho: 'curto' | 'medio' | 'longo';
  estilo: string;
  palavrasChave: string;
  prompt: string;
}

export interface ArticleResult {
  title: string;
  content: string;
  metaDescription: string;
  keywords: string;
}

const MODELS: Record<AIProvider, { id: string; label: string }[]> = {
  openai: [
    { id: 'gpt-4o', label: 'GPT-4o' },
    { id: 'gpt-4o-mini', label: 'GPT-4o Mini (mais barato)' },
    { id: 'gpt-4.1', label: 'GPT-4.1' },
  ],
  anthropic: [
    { id: 'claude-sonnet-4-20250514', label: 'Claude Sonnet 4' },
    { id: 'claude-haiku-4-20250414', label: 'Claude Haiku 4 (mais barato)' },
  ],
};

export const aiService = {
  getModels(provider: AIProvider) {
    return MODELS[provider];
  },

  getDefaultModel(provider: AIProvider): string {
    return MODELS[provider][0].id;
  },

  saveConfig(config: AIConfig): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  },

  loadConfig(): AIConfig | null {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    try {
      return JSON.parse(raw) as AIConfig;
    } catch {
      return null;
    }
  },

  removeConfig(): void {
    localStorage.removeItem(STORAGE_KEY);
  },

  buildSystemPrompt(request: ArticleRequest): string {
    const wordCount: Record<string, string> = {
      curto: '~500 palavras',
      medio: '~1000 palavras',
      longo: '~2000 palavras',
    };

    const estilos: Record<string, string> = {
      informativo: 'informativo e objetivo, com dados e fatos',
      persuasivo: 'persuasivo e voltado para vendas, com call-to-actions',
      tecnico: 'técnico e especializado, com termos da área',
      descontraido: 'descontraído e acessível, como um blog pessoal',
    };

    return `Você é um redator profissional especializado em comércio exterior, importação, exportação e logística internacional. 
Escreva artigos em português brasileiro de alta qualidade, otimizados para SEO.

INSTRUÇÕES:
- Tamanho: ${wordCount[request.tamanho] || '~1000 palavras'}
- Estilo: ${estilos[request.estilo] || 'informativo'}
- Palavras-chave para SEO: ${request.palavrasChave || 'nenhuma especificada'}
${request.prompt ? `- Instruções adicionais: ${request.prompt}` : ''}

FORMATO DE RESPOSTA (JSON):
Responda APENAS com um JSON válido, sem markdown, sem blocos de código. O JSON deve ter esta estrutura:
{
  "title": "Título do artigo otimizado para SEO",
  "content": "Conteúdo completo em HTML (use tags <h2>, <h3>, <p>, <ul>, <li>, <strong>, <em>, <blockquote>)",
  "metaDescription": "Meta descrição de até 160 caracteres para SEO",
  "keywords": "palavra1, palavra2, palavra3"
}

REGRAS DO HTML:
- Use <h2> para seções principais e <h3> para sub-seções
- Parágrafos em <p>
- Listas quando apropriado
- NÃO use <h1> (será o título)
- NÃO inclua classes CSS ou atributos de estilo`;
  },

  async generateArticle(config: AIConfig, request: ArticleRequest): Promise<ArticleResult> {
    const systemPrompt = this.buildSystemPrompt(request);
    const userMessage = request.titulo
      ? `Escreva um artigo sobre: "${request.titulo}"`
      : 'Escreva um artigo relevante sobre comércio exterior baseado nas instruções fornecidas.';

    if (config.provider === 'openai') {
      return this.callOpenAI(config, systemPrompt, userMessage);
    } else {
      return this.callAnthropic(config, systemPrompt, userMessage);
    }
  },

  async callOpenAI(config: AIConfig, systemPrompt: string, userMessage: string): Promise<ArticleResult> {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${config.apiKey}`,
      },
      body: JSON.stringify({
        model: config.model,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userMessage },
        ],
        temperature: 0.7,
        response_format: { type: 'json_object' },
      }),
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      throw new Error(err?.error?.message || `Erro na API da OpenAI: ${response.status}`);
    }

    const data = await response.json();
    const raw = data.choices?.[0]?.message?.content;

    if (!raw) throw new Error('Resposta vazia da OpenAI');
    return this.parseResult(raw);
  },

  async callAnthropic(config: AIConfig, systemPrompt: string, userMessage: string): Promise<ArticleResult> {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': config.apiKey,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true',
      },
      body: JSON.stringify({
        model: config.model,
        max_tokens: 4096,
        system: systemPrompt,
        messages: [
          { role: 'user', content: userMessage },
        ],
      }),
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      throw new Error(err?.error?.message || `Erro na API da Anthropic: ${response.status}`);
    }

    const data = await response.json();
    const raw = data.content?.[0]?.text;

    if (!raw) throw new Error('Resposta vazia da Anthropic');
    return this.parseResult(raw);
  },

  parseResult(raw: string): ArticleResult {
    // Try to extract JSON from the response, handling potential markdown code blocks
    let jsonStr = raw.trim();
    const jsonMatch = jsonStr.match(/```(?:json)?\s*([\s\S]*?)```/);
    if (jsonMatch) {
      jsonStr = jsonMatch[1].trim();
    }

    try {
      const parsed = JSON.parse(jsonStr);
      return {
        title: parsed.title || '',
        content: parsed.content || '',
        metaDescription: parsed.metaDescription || parsed.meta_description || '',
        keywords: parsed.keywords || '',
      };
    } catch {
      throw new Error('A IA retornou um formato inválido. Tente novamente.');
    }
  },
};
