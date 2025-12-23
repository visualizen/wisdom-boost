# Plano de Implementação: Versão 1.0 (Publicação)

Este plano organiza as tarefas restantes em uma ordem lógica para minimizar retrabalho e garantir uma base sólida para o lançamento.

## Fase 1: Fundação Estrutural (Prioridade Alta)
Ajustes que afetam todo o site devem ser feitos primeiro.

### 1. Suporte Multi-idiomas (PT-BR, EN, ES)
Isso é estrutural. Precisamos refatorar o texto de todos os componentes para usar um dicionário de traduções.
- **Por que agora?** Adicionar idiomas depois de criar mais features duplica o trabalho de tradução.
- **Passos:**
  - Criar contexto de idioma (`LanguageContext`).
  - Criar arquivos de tradução (JSON/TS) para cada idioma.
  - Substituir textos hardcoded por chaves de tradução.
  - Adicionar seletor de idioma no Header.

## Fase 2: Front-end Features
Funcionalidades visuais que melhoram a experiência do usuário.

### 2. Barra de Pesquisa no Blog
- Implementar campo de busca.
- Filtrar posts em tempo real (por título/conteúdo).
- Estado vazio (ex: "Nenhum resultado encontrado").

## Fase 3: Backend & Administrativo (Supabase)
Tornar o site dinâmico e funcional.

### 3. Painel Administrativo (CMS)
- Criar página `/admin` protegida por senha.
- Formulário para Criar/Editar/Deletar posts do Blog.
- Upload de imagens para o Supabase Storage.

### 4. Notificações de Lead (Email)
- Configurar tabela `leads` no Supabase.
- Usar **Edge Functions** (Supabase) ou integração SMTP (Resend/SendGrid) para enviar email ao administrador quando um formulário de contato for preenchido.

## Fase 4: Otimização e Deploy
Polimento final antes de ir para o ar.

### 5. Auditoria Final SEO & Performance
- Verificar meta tags em todas as páginas e idiomas.
- Otimizar imagens (WebP, tamanhos corretos).
- Testar formulários.

### 6. Configuração de Domínio
- Configurar DNS no provedor (GoDaddy, Registro.br, etc.) para apontar para a Vercel/Netlify.
- Configurar SSL (HTTPS).

---

## 💡 Recomendação de Abordagem

Eu recomendo fortemente começarmos pela **Fase 1 (Idiomas)**.
É a tarefa mais trabalhosa e "chata", mas é a base para um site internacional. Se deixarmos para o final, teremos que revisar cada arquivo novamente.

Podemos começar agora?
