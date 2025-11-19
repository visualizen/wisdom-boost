import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Clock, FileCheck } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Redução de Impostos",
      description: "Benefícios fiscais e estratégias para reduzir custos de importação através de regimes especiais e drawback.",
      color: "from-primary to-primary-light",
    },
    {
      icon: FileCheck,
      title: "Importação por Encomenda",
      description: "Modelo que permite importar produtos específicos sob demanda, reduzindo riscos e otimizando capital de giro.",
      color: "from-primary-light to-primary",
    },
    {
      icon: Clock,
      title: "Conta e Ordem de Terceiros",
      description: "Operações simplificadas com redução de complexidade operacional e vantagens tributárias significativas.",
      color: "from-primary to-primary-dark",
    },
  ];

  return (
    <section id="benefits" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Vantagens de Trabalhar Conosco
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Benefícios exclusivos que fazem a diferença no seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
