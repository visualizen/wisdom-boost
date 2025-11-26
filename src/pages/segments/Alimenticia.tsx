import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Package, Thermometer, Award, ShieldCheck } from "lucide-react";
import alimenticiaImg from "@/assets/segments/alimenticia.jpg";

const Alimenticia = () => {
  const [activeCase, setActiveCase] = useState(0);

  const cases = [
    {
      title: "Modernização de Linha de Envase - SP",
      client: "Bebidas Premium S.A.",
      challenge: "Linha de envase com capacidade limitada e alto índice de perdas",
      solution: "Importação de envasadora rotativa da Itália com sistema de esterilização a frio",
      results: [
        "Capacidade aumentada de 8.000 para 18.000 garrafas/hora",
        "Redução de 85% em perdas por contaminação",
        "Extensão de 40% no shelf-life dos produtos",
        "Certificação FSSC 22000 alcançada"
      ],
      timeline: [
        { phase: "Diagnóstico e Especificação", duration: "6 semanas", description: "Análise detalhada de requisitos e especificações técnicas" },
        { phase: "Seleção e Negociação", duration: "8 semanas", description: "Visita técnica à Itália e negociação com fabricante" },
        { phase: "Adequação de Infraestrutura", duration: "10 semanas", description: "Preparação de utilities e sala limpa classe D" },
        { phase: "Importação e Instalação", duration: "12 semanas", description: "Transporte, instalação e qualificação de operação (OQ)" },
        { phase: "Validação e Certificação", duration: "8 semanas", description: "Validação de performance (PQ) e auditoria FSSC" }
      ]
    },
    {
      title: "Sistema de Refrigeração Industrial - SC",
      client: "Frigorífico do Sul Ltda.",
      challenge: "Sistema de refrigeração antigo com alto consumo energético e falhas frequentes",
      solution: "Implementação de sistema de refrigeração com tecnologia NH3 (amônia) da Dinamarca",
      results: [
        "Redução de 42% no consumo de energia elétrica",
        "Aumento de 50% na capacidade de estocagem refrigerada",
        "Zero paradas não programadas em 18 meses",
        "Conformidade com ISO 22000"
      ],
      timeline: [
        { phase: "Auditoria Energética", duration: "4 semanas", description: "Análise de consumo e oportunidades de eficiência" },
        { phase: "Projeto Executivo", duration: "8 semanas", description: "Engenharia detalhada e memorial de cálculo" },
        { phase: "Aprovações e Licenças", duration: "12 semanas", description: "Licenciamento ambiental e aprovação do corpo de bombeiros" },
        { phase: "Importação de Equipamentos", duration: "14 semanas", description: "Fabricação na Dinamarca e transporte marítimo" },
        { phase: "Instalação e Start-up", duration: "16 semanas", description: "Montagem, testes e comissionamento completo" }
      ]
    }
  ];

  const products = [
    {
      icon: Package,
      title: "Equipamentos de Processo",
      items: [
        "Linhas de envase e embalagem",
        "Equipamentos de pasteurização/esterilização",
        "Sistemas de mistura e homogeneização",
        "Extrusoras e equipamentos de texturização",
        "Secadores e desidratadores industriais"
      ]
    },
    {
      icon: Thermometer,
      title: "Refrigeração e Conservação",
      items: [
        "Sistemas de refrigeração industrial",
        "Câmaras frigoríficas e túneis de congelamento",
        "Chillers e trocadores de calor",
        "Sistemas de atmosfera controlada"
      ]
    }
  ];

  const differentials = [
    {
      icon: Award,
      title: "Certificações Sanitárias",
      description: "Experiência comprovada em importação de equipamentos com certificação FDA, NSF e conformidade com normas brasileiras (ANVISA, MAPA)."
    },
    {
      icon: ShieldCheck,
      title: "Segurança Alimentar",
      description: "Todos os equipamentos fornecidos atendem aos mais rigorosos padrões de food safety (HACCP, GMP, FSSC 22000), com rastreabilidade completa."
    },
    {
      icon: CheckCircle2,
      title: "Suporte Técnico Especializado",
      description: "Equipe técnica com experiência em validação de processos, incluindo IQ, OQ e PQ, garantindo conformidade regulatória completa."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={alimenticiaImg}
            alt="Indústria Alimentícia"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Indústria Alimentícia
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Equipamentos e tecnologias para processamento, conservação e envase de alimentos
          </p>
        </div>
      </section>

      {/* Descrição Detalhada */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent">
              Nossa Atuação na Indústria Alimentícia
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                A Wisdom atua há mais de uma década no fornecimento de equipamentos e soluções tecnológicas para a indústria 
                alimentícia brasileira. Nossa expertise abrange todos os segmentos: bebidas, laticínios, carnes, panificação, 
                confeitaria, alimentos processados, frutas e vegetais, entre outros.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Oferecemos equipamentos de processamento de última geração: linhas de envase asséptico, pasteurizadores, 
                esterilizadores, sistemas de refrigeração industrial, equipamentos de mistura e homogeneização, extrusoras, 
                secadores, sistemas de embalagem e muito mais. Trabalhamos com fabricantes europeus (Itália, Alemanha, Holanda, 
                Dinamarca) reconhecidos mundialmente pela qualidade e inovação tecnológica.
              </p>
              <p className="text-lg leading-relaxed">
                Nosso diferencial está no profundo conhecimento das exigências regulatórias do setor alimentício. Todos os 
                equipamentos fornecidos atendem às normas ANVISA, MAPA e são compatíveis com sistemas de gestão de segurança 
                alimentar (HACCP, ISO 22000, FSSC 22000). Prestamos consultoria completa, desde a seleção do equipamento até 
                a validação de processos (IQ, OQ, PQ) e obtenção de certificações.
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
            Produtos e Serviços para Indústria Alimentícia
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
            Por Que Escolher a Wisdom para Alimentos
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
            Pronto para Modernizar sua Linha de Produção?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Fale com nossos especialistas e descubra as melhores soluções para sua indústria alimentícia.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ContactForm showServiceSelect={true} defaultService="Indústria Alimentícia - Equipamentos e Soluções" />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Alimenticia;