import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Zap, DollarSign, ShieldCheck, Globe } from "lucide-react";
import wisdomWatermark from "@/assets/wisdom-logo-watermark.jpg";

const Benefits = () => {
  const benefits = [
    {
      icon: Users,
      title: "Atendimento Personalizado",
      description: "Atendimento próximo e personalizado, com foco real no negócio e nas necessidades do cliente.",
      color: "from-primary to-primary-light",
    },
    {
      icon: Zap,
      title: "Estrutura Ágil",
      description: "Estrutura ágil e altamente técnica, pronta para responder rápido e com assertividade.",
      color: "from-primary-light to-primary",
    },
    {
      icon: DollarSign,
      title: "Expertise Fiscal",
      description: "Expertise fiscal, com resultados comprovados e redução de ICMS de até 70% por meio de benefícios tributários.",
      color: "from-primary to-primary-dark",
    },
    {
      icon: ShieldCheck,
      title: "Tecnologia Avançada",
      description: "Utilização de sistemas avançados, tecnologia e IA para garantir controle, rastreabilidade e total conformidade.",
      color: "from-primary-dark to-primary",
    },
    {
      icon: Globe,
      title: "Representação Internacional",
      description: "Atuação como representante comercial internacional / comprador, gerando confiança e segurança para fornecedores estrangeiros.",
      color: "from-primary-light to-primary-dark",
    },
  ];

  return (
    <section id="benefits" className="py-24 bg-background relative overflow-hidden">
      {/* Logo Watermark Background */}
      <div 
        className="absolute left-0 top-0 opacity-100 bg-left-top bg-no-repeat w-full h-full"
        style={{
          backgroundImage: `url(${wisdomWatermark})`,
          backgroundSize: '80%',
          backgroundPosition: 'left top'
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-sky-400 via-blue-500 to-blue-700 bg-clip-text text-transparent">
            Vantagens de Trabalhar Conosco
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Benefícios exclusivos que fazem a diferença no seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="hover:shadow-lg-custom transition-all duration-300 hover:-translate-y-2 border-none shadow-card overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${benefit.color}`} />
              <CardHeader>
                <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="text-primary" size={32} />
                </div>
                <CardTitle className="text-2xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
