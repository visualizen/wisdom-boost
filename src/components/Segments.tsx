import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
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
      link: "/segmentos/fundicao",
    },
    {
      title: "Ferro e Aço",
      description: "Produtos siderúrgicos e materiais para a indústria de ferro e aço.",
      image: ferroAcoImg,
      link: "/segmentos/ferro-aco",
    },
    {
      title: "Químicos",
      description: "Insumos químicos e reagentes para diversos processos industriais.",
      image: quimicosImg,
      link: "/segmentos/quimicos",
    },
    {
      title: "Indústria Alimentícia",
      description: "Equipamentos e insumos para a indústria de alimentos e bebidas.",
      image: alimenticiaImg,
      link: "/segmentos/alimenticia",
    },
  ];

  return (
    <section id="segments" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent">
            Nossos Segmentos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Atuamos em diversos setores da economia, oferecendo soluções personalizadas para cada segmento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {segments.map((segment, index) => (
            <Link 
              key={index}
              to={segment.link}
              className="block"
            >
              <Card 
                className="group relative overflow-hidden transition-all duration-500 hover:-translate-y-3 animate-slide-up-bounce border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] cursor-pointer"
                style={{ 
                  animationDelay: `${index * 0.15}s`,
                  animationFillMode: 'both'
                }}
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                
                {/* Glow effect on hover */}
                <div className="absolute -inset-1 bg-gradient-primary opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={segment.image} 
                    alt={segment.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
                    {segment.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-muted-foreground text-base leading-relaxed mb-4">
                    {segment.description}
                  </p>
                  <span className="text-primary font-semibold group-hover:underline">
                    Saiba mais →
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Segments;
