import tradeNewsImg from "@/assets/blog/trade-news.jpg";
import digitalCustomsImg from "@/assets/blog/digital-customs.jpg";
import sustainableTradeImg from "@/assets/blog/sustainable-trade.jpg";
import asianMarketsImg from "@/assets/blog/asian-markets.jpg";
import taxReformImg from "@/assets/blog/tax-reform.jpg";
import ecommerceGlobalImg from "@/assets/blog/ecommerce-global.jpg";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  featured: boolean;
  author: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "tendencias-comercio-exterior-2025",
    title: "Tendências do Comércio Exterior para 2025",
    excerpt: "Análise completa das principais tendências que moldarão o comércio internacional nos próximos anos, incluindo digitalização e sustentabilidade.",
    content: `
      <h2>O Futuro do Comércio Internacional</h2>
      <p>O ano de 2025 promete ser um marco transformador para o comércio exterior global. Com a aceleração da digitalização e novas demandas por sustentabilidade, as empresas precisam se adaptar rapidamente para se manterem competitivas.</p>

      <h3>1. Digitalização Completa dos Processos</h3>
      <p>A transformação digital já não é mais uma opção, mas uma necessidade. Empresas que ainda operam com processos manuais estão perdendo competitividade rapidamente. Blockchain, inteligência artificial e automação estão redefinindo como fazemos negócios internacionalmente.</p>
      
      <p>Os principais benefícios incluem:</p>
      <ul>
        <li>Redução de até 70% no tempo de processamento de documentos</li>
        <li>Maior transparência e rastreabilidade nas operações</li>
        <li>Redução de erros humanos e fraudes</li>
        <li>Compliance automatizado com regulamentações internacionais</li>
      </ul>

      <h3>2. Sustentabilidade como Prioridade</h3>
      <p>As exigências ESG (Environmental, Social and Governance) deixaram de ser um diferencial para se tornarem requisito mínimo. Compradores internacionais, especialmente da Europa e América do Norte, estão cada vez mais exigentes quanto às práticas sustentáveis de seus fornecedores.</p>

      <p>Empresas precisam investir em:</p>
      <ul>
        <li>Certificações ambientais reconhecidas internacionalmente</li>
        <li>Redução de emissões de carbono na cadeia logística</li>
        <li>Transparência na origem dos produtos e matérias-primas</li>
        <li>Práticas trabalhistas justas e éticas</li>
      </ul>

      <h3>3. Nearshoring e Diversificação de Fornecedores</h3>
      <p>A pandemia mostrou os riscos de depender de poucos fornecedores concentrados em regiões específicas. Empresas estão diversificando suas cadeias de suprimento e buscando parceiros mais próximos geograficamente.</p>

      <p>Para o Brasil, isso representa oportunidades em:</p>
      <ul>
        <li>Fornecimento para mercados latino-americanos</li>
        <li>Parceria com empresas norte-americanas buscando reduzir dependência asiática</li>
        <li>Expansão no mercado de commodities sustentáveis</li>
      </ul>

      <h3>4. E-commerce Transfronteiriço</h3>
      <p>O comércio eletrônico internacional continua crescendo exponencialmente. Pequenas e médias empresas agora podem vender globalmente com investimentos relativamente baixos.</p>

      <h3>Conclusão</h3>
      <p>As empresas que se adaptarem rapidamente a essas tendências estarão melhor posicionadas para aproveitar as oportunidades do mercado global. A Wisdom Trading está preparada para ajudar sua empresa nessa jornada de transformação.</p>
    `,
    image: tradeNewsImg,
    category: "Tendências",
    date: "15 de Janeiro, 2025",
    readTime: "5 min",
    featured: true,
    author: "Equipe Wisdom Trading",
    tags: ["Tendências", "Digitalização", "Sustentabilidade", "2025"]
  },
  {
    id: "digitalizacao-aduaneira",
    title: "Digitalização Aduaneira: O Futuro já Chegou",
    excerpt: "Como a tecnologia blockchain e IA estão revolucionando os processos aduaneiros e tornando as operações mais eficientes e seguras.",
    content: `
      <h2>A Revolução Digital nas Alfândegas</h2>
      <p>Os processos aduaneiros tradicionais, conhecidos por sua burocracia e lentidão, estão passando por uma transformação radical impulsionada pela tecnologia.</p>

      <h3>Blockchain na Aduana</h3>
      <p>A tecnologia blockchain está sendo implementada em diversos portos e alfândegas ao redor do mundo, trazendo benefícios sem precedentes em termos de segurança e eficiência.</p>

      <p>Principais vantagens:</p>
      <ul>
        <li>Registro imutável de todas as transações e movimentações</li>
        <li>Redução drástica de fraudes documentais</li>
        <li>Compartilhamento seguro de informações entre múltiplos stakeholders</li>
        <li>Automação de processos através de smart contracts</li>
      </ul>

      <h3>Inteligência Artificial e Machine Learning</h3>
      <p>Sistemas de IA estão sendo usados para análise de risco, classificação fiscal automática e detecção de anomalias em tempo real.</p>

      <h3>Portos Inteligentes</h3>
      <p>A IoT (Internet das Coisas) está conectando todos os elementos da cadeia logística, desde containers até veículos de transporte, permitindo rastreamento em tempo real e gestão proativa de problemas.</p>

      <h3>Impactos para Empresas</h3>
      <p>Empresas que adotam tecnologias digitais em suas operações de comércio exterior experimentam:</p>
      <ul>
        <li>Redução de até 60% no tempo de desembaraço</li>
        <li>Economia de 30-40% em custos administrativos</li>
        <li>Previsibilidade muito maior nos prazos de entrega</li>
        <li>Melhor gestão de compliance e documentação</li>
      </ul>

      <h3>O Caminho à Frente</h3>
      <p>A digitalização aduaneira é inevitável e irreversível. Empresas que investirem cedo nessas tecnologias terão vantagens competitivas significativas.</p>
    `,
    image: digitalCustomsImg,
    category: "Tecnologia",
    date: "10 de Janeiro, 2025",
    readTime: "7 min",
    featured: true,
    author: "Equipe Wisdom Trading",
    tags: ["Tecnologia", "Blockchain", "IA", "Aduana Digital"]
  },
  {
    id: "comercio-sustentavel-esg",
    title: "Comércio Sustentável: Novas Exigências ESG",
    excerpt: "Entenda como as práticas ESG estão impactando as operações de importação e exportação e o que sua empresa precisa fazer.",
    content: `
      <h2>ESG no Comércio Internacional</h2>
      <p>As práticas ESG (Environmental, Social and Governance) deixaram de ser um diferencial competitivo para se tornarem requisito básico no comércio internacional.</p>

      <h3>O Que São Práticas ESG?</h3>
      <p>ESG representa três pilares fundamentais da sustentabilidade corporativa que estão transformando o comércio global.</p>

      <h3>Environmental (Ambiental)</h3>
      <ul>
        <li>Redução de emissões de carbono</li>
        <li>Gestão eficiente de recursos naturais</li>
        <li>Minimização de resíduos e poluição</li>
        <li>Uso de energias renováveis</li>
      </ul>

      <h3>Social</h3>
      <ul>
        <li>Condições justas de trabalho</li>
        <li>Diversidade e inclusão</li>
        <li>Impacto nas comunidades locais</li>
        <li>Direitos humanos na cadeia de suprimentos</li>
      </ul>

      <h3>Governance (Governança)</h3>
      <ul>
        <li>Transparência nas operações</li>
        <li>Ética nos negócios</li>
        <li>Compliance regulatório</li>
        <li>Responsabilidade corporativa</li>
      </ul>

      <h3>Impactos no Comércio Exterior</h3>
      <p>Grandes compradores internacionais, especialmente de mercados desenvolvidos, estão exigindo comprovação de práticas ESG de seus fornecedores. Empresas que não se adequarem podem perder acesso a mercados importantes.</p>

      <h3>Como Implementar ESG</h3>
      <ol>
        <li>Realizar diagnóstico completo das práticas atuais</li>
        <li>Estabelecer metas claras e mensuráveis</li>
        <li>Investir em certificações reconhecidas</li>
        <li>Implementar sistemas de monitoramento</li>
        <li>Comunicar transparentemente os resultados</li>
      </ol>

      <h3>Oportunidades</h3>
      <p>Empresas com práticas ESG sólidas têm acesso a:</p>
      <ul>
        <li>Financiamento verde com taxas mais baixas</li>
        <li>Mercados premium dispostos a pagar mais</li>
        <li>Maior fidelidade de clientes e parceiros</li>
        <li>Melhor reputação e valor de marca</li>
      </ul>
    `,
    image: sustainableTradeImg,
    category: "Tendências",
    date: "5 de Janeiro, 2025",
    readTime: "6 min",
    featured: false,
    author: "Equipe Wisdom Trading",
    tags: ["ESG", "Sustentabilidade", "Compliance", "Meio Ambiente"]
  },
  {
    id: "oportunidades-mercados-asiaticos",
    title: "Oportunidades nos Mercados Asiáticos",
    excerpt: "Guia completo sobre como aproveitar o crescimento dos mercados asiáticos, com foco em China, Índia e Sudeste Asiático.",
    content: `
      <h2>Ásia: O Motor do Crescimento Global</h2>
      <p>A região asiática continua sendo o principal motor de crescimento econômico global, oferecendo oportunidades sem precedentes para empresas brasileiras.</p>

      <h3>China: Transformação e Oportunidades</h3>
      <p>Apesar dos desafios recentes, a China permanece como um parceiro comercial fundamental, especialmente para commodities e produtos de alto valor agregado.</p>

      <p>Setores promissores:</p>
      <ul>
        <li>Agronegócio (soja, carnes, açúcar)</li>
        <li>Mineração (ferro, cobre, alumínio)</li>
        <li>Tecnologia verde e energias renováveis</li>
        <li>Produtos premium e sustentáveis</li>
      </ul>

      <h3>Índia: O Gigante em Ascensão</h3>
      <p>Com mais de 1,4 bilhão de habitantes e crescimento econômico robusto, a Índia representa uma das maiores oportunidades de longo prazo.</p>

      <p>Oportunidades-chave:</p>
      <ul>
        <li>Infraestrutura e construção</li>
        <li>Tecnologia e software</li>
        <li>Energia renovável</li>
        <li>Manufatura e automação</li>
      </ul>

      <h3>Sudeste Asiático: Diversificação Estratégica</h3>
      <p>Países como Vietnã, Tailândia, Indonésia e Malásia estão emergindo como alternativas importantes à China, oferecendo custos competitivos e crescimento acelerado.</p>

      <h3>Estratégias de Entrada</h3>
      <ol>
        <li>Pesquisa de mercado detalhada</li>
        <li>Parcerias com distribuidores locais</li>
        <li>Adaptação de produtos ao gosto local</li>
        <li>Investimento em relacionamento de longo prazo</li>
        <li>Compreensão das diferenças culturais</li>
      </ol>

      <h3>Desafios e Como Superá-los</h3>
      <ul>
        <li>Barreiras culturais e de idioma</li>
        <li>Diferenças regulatórias</li>
        <li>Logística complexa</li>
        <li>Proteção de propriedade intelectual</li>
      </ul>

      <p>A Wisdom Trading tem expertise e parceiros em toda a Ásia para facilitar sua entrada nesses mercados promissores.</p>
    `,
    image: asianMarketsImg,
    category: "Mercados",
    date: "28 de Dezembro, 2024",
    readTime: "8 min",
    featured: false,
    author: "Equipe Wisdom Trading",
    tags: ["Ásia", "Mercados", "Exportação", "Oportunidades"]
  },
  {
    id: "reforma-tributaria-impactos-comex",
    title: "Reforma Tributária e Impactos no Comex",
    excerpt: "Análise detalhada da reforma tributária brasileira e seus impactos nas operações de comércio exterior.",
    content: `
      <h2>Reforma Tributária: Mudanças Estruturais</h2>
      <p>A reforma tributária brasileira representa a maior mudança no sistema fiscal em décadas, com impactos significativos para o comércio exterior.</p>

      <h3>Principais Mudanças</h3>
      <p>A reforma traz alterações fundamentais na forma como impostos são cobrados sobre operações de importação e exportação.</p>

      <h3>IVA Dual: CBS e IBS</h3>
      <p>A substituição de múltiplos tributos por um IVA dual simplifica significativamente o sistema tributário:</p>
      <ul>
        <li>CBS (Contribuição sobre Bens e Serviços) - Federal</li>
        <li>IBS (Imposto sobre Bens e Serviços) - Estadual/Municipal</li>
      </ul>

      <h3>Impactos na Importação</h3>
      <p>Mudanças importantes no tratamento tributário de produtos importados:</p>
      <ul>
        <li>Simplificação do cálculo de tributos</li>
        <li>Maior previsibilidade nos custos</li>
        <li>Redução de contencioso tributário</li>
        <li>Período de transição de 7 anos</li>
      </ul>

      <h3>Benefícios para Exportadores</h3>
      <p>A reforma traz vantagens significativas para empresas exportadoras:</p>
      <ul>
        <li>Crédito tributário mais simples e rápido</li>
        <li>Redução da burocracia</li>
        <li>Maior competitividade internacional</li>
        <li>Cashback automático de créditos</li>
      </ul>

      <h3>Período de Transição</h3>
      <p>A implementação será gradual entre 2026 e 2033:</p>
      <ol>
        <li>2026: Início da CBS</li>
        <li>2027-2032: Transição progressiva</li>
        <li>2033: Implementação completa</li>
      </ol>

      <h3>Como Se Preparar</h3>
      <ul>
        <li>Revisar estrutura tributária atual</li>
        <li>Planejar fluxo de caixa para transição</li>
        <li>Investir em sistemas de gestão atualizados</li>
        <li>Capacitar equipes para novo sistema</li>
        <li>Buscar consultoria especializada</li>
      </ul>

      <h3>Oportunidades</h3>
      <p>A reforma cria oportunidades para empresas que se prepararem adequadamente, incluindo redução de custos operacionais e maior agilidade nas operações.</p>
    `,
    image: taxReformImg,
    category: "Legislação",
    date: "20 de Dezembro, 2024",
    readTime: "10 min",
    featured: false,
    author: "Equipe Wisdom Trading",
    tags: ["Tributação", "Reforma Tributária", "Legislação", "IVA"]
  },
  {
    id: "ecommerce-crossborder-ascensao",
    title: "E-commerce Cross-Border em Ascensão",
    excerpt: "Como o comércio eletrônico internacional está crescendo e as oportunidades para empresas brasileiras expandirem globalmente.",
    content: `
      <h2>A Era do E-commerce Global</h2>
      <p>O comércio eletrônico transfronteiriço está crescendo três vezes mais rápido que o e-commerce doméstico, abrindo portas para empresas de todos os tamanhos.</p>

      <h3>Números do Crescimento</h3>
      <p>O mercado global de e-commerce cross-border deve ultrapassar US$ 2 trilhões até 2026, com crescimento anual superior a 20%.</p>

      <h3>Principais Plataformas</h3>
      <ul>
        <li>Amazon Global - Acesso a milhões de compradores</li>
        <li>Alibaba/AliExpress - Mercado asiático e global</li>
        <li>Mercado Livre - Líder na América Latina</li>
        <li>Shopify - Plataforma própria internacional</li>
      </ul>

      <h3>Vantagens para PMEs</h3>
      <p>Pequenas e médias empresas agora podem competir globalmente:</p>
      <ul>
        <li>Baixo investimento inicial</li>
        <li>Acesso direto a consumidores internacionais</li>
        <li>Ferramentas de marketing digital acessíveis</li>
        <li>Logística terceirizada disponível</li>
      </ul>

      <h3>Desafios Logísticos</h3>
      <p>Apesar das oportunidades, há desafios importantes:</p>
      <ul>
        <li>Gestão de fretes internacionais</li>
        <li>Taxas alfandegárias e impostos</li>
        <li>Prazos de entrega longos</li>
        <li>Rastreamento e transparência</li>
      </ul>

      <h3>Estratégias de Sucesso</h3>
      <ol>
        <li>Escolher nichos com alta demanda internacional</li>
        <li>Investir em fotos e descrições profissionais</li>
        <li>Oferecer atendimento em múltiplos idiomas</li>
        <li>Trabalhar com parceiros logísticos confiáveis</li>
        <li>Construir reputação através de avaliações</li>
      </ol>

      <h3>Pagamentos Internacionais</h3>
      <p>Soluções modernas facilitam recebimento de pagamentos:</p>
      <ul>
        <li>PayPal e Stripe - Aceitos globalmente</li>
        <li>Cartões de crédito internacionais</li>
        <li>Criptomoedas para alguns mercados</li>
        <li>Gateways de pagamento localizados</li>
      </ul>

      <h3>Marketing Digital Global</h3>
      <p>Estratégias eficazes para alcançar consumidores internacionais:</p>
      <ul>
        <li>SEO internacional e multilíngue</li>
        <li>Anúncios pagos segmentados por país</li>
        <li>Influenciadores locais</li>
        <li>Redes sociais globais</li>
      </ul>

      <h3>O Futuro é Agora</h3>
      <p>Empresas que não explorarem o e-commerce internacional perderão oportunidades significativas de crescimento nos próximos anos.</p>
    `,
    image: ecommerceGlobalImg,
    category: "Tendências",
    date: "15 de Dezembro, 2024",
    readTime: "6 min",
    featured: false,
    author: "Equipe Wisdom Trading",
    tags: ["E-commerce", "Cross-border", "Digital", "Marketplace"]
  }
];

export const getBlogPostById = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};

export const getRelatedPosts = (currentPost: BlogPost, limit: number = 3): BlogPost[] => {
  return blogPosts
    .filter(post => 
      post.id !== currentPost.id && 
      (post.category === currentPost.category || 
       post.tags.some(tag => currentPost.tags.includes(tag)))
    )
    .slice(0, limit);
};
