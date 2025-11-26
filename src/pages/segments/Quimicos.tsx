import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Beaker, Shield, Users, FileCheck } from "lucide-react";
import quimicosImg from "@/assets/segments/quimicos.jpg";

const Quimicos = () => {
  const [activeCase, setActiveCase] = useState(0);

  const cases = [
    {
      title: "Importação de Catalisadores Especiais - SP",
      client: "Petroquímica Brasileira S.A.",
      challenge: "Necessidade de catalisadores de alta seletividade para processo de polimerização",
      solution: "Importação de catalisadores Ziegler-Natta de última geração da Bélgica",
      results: [
        "38% de aumento na seletividade do processo",
        "Redução de 45% em subprodutos indesejados",
        "Aumento de 22% no rendimento final",
        "Certificação para produção de polímeros grau alimentício"
      ],
      timeline: [
        { phase: "Análise Técnica", duration: "3 semanas", description: "Avaliação de compatibilidade e especificações técnicas detalhadas" },
        { phase: "Certificações e Documentação", duration: "6 semanas", description: "Obtenção de certificados ANVISA, IBAMA e documentação de segurança" },
        { phase: "Logística Especializada", duration: "4 semanas", description: "Transporte refrigerado e desembaraço de produtos químicos controlados" },
        { phase: "Testes e Validação", duration: "8 semanas", description: "Testes piloto e validação em escala industrial" }
      ]
    },
    {
      title: "Modernização de Planta Química - BA",
      client: "Indústria Química do Nordeste Ltda.",
      challenge: "Planta com tecnologia defasada e altos custos operacionais",
      solution: "Importação de reatores de fluxo contínuo da Alemanha e sistema de controle automatizado",
      results: [
        "55% de redução no tempo de batelada",
        "Economia de 32% em consumo de solventes",
        "Melhoria de 40% na pureza dos produtos",
        "Capacidade produtiva duplicada"
      ],
      timeline: [
        { phase: "Engenharia Conceitual", duration: "2 meses", description: "Definição de escopo e seleção de tecnologia" },
        { phase: "Aprovações Regulatórias", duration: "3 meses", description: "Licenciamento ambiental e aprovações de segurança" },
        { phase: "Importação de Equipamentos", duration: "4 meses", description: "Fabricação, transporte e nacionalização" },
        { phase: "Instalação e Comissionamento", duration: "5 meses", description: "Montagem, integração e start-up assistido" }
      ]
    }
  ];

  const products = [
    {
      icon: Beaker,
      title: "Insumos Químicos",
      items: [
        "Reagentes de alta pureza (PA, ACS)",
        "Catalisadores industriais",
        "Solventes especiais",
        "Intermediários de síntese",
        "Produtos químicos finos"
      ]
    },
    {
      icon: Shield,
      title: "Equipamentos e Segurança",
      items: [
        "Reatores de processo",
        "Sistemas de controle e automação",
        "Equipamentos de proteção individual",
        "Sistemas de contenção e segurança"
      ]
    }
  ];

  const differentials = [
    {
      icon: FileCheck,
      title: "Conformidade Total",
      description: "Expertise em toda documentação regulatória brasileira (ANVISA, IBAMA, Exército, Polícia Federal) para importação de produtos químicos controlados."
    },
    {
      icon: Users,
      title: "Rede Internacional",
      description: "Parcerias diretas com fabricantes na Alemanha, Suíça, Estados Unidos e Japão, garantindo autenticidade e rastreabilidade completa."
    },
    {
      icon: Shield,
      title: "Logística Especializada",
      description: "Estrutura própria para transporte de produtos perigosos, com armazenamento temporário certificado e seguro específico."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={quimicosImg}
            alt="Indústria Química"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Químicos Industriais
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Insumos químicos de alta qualidade e equipamentos para processos industriais complexos
          </p>
        </div>
      </section>

      {/* Descrição Detalhada */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent">
              Nossa Atuação no Setor Químico
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                A Wisdom é especialista na importação de insumos químicos e equipamentos para a indústria química brasileira. 
                Nossa atuação abrange desde produtos químicos commodities até especialidades químicas de alta pureza, atendendo 
                setores como petroquímico, farmacêutico, cosmético, alimentício, tratamento de água e manufatura em geral.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Trabalhamos com fornecedores certificados internacionalmente, garantindo produtos com especificações técnicas 
                rigorosas e documentação completa (FDS, CoA, certificados de análise). Nossa expertise inclui o complexo processo 
                de importação de produtos controlados, perigosos e de uso restrito, navegando por todas as exigências regulatórias 
                brasileiras (ANVISA, IBAMA, Exército, Polícia Federal, entre outros).
              </p>
              <p className="text-lg leading-relaxed">
                Além de insumos, oferecemos equipamentos para processos químicos: reatores, destiladores, evaporadores, sistemas 
                de filtração, equipamentos de análise laboratorial e instrumentação de processo. Prestamos consultoria técnica para 
                seleção adequada de produtos e equipamentos, otimização de processos e compliance regulatório.
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
            Produtos e Serviços para Indústria Química
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
            Por Que Escolher a Wisdom para Químicos
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
            Precisa de Insumos Químicos de Qualidade?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Conte com nossa expertise em importação e logística especializada para produtos químicos.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ContactForm showServiceSelect={true} defaultService="Químicos - Insumos e Equipamentos" />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Quimicos;