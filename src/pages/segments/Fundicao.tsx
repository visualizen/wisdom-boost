import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Flame, Settings, TrendingUp, Users } from "lucide-react";
import fundicaoImg from "@/assets/segments/fundicao.jpg";

const Fundicao = () => {
  const [activeCase, setActiveCase] = useState(0);

  const cases = [
    {
      title: "Modernização de Linha de Fundição - SP",
      client: "Metalúrgica Brasileira S.A.",
      challenge: "Necessidade de atualizar equipamentos obsoletos e aumentar capacidade produtiva",
      solution: "Importação de fornos de última geração da Alemanha e sistema automatizado de moldagem",
      results: [
        "35% de aumento na capacidade produtiva",
        "28% de redução no consumo energético",
        "Redução de 40% em desperdício de material",
        "ROI alcançado em 18 meses"
      ],
      timeline: [
        { phase: "Análise e Planejamento", duration: "2 meses", description: "Estudo de viabilidade e seleção de fornecedores internacionais" },
        { phase: "Negociação e Importação", duration: "4 meses", description: "Negociação com fornecedores alemães e processo de importação" },
        { phase: "Instalação e Comissionamento", duration: "3 meses", description: "Instalação dos equipamentos e treinamento da equipe" },
        { phase: "Otimização e Resultados", duration: "3 meses", description: "Ajustes finos e validação dos resultados esperados" }
      ]
    },
    {
      title: "Expansão de Capacidade - MG",
      client: "Fundição Industrial Ltda.",
      challenge: "Demanda crescente por peças fundidas para setor automotivo",
      solution: "Implementação de células de fundição modular da Itália com tecnologia de resfriamento rápido",
      results: [
        "50 toneladas/mês de aumento produtivo",
        "Qualidade superior com 99.2% de conformidade",
        "Redução de 30% no tempo de ciclo",
        "Conquista de 3 novos contratos automotivos"
      ],
      timeline: [
        { phase: "Diagnóstico Técnico", duration: "1 mês", description: "Avaliação da infraestrutura e necessidades específicas" },
        { phase: "Sourcing Internacional", duration: "3 meses", description: "Identificação e seleção de tecnologia italiana ideal" },
        { phase: "Logística Especializada", duration: "2 meses", description: "Transporte marítimo e desembaraço aduaneiro complexo" },
        { phase: "Integração e Start-up", duration: "4 meses", description: "Integração com linha existente e ramp-up produtivo" }
      ]
    }
  ];

  const products = [
    {
      icon: Flame,
      title: "Fornos e Equipamentos de Fusão",
      items: [
        "Fornos de indução de média e alta frequência",
        "Fornos a arco elétrico",
        "Fornos rotativos para alumínio",
        "Cadinhos e refratários especiais"
      ]
    },
    {
      icon: Settings,
      title: "Sistemas de Moldagem",
      items: [
        "Máquinas de moldagem automática",
        "Equipamentos de macharia",
        "Sistemas de moldagem em coquilha",
        "Linhas de moldagem contínua"
      ]
    }
  ];

  const differentials = [
    {
      icon: Users,
      title: "Expertise Especializada",
      description: "Mais de 15 anos atuando exclusivamente no setor de fundição, conhecendo profundamente os desafios e necessidades do segmento."
    },
    {
      icon: TrendingUp,
      title: "Fornecedores Homologados",
      description: "Parcerias estratégicas com os principais fabricantes mundiais de equipamentos para fundição, garantindo tecnologia de ponta."
    },
    {
      icon: CheckCircle2,
      title: "Suporte Técnico Completo",
      description: "Acompanhamento desde o projeto até a operação, incluindo treinamento, comissionamento e assistência técnica continuada."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={fundicaoImg}
            alt="Fundição Industrial"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Fundição Industrial
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Soluções completas em equipamentos e tecnologia para fundições modernas e eficientes
          </p>
        </div>
      </section>

      {/* Descrição Detalhada */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 pb-2 text-center bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent">
              Nossa Atuação no Setor de Fundição
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                A Wisdom é especialista na importação e representação de equipamentos de última geração para o setor de fundição.
                Trabalhamos com fundições de ferro, aço, alumínio e ligas especiais, oferecendo soluções completas desde a fusão
                até o acabamento final das peças.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Nossa atuação abrange toda a cadeia de valor da fundição: fornos de indução, sistemas de moldagem automatizados,
                equipamentos de macharia, refratários especiais, sistemas de controle de qualidade e tecnologias de acabamento.
                Mantemos parcerias estratégicas com fabricantes líderes na Europa, Estados Unidos e Ásia.
              </p>
              <p className="text-lg leading-relaxed">
                Com profundo conhecimento técnico e experiência consolidada, auxiliamos fundições a modernizarem seus processos,
                aumentarem produtividade, reduzirem custos operacionais e atenderem aos mais rigorosos padrões de qualidade
                exigidos por setores como automotivo, aeroespacial, energia e construção civil.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cases de Sucesso - Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 pb-2 text-center bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent">
            Cases de Sucesso
          </h2>

          {/* Case Selector */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {cases.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveCase(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${activeCase === index
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
          <h2 className="text-4xl font-bold mb-12 pb-2 text-center bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent">
            Produtos e Serviços para Fundição
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
          <h2 className="text-4xl font-bold mb-12 pb-2 text-center bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent">
            Por Que Escolher a Wisdom para Fundição
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
            Pronto para Modernizar sua Fundição?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Entre em contato conosco e descubra como podemos ajudar sua empresa a alcançar novos patamares de eficiência e qualidade.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ContactForm showServiceSelect={true} defaultService="Fundição - Equipamentos e Tecnologia" />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Fundicao;