import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Package, Users, FileText, Shield, TrendingUp, ClipboardCheck, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Servicos = () => {
  const services = [
    {
      icon: Package,
      title: "Importação por Encomenda e por Conta e Ordem (C&O)",
      description: "Soluções completas para importação sob encomenda e operações por conta e ordem, otimizando custos e processos.",
      details: "Oferecemos serviços especializados em modalidades de importação que permitem maior flexibilidade e economia para sua empresa. Na importação por encomenda, atuamos como importador legal da mercadoria, enquanto você mantém o controle comercial da operação. Já na modalidade conta e ordem, intermediamos a operação entre você e o fornecedor internacional, otimizando tributos e processos aduaneiros.",
      benefits: [
        "Redução de custos operacionais e tributários",
        "Simplificação do processo de importação",
        "Expertise em procedimentos aduaneiros",
        "Gestão completa da documentação necessária",
        "Otimização de lead time e prazos de entrega"
      ]
    },
    {
      icon: Users,
      title: "Representação Comercial Internacional",
      description: "Representamos sua empresa no mercado internacional, conectando você aos melhores parceiros comerciais globais.",
      details: "Nossa rede global de contatos e profundo conhecimento dos mercados internacionais permite que sua empresa tenha presença comercial em diversos países sem a necessidade de estrutura própria. Atuamos como seus olhos e ouvidos no exterior, prospectando oportunidades, negociando com fornecedores e garantindo que seus interesses sejam bem representados.",
      benefits: [
        "Acesso a rede global de fornecedores qualificados",
        "Negociação em diversos idiomas e culturas",
        "Redução de custos com estrutura internacional",
        "Inteligência de mercado e análise de oportunidades",
        "Acompanhamento e suporte em feiras e eventos internacionais"
      ]
    },
    {
      icon: FileText,
      title: "Consultoria Fiscal e Tributária em Comércio Exterior",
      description: "Assessoria especializada em questões fiscais e tributárias para maximizar eficiência e conformidade nas operações.",
      details: "Nossa equipe de especialistas em tributação internacional oferece consultoria completa para otimizar a carga tributária de suas operações de comércio exterior. Analisamos todas as possibilidades de regimes especiais, acordos internacionais e benefícios fiscais aplicáveis ao seu negócio, garantindo total conformidade legal e máxima economia tributária.",
      benefits: [
        "Planejamento tributário estratégico",
        "Identificação de benefícios fiscais aplicáveis",
        "Análise de regimes especiais (Drawback, Ex-Tarifário, etc.)",
        "Consultoria em acordos internacionais",
        "Redução legal da carga tributária"
      ]
    },
    {
      icon: Shield,
      title: "Gestão Logística Internacional e Seguro de Carga",
      description: "Gerenciamento completo da logística e proteção da sua carga desde a origem até o destino final.",
      details: "Oferecemos soluções logísticas end-to-end, coordenando toda a cadeia de transporte internacional desde a coleta no fornecedor até a entrega no seu estabelecimento. Incluímos gestão de seguros de carga, rastreamento em tempo real, consolidação de cargas e escolha dos melhores modais de transporte para otimizar custos e prazos.",
      benefits: [
        "Gerenciamento completo da cadeia logística",
        "Seguro de carga internacional abrangente",
        "Rastreamento em tempo real das mercadorias",
        "Otimização de custos com consolidação de cargas",
        "Expertise em transporte marítimo, aéreo e terrestre"
      ]
    },
    {
      icon: TrendingUp,
      title: "Estudos de NCM, Acordos Tarifários e Regimes Especiais",
      description: "Análise detalhada de classificação fiscal e aproveitamento de benefícios tarifários e regimes especiais.",
      details: "Realizamos estudos técnicos aprofundados para classificação correta de mercadorias na NCM (Nomenclatura Comum do Mercosul), identificação de acordos tarifários preferenciais e viabilidade de utilização de regimes especiais. Nosso trabalho garante o aproveitamento máximo de benefícios fiscais e redução de tributos de forma totalmente legal e segura.",
      benefits: [
        "Classificação fiscal precisa e segura",
        "Identificação de acordos de livre comércio aplicáveis",
        "Análise de regimes aduaneiros especiais",
        "Redução de alíquotas através de acordos internacionais",
        "Consultoria para obtenção de Ex-Tarifário"
      ]
    },
    {
      icon: ClipboardCheck,
      title: "Análise de Viabilidade de Importação/Exportação",
      description: "Estudos técnicos e financeiros para avaliar a viabilidade e rentabilidade das suas operações de comércio exterior.",
      details: "Antes de iniciar qualquer operação internacional, é fundamental entender todos os custos, riscos e oportunidades envolvidos. Realizamos estudos completos de viabilidade que incluem análise tributária, custos logísticos, requisitos regulatórios, riscos cambiais e projeção de rentabilidade. Nosso objetivo é fornecer todas as informações necessárias para que você tome decisões estratégicas seguras e fundamentadas.",
      benefits: [
        "Análise completa de custos e tributos",
        "Avaliação de requisitos regulatórios e licenças",
        "Projeção de rentabilidade da operação",
        "Identificação de riscos e oportunidades",
        "Recomendações estratégicas personalizadas"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-secondary via-background to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent">
              Nossos Serviços
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Soluções completas e personalizadas para todas as suas necessidades em comércio exterior
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center shrink-0 shadow-lg">
                      <service.icon className="text-white" size={32} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl md:text-3xl mb-3">{service.title}</CardTitle>
                      <CardDescription className="text-lg">{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Sobre o Serviço</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.details}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Principais Benefícios</h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start gap-3">
                          <CheckCircle className="text-primary shrink-0 mt-0.5" size={20} />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-secondary">
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
              <AccordionItem value="item-1" className="bg-card rounded-lg px-6 border border-border/50">
                <AccordionTrigger className="text-left font-semibold">
                  Qual a diferença entre importação por encomenda e conta e ordem?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Na importação por encomenda, atuamos como importador legal da mercadoria em nome de terceiros. Já na modalidade conta e ordem, você é o importador legal, mas utilizamos nosso registro para realizar a operação, otimizando tributos e processos.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card rounded-lg px-6 border border-border/50">
                <AccordionTrigger className="text-left font-semibold">
                  Como funciona a consultoria fiscal e tributária?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Analisamos toda a operação de comércio exterior identificando oportunidades de redução legal da carga tributária através de regimes especiais, acordos internacionais e classificações fiscais adequadas. Oferecemos planejamento tributário estratégico personalizado para cada cliente.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card rounded-lg px-6 border border-border/50">
                <AccordionTrigger className="text-left font-semibold">
                  Vocês atuam em quais países?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Temos uma rede global de parceiros comerciais e atuamos em todos os continentes. Nossos principais mercados incluem Ásia (China, Índia, Coreia do Sul), Europa (Alemanha, Itália, Espanha), América do Norte (Estados Unidos, Canadá) e América Latina.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-card rounded-lg px-6 border border-border/50">
                <AccordionTrigger className="text-left font-semibold">
                  Quanto tempo leva uma operação de importação?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  O prazo varia conforme o modal de transporte e origem da mercadoria. Transporte marítimo geralmente leva de 30 a 45 dias, enquanto aéreo pode levar de 7 a 15 dias. Trabalhamos para otimizar estes prazos através de planejamento logístico eficiente.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-card rounded-lg px-6 border border-border/50">
                <AccordionTrigger className="text-left font-semibold">
                  Como é calculado o custo de uma importação?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  O custo total inclui o valor da mercadoria (FOB), frete internacional, seguro, impostos (II, IPI, PIS, COFINS, ICMS), despesas aduaneiras e nossa taxa de serviço. Realizamos análise de viabilidade detalhada antes de cada operação para você ter total previsibilidade de custos.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Servicos;
