import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Zap, DollarSign, ShieldCheck, Globe } from "lucide-react";
import wisdomWatermark from "@/assets/wisdom-logo-watermark.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Benefits = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Users,
      title: t('benefits.items.personalized.title'),
      description: t('benefits.items.personalized.desc'),
      color: "from-primary to-primary-light",
    },
    {
      icon: Zap,
      title: t('benefits.items.agile.title'),
      description: t('benefits.items.agile.desc'),
      color: "from-primary-light to-primary",
    },
    {
      icon: DollarSign,
      title: t('benefits.items.fiscal.title'),
      description: t('benefits.items.fiscal.desc'),
      color: "from-primary to-primary-dark",
    },
    {
      icon: ShieldCheck,
      title: t('benefits.items.technology.title'),
      description: t('benefits.items.technology.desc'),
      color: "from-primary-dark to-primary",
    },
    {
      icon: Globe,
      title: t('benefits.items.international.title'),
      description: t('benefits.items.international.desc'),
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 pb-2 bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent">
            {t('benefits.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('benefits.subtitle')}
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
