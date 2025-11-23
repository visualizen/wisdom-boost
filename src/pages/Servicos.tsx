import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Package, Users, FileText, Shield, TrendingUp, ClipboardCheck, CheckCircle, ArrowRight, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

// Import images
import importacaoImg from "@/assets/services/importacao.jpg";
import representacaoImg from "@/assets/services/representacao.jpg";
import consultoriaImg from "@/assets/services/consultoria.jpg";
import logisticaImg from "@/assets/services/logistica.jpg";
import estudosImg from "@/assets/services/estudos.jpg";
import viabilidadeImg from "@/assets/services/viabilidade.jpg";

const Servicos = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      icon: Package,
      title: "Importação por Encomenda e C&O",
      description: "Soluções completas para importação sob encomenda e operações por conta e ordem.",
      details: "Oferecemos serviços especializados em modalidades de importação que permitem maior flexibilidade e economia para sua empresa. Na importação por encomenda, atuamos como importador legal da mercadoria, enquanto você mantém o controle comercial da operação.",
      benefits: [
        "Redução de custos operacionais e tributários",
        "Simplificação do processo de importação",
        "Expertise em procedimentos aduaneiros",
        "Gestão completa da documentação necessária",
        "Otimização de lead time e prazos de entrega"
      ],
      image: importacaoImg,
      span: "lg:col-span-2 lg:row-span-2"
    },
    {
      icon: Users,
      title: "Representação Comercial Internacional",
      description: "Conectamos você aos melhores parceiros comerciais globais.",
      details: "Nossa rede global de contatos e profundo conhecimento dos mercados internacionais permite que sua empresa tenha presença comercial em diversos países sem a necessidade de estrutura própria.",
      benefits: [
        "Acesso a rede global de fornecedores qualificados",
        "Negociação em diversos idiomas e culturas",
        "Redução de custos com estrutura internacional",
        "Inteligência de mercado e análise de oportunidades",
        "Acompanhamento e suporte em feiras internacionais"
      ],
      image: representacaoImg,
      span: "lg:col-span-1"
    },
    {
      icon: FileText,
      title: "Consultoria Fiscal e Tributária",
      description: "Assessoria especializada para maximizar eficiência e conformidade.",
      details: "Nossa equipe de especialistas em tributação internacional oferece consultoria completa para otimizar a carga tributária de suas operações de comércio exterior.",
      benefits: [
        "Planejamento tributário estratégico",
        "Identificação de benefícios fiscais aplicáveis",
        "Análise de regimes especiais (Drawback, Ex-Tarifário)",
        "Consultoria em acordos internacionais",
        "Redução legal da carga tributária"
      ],
      image: consultoriaImg,
      span: "lg:col-span-1"
    },
    {
      icon: Shield,
      title: "Gestão Logística Internacional",
      description: "Gerenciamento completo da logística e proteção da sua carga.",
      details: "Oferecemos soluções logísticas end-to-end, coordenando toda a cadeia de transporte internacional desde a coleta no fornecedor até a entrega no seu estabelecimento.",
      benefits: [
        "Gerenciamento completo da cadeia logística",
        "Seguro de carga internacional abrangente",
        "Rastreamento em tempo real das mercadorias",
        "Otimização de custos com consolidação de cargas",
        "Expertise em transporte marítimo, aéreo e terrestre"
      ],
      image: logisticaImg,
      span: "lg:col-span-1"
    },
    {
      icon: TrendingUp,
      title: "Estudos de NCM e Acordos Tarifários",
      description: "Análise detalhada de classificação fiscal e benefícios tarifários.",
      details: "Realizamos estudos técnicos aprofundados para classificação correta de mercadorias na NCM, identificação de acordos tarifários preferenciais e viabilidade de utilização de regimes especiais.",
      benefits: [
        "Classificação fiscal precisa e segura",
        "Identificação de acordos de livre comércio aplicáveis",
        "Análise de regimes aduaneiros especiais",
        "Redução de alíquotas através de acordos internacionais",
        "Consultoria para obtenção de Ex-Tarifário"
      ],
      image: estudosImg,
      span: "lg:col-span-1"
    },
    {
      icon: ClipboardCheck,
      title: "Análise de Viabilidade",
      description: "Estudos técnicos e financeiros para avaliar rentabilidade das operações.",
      details: "Realizamos estudos completos de viabilidade que incluem análise tributária, custos logísticos, requisitos regulatórios, riscos cambiais e projeção de rentabilidade.",
      benefits: [
        "Análise completa de custos e tributos",
        "Avaliação de requisitos regulatórios e licenças",
        "Projeção de rentabilidade da operação",
        "Identificação de riscos e oportunidades",
        "Recomendações estratégicas personalizadas"
      ],
      image: viabilidadeImg,
      span: "lg:col-span-2"
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      
      {/* Hero Section with Parallax Effect */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary-light/5">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
            <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-primary-dark/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full mb-6 border border-primary/20">
              <Sparkles className="text-primary" size={16} />
              <span className="text-sm font-medium text-primary">Excelência em Comércio Exterior</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent leading-tight">
              Serviços que transformam
              <br />
              seu comércio exterior
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Soluções completas e personalizadas com tecnologia de ponta e expertise internacional
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary text-lg px-8">
                Fale com Especialista
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Services Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent">
              Nossa Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Serviços especializados para cada necessidade do seu negócio
            </p>
          </div>

          {/* Asymmetric Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`${service.span} group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-700 hover:scale-[1.02] cursor-pointer`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Image Background with Overlay */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      hoveredIndex === index ? "scale-110 blur-sm" : "scale-100 blur-0"
                    }`}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/85 transition-opacity duration-500 ${
                    hoveredIndex === index ? "opacity-95" : "opacity-90"
                  }`} />
                </div>

                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-lg`} />

                {/* Content */}
                <CardHeader className="relative z-10">
                  <div className={`w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 shadow-lg transition-all duration-500 ${
                    hoveredIndex === index ? "scale-110 shadow-2xl shadow-primary/50" : ""
                  }`}>
                    <service.icon className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-2xl mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.details}
                  </p>

                  {/* Show benefits on hover */}
                  <div className={`transition-all duration-500 ${
                    hoveredIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden`}>
                    <div className="space-y-2 pt-4 border-t border-border/50">
                      {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-start gap-2">
                          <CheckCircle className="text-primary shrink-0 mt-0.5" size={16} />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button 
                    variant="ghost" 
                    className="mt-4 text-primary hover:text-primary-dark group/btn"
                  >
                    Saiba Mais
                    <ArrowRight className="ml-2 transition-transform group-hover/btn:translate-x-1" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-transparent to-primary-light/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "15+", label: "Anos de Experiência" },
              { value: "500+", label: "Clientes Atendidos" },
              { value: "30+", label: "Países de Atuação" },
              { value: "98%", label: "Satisfação de Clientes" }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tire suas dúvidas sobre nossos serviços
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "Qual a diferença entre importação por encomenda e conta e ordem?",
                  answer: "Na importação por encomenda, atuamos como importador legal da mercadoria em nome de terceiros. Já na modalidade conta e ordem, você é o importador legal, mas utilizamos nosso registro para realizar a operação, otimizando tributos e processos."
                },
                {
                  question: "Como funciona a consultoria fiscal e tributária?",
                  answer: "Analisamos toda a operação de comércio exterior identificando oportunidades de redução legal da carga tributária através de regimes especiais, acordos internacionais e classificações fiscais adequadas. Oferecemos planejamento tributário estratégico personalizado para cada cliente."
                },
                {
                  question: "Vocês atuam em quais países?",
                  answer: "Temos uma rede global de parceiros comerciais e atuamos em todos os continentes. Nossos principais mercados incluem Ásia (China, Índia, Coreia do Sul), Europa (Alemanha, Itália, Espanha), América do Norte (Estados Unidos, Canadá) e América Latina."
                },
                {
                  question: "Quanto tempo leva uma operação de importação?",
                  answer: "O prazo varia conforme o modal de transporte e origem da mercadoria. Transporte marítimo geralmente leva de 30 a 45 dias, enquanto aéreo pode levar de 7 a 15 dias. Trabalhamos para otimizar estes prazos através de planejamento logístico eficiente."
                },
                {
                  question: "Como é calculado o custo de uma importação?",
                  answer: "O custo total inclui o valor da mercadoria (FOB), frete internacional, seguro, impostos (II, IPI, PIS, COFINS, ICMS), despesas aduaneiras e nossa taxa de serviço. Realizamos análise de viabilidade detalhada antes de cada operação para você ter total previsibilidade de custos."
                }
              ].map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="bg-card/50 backdrop-blur-sm rounded-lg px-6 border border-border/50 hover:border-primary/50 transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Pronto para transformar seu comércio exterior?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Entre em contato com nossos especialistas e descubra como podemos ajudar sua empresa a crescer globalmente
            </p>
            <Button size="lg" className="bg-gradient-primary text-lg px-10">
              Solicite uma Consulta Gratuita
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Servicos;
