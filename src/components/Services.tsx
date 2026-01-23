
import { Package, Shield, TrendingUp, Users, FileText, ClipboardCheck, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Package,
      title: t('services.items.import.title'),
      description: t('services.items.import.desc'),
    },
    {
      icon: Users,
      title: t('services.items.representation.title'),
      description: t('services.items.representation.desc'),
    },
    {
      icon: FileText,
      title: t('services.items.consulting.title'),
      description: t('services.items.consulting.desc'),
    },
    {
      icon: Shield,
      title: t('services.items.logistics.title'),
      description: t('services.items.logistics.desc'),
    },
    {
      icon: TrendingUp,
      title: t('services.items.ncm.title'),
      description: t('services.items.ncm.desc'),
    },
    {
      icon: ClipboardCheck,
      title: t('services.items.viability.title'),
      description: t('services.items.viability.desc'),
    },
  ];

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 pb-2 bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2 border border-slate-100 flex flex-col"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <service.icon className="text-blue-600 group-hover:text-white transition-colors duration-300" size={32} />
              </div>

              <h3 className="text-xl font-bold text-[#1a365d] mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>

              <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                {t('services.learnMore')} <ArrowRight size={16} className="ml-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
