import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  const features = [
    "Mais de 15 anos de experiência no mercado",
    "Equipe especializada em comércio exterior",
    "Parcerias estratégicas globais",
    "Processos otimizados e tecnologia de ponta",
    "Suporte personalizado em todas as etapas",
  ];

  return (
    <section id="about" className="py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Consultoria e Assessoria Completa
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              A <span className="font-semibold text-foreground">Wisdom Trading</span> é a parceira estratégica 
              na importação e exportação de produtos essenciais, conectando sua empresa às melhores 
              oportunidades do mercado global.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Eliminamos barreiras, reduzimos custos e garantimos processos ágeis e seguros. 
              Nossa expertise transforma desafios em soluções, impulsionando o crescimento 
              sustentável do seu negócio.
            </p>

            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle2 className="text-primary flex-shrink-0" size={24} />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-gradient-primary text-lg px-8 py-6">
              Saiba Mais Sobre a Wisdom
            </Button>
          </div>

          <div className="relative animate-scale-in">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-primary shadow-lg-custom overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-white text-2xl font-semibold">
                Imagem da Empresa
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
