import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Globe, Target, Users } from "lucide-react";

const QuemSomos = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Quem Somos
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in-up">
              Especialistas em comércio exterior com excelência e comprometimento
            </p>
          </div>
        </div>
      </section>

      {/* História */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Nossa História</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                A Wisdom Trading nasceu da experiência e paixão de profissionais com mais de 30 anos 
                de atuação no mercado de comércio exterior. Fundada com o propósito de facilitar e 
                otimizar operações internacionais, nos especializamos em conectar empresas brasileiras 
                ao mercado global.
              </p>
              <p className="text-lg leading-relaxed">
                Ao longo dos anos, construímos uma sólida reputação baseada em confiança, transparência 
                e resultados. Nossa trajetória é marcada por parcerias de sucesso e pela constante busca 
                por inovação e excelência em todos os serviços prestados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Missão, Visão e Valores
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Missão</h3>
              <p className="text-muted-foreground">
                Facilitar e otimizar operações de comércio exterior, oferecendo soluções personalizadas 
                e eficientes que conectam empresas brasileiras ao mercado global com segurança e agilidade.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Visão</h3>
              <p className="text-muted-foreground">
                Ser referência nacional em trading e comércio exterior, reconhecida pela excelência 
                operacional, inovação e pelo impacto positivo que geramos nos negócios dos nossos clientes.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Valores</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Integridade e transparência</li>
                <li>• Excelência operacional</li>
                <li>• Comprometimento com resultados</li>
                <li>• Inovação contínua</li>
                <li>• Respeito e ética</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Nossos Diferenciais
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Experiência Consolidada</h3>
                  <p className="text-muted-foreground">
                    Mais de 30 anos de expertise em comércio exterior e conhecimento profundo 
                    do mercado internacional.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Rede Global</h3>
                  <p className="text-muted-foreground">
                    Parcerias estratégicas em diversos países, facilitando operações em 
                    mercados-chave ao redor do mundo.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Certificações de Qualidade</h3>
                  <p className="text-muted-foreground">
                    Certificados internacionais que garantem os mais altos padrões de 
                    qualidade e conformidade.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Soluções Personalizadas</h3>
                  <p className="text-muted-foreground">
                    Atendimento customizado e estratégias específicas para cada cliente 
                    e segmento de atuação.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Expandir seu Negócio?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Entre em contato conosco e descubra como podemos ajudar sua empresa 
            a alcançar novos mercados.
          </p>
          <a href="/#contact">
            <button className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/90 transition-colors">
              Fale Conosco
            </button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuemSomos;
