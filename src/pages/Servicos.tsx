import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Package, Users, FileText, Shield, TrendingUp, ClipboardCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// Import images
import importacaoImg from "@/assets/services/importacao.jpg";
import representacaoImg from "@/assets/services/representacao.jpg";
import consultoriaImg from "@/assets/services/consultoria.jpg";
import logisticaImg from "@/assets/services/logistica.jpg";
import estudosImg from "@/assets/services/estudos.jpg";
import viabilidadeImg from "@/assets/services/viabilidade.jpg";
import wisdomLogo from "@/assets/wisdom-logo.png";

const Servicos = () => {
  const services = [
    {
      icon: Package,
      title: "Importação por Encomenda e por Conta e Ordem",
      subtitle: "com expertise, economia e eficiência nos seus resultados",
      description: "Oferecemos serviços especializados em modalidades de importação que permitem maior flexibilidade e economia para sua empresa.",
      image: importacaoImg,
    },
    {
      icon: Users,
      title: "Representação Comercial Internacional",
      subtitle: "com conexões globais e parcerias estratégicas",
      description: "Nossa rede global de contatos permite que sua empresa tenha presença comercial em diversos países.",
      image: representacaoImg,
    },
    {
      icon: FileText,
      title: "Consultoria Fiscal e Tributária",
      subtitle: "com otimização legal e máxima conformidade",
      description: "Especialistas em tributação internacional para otimizar a carga tributária das suas operações.",
      image: consultoriaImg,
    },
    {
      icon: Shield,
      title: "Gestão Logística Internacional",
      subtitle: "com segurança, rastreamento e proteção total da carga",
      description: "Soluções logísticas end-to-end coordenando toda a cadeia de transporte internacional.",
      image: logisticaImg,
    },
    {
      icon: TrendingUp,
      title: "Estudos de NCM e Acordos Tarifários",
      subtitle: "com análise técnica e redução de custos tarifários",
      description: "Estudos técnicos para classificação correta e aproveitamento de benefícios fiscais.",
      image: estudosImg,
    },
    {
      icon: ClipboardCheck,
      title: "Análise de Viabilidade",
      subtitle: "com dados precisos e projeções de rentabilidade",
      description: "Estudos completos incluindo análise tributária, custos e riscos para decisões seguras.",
      image: viabilidadeImg,
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Conectamos seu negócio com
            </h1>
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                estratégia, segurança e foco
                <br />
                nos seus resultados
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Soluções completas em comércio exterior com excelência e tecnologia
            </p>
          </div>
        </div>
      </section>

      {/* Services Section - Diagonal Split Layout */}
      {services.map((service, index) => {
        const isEven = index % 2 === 0;
        
        return (
          <section key={index} className="relative min-h-screen flex items-center overflow-hidden">
            {/* Diagonal Background */}
            <div className="absolute inset-0">
              {isEven ? (
                <>
                  {/* Image on left */}
                  <div 
                    className="absolute inset-0 w-1/2"
                    style={{
                      clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)',
                    }}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/20" />
                  </div>
                  {/* White area on right */}
                  <div 
                    className="absolute inset-0 left-1/2 bg-background"
                    style={{
                      clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)',
                    }}
                  />
                </>
              ) : (
                <>
                  {/* White area on left */}
                  <div 
                    className="absolute inset-0 w-1/2 bg-background"
                    style={{
                      clipPath: 'polygon(0 0, 85% 0, 100% 100%, 0 100%)',
                    }}
                  />
                  {/* Image on right */}
                  <div 
                    className="absolute inset-0 left-1/2"
                    style={{
                      clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)',
                    }}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background/20" />
                  </div>
                </>
              )}
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                {/* Empty space for image */}
                <div className="hidden lg:block" />
                
                {/* Text Content */}
                <div className={`${isEven ? 'lg:pl-12' : 'lg:pr-12'} max-w-xl`}>
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                      <service.icon className="text-white" size={32} />
                    </div>
                    <h3 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                      <span className="text-foreground">{service.title.split(' ').slice(0, -3).join(' ')}</span>
                      <br />
                      <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                        {service.title.split(' ').slice(-3).join(' ')}
                      </span>
                    </h3>
                    <p className="text-xl md:text-2xl mb-6">
                      <span className="text-muted-foreground/70">com</span>{' '}
                      <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent font-semibold">
                        {service.subtitle.replace('com ', '')}
                      </span>
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                      {service.description}
                    </p>
                    <Button size="lg" className="bg-gradient-to-r from-sky-400 to-blue-600 text-white hover:shadow-xl transition-all">
                      Saiba Mais
                      <ArrowRight className="ml-2" size={20} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Number */}
            <div className="absolute top-8 right-8 text-8xl font-bold text-primary/5">
              0{index + 1}
            </div>
          </section>
        );
      })}

      {/* Logo Section */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <img 
              src={wisdomLogo} 
              alt="Wisdom Trading" 
              className="h-20 mx-auto mb-8 opacity-90"
            />
            <p className="text-2xl font-semibold text-muted-foreground">
              wisdomtrading.com.br
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { value: "15+", label: "Anos de Experiência" },
              { value: "500+", label: "Clientes Atendidos" },
              { value: "30+", label: "Países de Atuação" },
              { value: "98%", label: "Satisfação" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">Perguntas</span>{' '}
              <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">Frequentes</span>
            </h2>
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
                  answer: "Analisamos toda a operação de comércio exterior identificando oportunidades de redução legal da carga tributária através de regimes especiais, acordos internacionais e classificações fiscais adequadas."
                },
                {
                  question: "Vocês atuam em quais países?",
                  answer: "Temos uma rede global de parceiros comerciais e atuamos em todos os continentes. Nossos principais mercados incluem Ásia, Europa, América do Norte e América Latina."
                },
                {
                  question: "Quanto tempo leva uma operação de importação?",
                  answer: "O prazo varia conforme o modal de transporte e origem. Transporte marítimo: 30-45 dias. Transporte aéreo: 7-15 dias."
                },
                {
                  question: "Como é calculado o custo de uma importação?",
                  answer: "O custo inclui valor da mercadoria (FOB), frete internacional, seguro, impostos (II, IPI, PIS, COFINS, ICMS), despesas aduaneiras e nossa taxa de serviço."
                }
              ].map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="bg-secondary/30 rounded-lg px-6 border-0"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors">
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
      <section className="py-24 bg-gradient-to-br from-sky-400 via-blue-500 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pronto para transformar seu comércio exterior?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Entre em contato com nossos especialistas
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-10">
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
