import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Shield, TrendingUp, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Importação com Segurança",
      description: "Processos seguros e conformes com todas as regulamentações aduaneiras, garantindo tranquilidade em cada operação.",
    },
    {
      icon: Package,
      title: "Assessoria Completa",
      description: "Suporte integral em importação e exportação, desde a seleção de fornecedores até a entrega final.",
    },
    {
      icon: TrendingUp,
      title: "Estratégia para Exportação",
      description: "Desenvolvemos estratégias personalizadas para expandir seus produtos no mercado internacional.",
    },
    {
      icon: Users,
      title: "Seleção de Fornecedores",
      description: "Identificamos e qualificamos os melhores fornecedores internacionais para o seu negócio.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções completas e personalizadas para o seu negócio no comércio exterior
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg-custom transition-all duration-300 hover:-translate-y-2 animate-fade-in-up border-none shadow-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="text-white" size={28} />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
