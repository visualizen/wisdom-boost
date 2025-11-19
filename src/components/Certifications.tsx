import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Shield, CheckCircle, Star } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      icon: Award,
      title: "ISO 9001",
      description: "Certificação internacional de gestão da qualidade, garantindo processos eficientes e padronizados.",
      color: "from-primary to-primary-light",
    },
    {
      icon: Shield,
      title: "OEA - Operador Econômico Autorizado",
      description: "Reconhecimento oficial de segurança e conformidade aduaneira pela Receita Federal.",
      color: "from-primary-light to-primary",
    },
    {
      icon: CheckCircle,
      title: "Certificação INMETRO",
      description: "Atendimento aos padrões de qualidade e segurança exigidos pelo Instituto Nacional de Metrologia.",
      color: "from-primary to-primary-dark",
    },
    {
      icon: Star,
      title: "Certificações Internacionais",
      description: "Reconhecimento por órgãos reguladores internacionais, facilitando operações globais.",
      color: "from-primary-dark to-primary-light",
    },
  ];

  return (
    <section id="certifications" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-title bg-clip-text text-transparent">
            Conheça nossas Certificações
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Compromisso com excelência e conformidade reconhecidos nacionalmente e internacionalmente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className="hover:shadow-lg-custom transition-all duration-300 hover:-translate-y-2 border-none shadow-card overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${cert.color}`} />
              <CardHeader>
                <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mb-4">
                  <cert.icon className="text-primary" size={32} />
                </div>
                <CardTitle className="text-xl">{cert.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {cert.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
