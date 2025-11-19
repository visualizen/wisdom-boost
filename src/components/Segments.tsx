import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import fundicaoImg from "@/assets/segments/fundicao.jpg";
import ferroAcoImg from "@/assets/segments/ferro-aco.png";
import quimicosImg from "@/assets/segments/quimicos.jpg";
import alimenticiaImg from "@/assets/segments/alimenticia.jpg";

const Segments = () => {
  const segments = [
    {
      title: "Fundição",
      description: "Equipamentos e insumos especializados para o setor de fundição industrial.",
      image: fundicaoImg,
    },
    {
      title: "Ferro e Aço",
      description: "Produtos siderúrgicos e materiais para a indústria de ferro e aço.",
      image: ferroAcoImg,
    },
    {
      title: "Químicos",
      description: "Insumos químicos e reagentes para diversos processos industriais.",
      image: quimicosImg,
    },
    {
      title: "Indústria Alimentícia",
      description: "Equipamentos e insumos para a indústria de alimentos e bebidas.",
      image: alimenticiaImg,
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {segments.map((segment, index) => (
            <Card 
              key={index}
              className="hover:shadow-lg-custom transition-all duration-300 hover:-translate-y-2 border-border/50 shadow-card overflow-hidden animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={segment.image} 
                  alt={segment.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <CardHeader>
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
