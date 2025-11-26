import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Factory, Shield, TrendingUp, Zap } from "lucide-react";
import ferroAcoImg from "@/assets/segments/ferro-aco.png";

const FerroAco = () => {
  const [activeCase, setActiveCase] = useState(0);

  const cases = [
    {
      title: "Upgrade de Alto-Forno - RJ",
      client: "Siderúrgica Nacional S.A.",
      challenge: "Alto-forno com 25 anos de operação apresentando queda de eficiência e aumento de custos",
      solution: "Importação de refratários de última geração da Áustria e sistema de controle automatizado",
      results: [
        "42% de aumento na vida útil do revestimento refratário",
        "18% de redução no consumo de coque",
        "Aumento de 25% na produção diária",
        "Melhoria de 30% na qualidade do gusa"
      ],
      timeline: [
        { phase: "Auditoria Técnica", duration: "1 mês", description: "Análise completa do estado atual e identificação de oportunidades" },
        { phase: "Especificação e Sourcing", duration: "2 meses", description: "Seleção de fornecedores austríacos e especificação técnica detalhada" },
        { phase: "Importação e Logística", duration: "3 meses", description: "Gestão de importação de materiais críticos e equipamentos" },
        { phase: "Parada Programada e Reforma", duration: "6 semanas", description: "Execução da reforma durante parada programada" },
        { phase: "Ramp-up e Otimização", duration: "2 meses", description: "Retomada gradual e ajuste de parâmetros operacionais" }
      ]
    },
    {
      title: "Nova Linha de Laminação - MG",
      client: "Aços Especiais Ltda.",
      challenge: "Necessidade de diversificar portfólio com produtos laminados de alta resistência",
      solution: "Implementação de laminador de última geração da Alemanha com controle de espessura por raios-X",
      results: [
        "Capacidade de 200 ton/dia de laminados especiais",
        "Precisão de espessura de ±0.02mm",
        "Qualificação para fornecimento automotivo Tier 1",
        "Redução de 35% em retrabalho"
      ],
      timeline: [
        { phase: "Estudo de Viabilidade", duration: "2 meses", description: "Análise de mercado e viabilidade técnico-econômica" },
        { phase: "Negociação Internacional", duration: "3 meses", description: "Negociação com fabricante alemão e estruturação financeira" },
        { phase: "Preparação de Infraestrutura", duration: "4 meses", description: "Adequação de utilities e fundações para novo equipamento" },
        { phase: "Importação e Instalação", duration: "5 meses", description: "Transporte especial e instalação com equipe técnica alemã" },
        { phase: "Comissionamento", duration: "2 meses", description: "Testes, ajustes e qualificação de processos" }
      ]
    }
  ];

  const products = [
    {
      icon: Factory,
      title: "Equipamentos de Produção",
      items: [
        "Alto-fornos e equipamentos auxiliares",
        "Convertedores e aciarias elétricas",
        "Laminadores a quente e a frio",
        "Máquinas de lingotamento contínuo",
        "Fornos de reaquecimento"
      ]
    },
    {
      icon: Shield,
      title: "Materiais e Insumos",
      items: [
        "Refratários especiais de alta performance",
        "Ferro-ligas e aditivos",
        "Eletrodos e consumíveis",
        "Sistemas de proteção e revestimento"
      ]
    }
  ];

  const differentials = [
    {
      icon: Zap,
      title: "Tecnologia de Ponta",
      description: "Acesso exclusivo às mais modernas tecnologias siderúrgicas da Europa, Ásia e América do Norte, garantindo competitividade internacional."
    },
    {
      icon: TrendingUp,
      title: "Redução de Custos Comprovada",
      description: "Histórico de projetos com ROI médio de 24 meses através de ganhos de eficiência energética e produtiva."
    },
    {
      icon: CheckCircle2,
      title: "Conformidade Normativa",
      description: "Garantia de atendimento a todas as normas técnicas brasileiras (ABNT) e internacionais (ISO, DIN, ASTM) aplicáveis ao setor."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={ferroAcoImg}
            alt="Indústria de Ferro e Aço"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Ferro e Aço
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Equipamentos e soluções de alta performance para a indústria siderúrgica brasileira
          </p>
        </div>
      </section>

      {/* Descrição Detalhada */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent">
              Nossa Atuação no Setor Siderúrgico
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                A Wisdom é parceira estratégica das principais siderúrgicas brasileiras há mais de uma década. Nossa expertise 
                abrange toda a cadeia produtiva do aço: desde a redução do minério até a laminação e acabamento de produtos finais.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Trabalhamos com os maiores fabricantes mundiais de equipamentos siderúrgicos, incluindo empresas alemãs, austríacas, 
                japonesas e coreanas. Oferecemos desde componentes críticos como refratários de alta performance até linhas completas 
                de laminação e tratamento térmico. Nossa atuação inclui também a importação de insumos estratégicos como ferro-ligas, 
                eletrodos especiais e aditivos para controle metalúrgico.
              </p>
              <p className="text-lg leading-relaxed">
                Além da importação de equipamentos, prestamos consultoria técnica especializada, auxiliando na especificação correta 
                de materiais e equipamentos, otimização de processos existentes e planejamento de expansões e modernizações. Nossa 
                equipe conta com engenheiros metalurgistas com vasta experiência em processos siderúrgicos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cases de Sucesso - Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent">
            Cases de Sucesso
          </h2>

          {/* Case Selector */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {cases.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveCase(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeCase === index
                    ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                    : 'bg-card text-muted-foreground hover:bg-card/80'
                }`}
              >
                Case {index + 1}
              </button>
            ))}
          </div>

          {/* Case Content */}
          <div className="max-w-5xl mx-auto">
            <Card className="mb-8 border-primary/20">
              <CardHeader>
                <CardTitle className="text-3xl">{cases[activeCase].title}</CardTitle>
                <p className="text-lg text-muted-foreground mt-2">Cliente: {cases[activeCase].client}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Desafio</h3>
                  <p className="text-muted-foreground">{cases[activeCase].challenge}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Solução Implementada</h3>
                  <p className="text-muted-foreground">{cases[activeCase].solution}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Resultados Alcançados</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {cases[activeCase].results.map((result, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-muted/50 p-4 rounded-lg">
                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground font-medium">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30" />
              
              {cases[activeCase].timeline.map((phase, idx) => (
                <div key={idx} className="relative pl-20 pb-12 last:pb-0">
                  <div className="absolute left-6 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-xl">{phase.phase}</CardTitle>
                        <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {phase.duration}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{phase.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Produtos e Serviços */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent">
            Produtos e Serviços para Siderurgia
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {products.map((product, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <product.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{product.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {product.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais Competitivos */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent">
            Por Que Escolher a Wisdom para Siderurgia
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {differentials.map((diff, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <diff.icon className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{diff.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{diff.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-light via-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pronto para Elevar sua Produção Siderúrgica?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Fale com nossos especialistas e descubra como podemos otimizar seus processos e reduzir custos.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ContactForm showServiceSelect={true} defaultService="Ferro e Aço - Equipamentos Siderúrgicos" />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FerroAco;