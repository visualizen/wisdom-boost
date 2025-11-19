import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Factory, Wrench, Zap, Leaf, Package, Building2 } from "lucide-react";

const Segments = () => {
  const segments = [
    {
      icon: Factory,
      title: "Industrial",
      description: "Equipamentos e insumos para a indústria de transformação e manufatura.",
    },
    {
      icon: Wrench,
      title: "Máquinas e Equipamentos",
      description: "Importação de maquinário especializado para diversos setores produtivos.",
    },
    {
      icon: Zap,
      title: "Tecnologia",
      description: "Produtos eletrônicos e tecnológicos de última geração.",
    },
    {
      icon: Leaf,
      title: "Agronegócio",
      description: "Insumos e equipamentos para o setor agrícola e pecuário.",
    },
    {
      icon: Package,
      title: "Bens de Consumo",
      description: "Produtos acabados para revenda no mercado brasileiro.",
    },
    {
      icon: Building2,
      title: "Construção Civil",
      description: "Materiais e equipamentos para construção e infraestrutura.",
    },
  ];

  return (
    <section id="segments" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-title bg-clip-text text-transparent">
            Nossos Segmentos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Atuamos em diversos setores da economia, oferecendo soluções personalizadas para cada segmento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {segments.map((segment, index) => (
            <Card 
              key={index}
              className="hover:shadow-lg-custom transition-all duration-300 hover:-translate-y-2 border-border/50 shadow-card overflow-hidden animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(59,130,246,0.4)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all duration-500 group-hover:scale-110">
                  <segment.icon className="text-white" size={32} />
                </div>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
                  {segment.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {segment.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Segments;
