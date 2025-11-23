import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Package, Users, FileText, Shield, TrendingUp, ClipboardCheck, CheckCircle, Sparkles, Briefcase } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import importExportImage from "@/assets/services/import-export.jpg";
import internationalRepImage from "@/assets/services/international-representation.jpg";
import fiscalConsultingImage from "@/assets/services/fiscal-consulting.jpg";
import logisticsManagementImage from "@/assets/services/logistics-management.jpg";
import tariffStudiesImage from "@/assets/services/tariff-studies.jpg";
import viabilityAnalysisImage from "@/assets/services/viability-analysis.jpg";
import heroImage from "@/assets/quem-somos-hero.jpg";

const Servicos = () => {
  const services = [
    {
      icon: Package,
      title: "Importação por Encomenda e por Conta e Ordem (C&O)",
      description: "Soluções completas para importação sob encomenda e operações por conta e ordem, otimizando custos e processos.",
      details: "Oferecemos serviços especializados em modalidades de importação que permitem maior flexibilidade e economia para sua empresa. Na importação por encomenda, atuamos como importador legal da mercadoria, enquanto você mantém o controle comercial da operação. Já na modalidade conta e ordem, intermediamos a operação entre você e o fornecedor internacional, otimizando tributos e processos aduaneiros.",
      image: importExportImage,
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
      image: internationalRepImage,
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
      image: fiscalConsultingImage,
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
      image: logisticsManagementImage,
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
      image: tariffStudiesImage,
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
      image: viabilityAnalysisImage,
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
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-cyan-900/70 to-sky-900/80"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3),transparent_70%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-full border-2 border-blue-400/30">
              <Briefcase className="w-5 h-5 text-cyan-400" />
              <span className="text-white font-semibold text-lg">Soluções Completas</span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-2xl">
              Nossos Serviços
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 font-light">
              Soluções <span className="font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">completas e personalizadas</span> para o comércio exterior
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Services Detail Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative">
                  <div className={`grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Image */}
                    <div className={`relative group ${!isEven ? 'lg:order-2' : ''}`}>
                      <div className="absolute -inset-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                      <div className="relative rounded-3xl overflow-hidden border-4 border-blue-500/30 shadow-2xl">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="relative w-full h-auto aspect-video object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className={!isEven ? 'lg:order-1' : ''}>
                      <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full border border-blue-500/20">
                        <service.icon className="w-5 h-5 text-primary" />
                        <span className="text-primary font-semibold">Serviço Especializado</span>
                      </div>
                      
                      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent">
                        {service.title}
                      </h2>
                      
                      <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-2xl font-bold mb-4 text-foreground">Sobre o Serviço</h3>
                          <p className="text-muted-foreground leading-relaxed text-lg">{service.details}</p>
                        </div>
                        
                        <div>
                          <h3 className="text-2xl font-bold mb-4 text-foreground">Principais Benefícios</h3>
                          <ul className="space-y-3">
                            {service.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-start gap-3">
                                <CheckCircle className="text-primary shrink-0 mt-1" size={24} />
                                <span className="text-muted-foreground text-lg">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-br from-blue-500/5 via-background to-cyan-500/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full border border-blue-500/20">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Dúvidas Comuns</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tire suas dúvidas sobre nossos serviços especializados
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-6">
              <AccordionItem value="item-1" className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-card/80 backdrop-blur-xl rounded-2xl px-8 border-2 border-blue-500/20 group-hover:border-cyan-500/40 transition-all duration-500">
                  <AccordionTrigger className="text-left font-bold text-lg py-6 hover:text-primary transition-colors">
                    Qual a diferença entre importação por encomenda e conta e ordem?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                    Na importação por encomenda, atuamos como importador legal da mercadoria em nome de terceiros. Já na modalidade conta e ordem, você é o importador legal, mas utilizamos nosso registro para realizar a operação, otimizando tributos e processos.
                  </AccordionContent>
                </div>
              </AccordionItem>

              <AccordionItem value="item-2" className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-card/80 backdrop-blur-xl rounded-2xl px-8 border-2 border-blue-500/20 group-hover:border-blue-500/40 transition-all duration-500">
                  <AccordionTrigger className="text-left font-bold text-lg py-6 hover:text-primary transition-colors">
                    Como funciona a consultoria fiscal e tributária?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                    Analisamos toda a operação de comércio exterior identificando oportunidades de redução legal da carga tributária através de regimes especiais, acordos internacionais e classificações fiscais adequadas. Oferecemos planejamento tributário estratégico personalizado para cada cliente.
                  </AccordionContent>
                </div>
              </AccordionItem>

              <AccordionItem value="item-3" className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-sky-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-card/80 backdrop-blur-xl rounded-2xl px-8 border-2 border-blue-500/20 group-hover:border-sky-500/40 transition-all duration-500">
                  <AccordionTrigger className="text-left font-bold text-lg py-6 hover:text-primary transition-colors">
                    Vocês atuam em quais países?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                    Temos uma rede global de parceiros comerciais e atuamos em todos os continentes. Nossos principais mercados incluem Ásia (China, Índia, Coreia do Sul), Europa (Alemanha, Itália, Espanha), América do Norte (Estados Unidos, Canadá) e América Latina.
                  </AccordionContent>
                </div>
              </AccordionItem>

              <AccordionItem value="item-4" className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-sky-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-card/80 backdrop-blur-xl rounded-2xl px-8 border-2 border-blue-500/20 group-hover:border-cyan-500/40 transition-all duration-500">
                  <AccordionTrigger className="text-left font-bold text-lg py-6 hover:text-primary transition-colors">
                    Quanto tempo leva uma operação de importação?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                    O prazo varia conforme o modal de transporte e origem da mercadoria. Transporte marítimo geralmente leva de 30 a 45 dias, enquanto aéreo pode levar de 7 a 15 dias. Trabalhamos para otimizar estes prazos através de planejamento logístico eficiente.
                  </AccordionContent>
                </div>
              </AccordionItem>

              <AccordionItem value="item-5" className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-card/80 backdrop-blur-xl rounded-2xl px-8 border-2 border-blue-500/20 group-hover:border-blue-500/40 transition-all duration-500">
                  <AccordionTrigger className="text-left font-bold text-lg py-6 hover:text-primary transition-colors">
                    Como é calculado o custo de uma importação?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                    O custo total inclui o valor da mercadoria (FOB), frete internacional, seguro, impostos (II, IPI, PIS, COFINS, ICMS), despesas aduaneiras e nossa taxa de serviço. Realizamos análise de viabilidade detalhada antes de cada operação para você ter total previsibilidade de custos.
                  </AccordionContent>
                </div>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <ContactForm 
        showServiceSelect={true}
        title="Solicite um Orçamento"
        subtitle="Soluções personalizadas para seu negócio!"
      />

      <Footer />
    </div>
  );
};

export default Servicos;
