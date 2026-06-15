
import { Package, Shield, TrendingUp, Users, FileText, ClipboardCheck, ArrowRight, Ship } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import importExportImage from "@/assets/services/import-export.jpg";
import internationalRepImage from "@/assets/services/international-representation.jpg";
import fiscalConsultingImage from "@/assets/services/fiscal-consulting.jpg";
import logisticsManagementImage from "@/assets/services/logistics-management.jpg";
import tariffStudiesImage from "@/assets/services/tariff-studies.jpg";
import viabilityAnalysisImage from "@/assets/services/viability-analysis.jpg";
import cargoShipImage from "@/assets/cargo-ship-bg.png";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      id: "importacao",
      icon: Package,
      title: t('services.items.import.title'),
      description: t('services.items.import.desc'),
      image: importExportImage,
    },
    {
      id: "representacao",
      icon: Users,
      title: t('services.items.representation.title'),
      description: t('services.items.representation.desc'),
      image: internationalRepImage,
    },
    {
      id: "exportacao",
      icon: Ship,
      title: t('services.items.export.title'),
      description: t('services.items.export.desc'),
      image: cargoShipImage,
    },
    {
      id: "consultoria",
      icon: FileText,
      title: t('services.items.consulting.title'),
      description: t('services.items.consulting.desc'),
      image: fiscalConsultingImage,
    },
    {
      id: "logistica",
      icon: Shield,
      title: t('services.items.logistics.title'),
      description: t('services.items.logistics.desc'),
      image: logisticsManagementImage,
    },
    {
      id: "ncm",
      icon: TrendingUp,
      title: t('services.items.ncm.title'),
      description: t('services.items.ncm.desc'),
      image: tariffStudiesImage,
    },
    {
      id: "viabilidade",
      icon: ClipboardCheck,
      title: t('services.items.viability.title'),
      description: t('services.items.viability.desc'),
      image: viabilityAnalysisImage,
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
            <Link
              key={index}
              to={`/servicos#${service.id}`}
              className="group relative overflow-hidden bg-white rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2 border border-slate-100 flex flex-col"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/15 to-transparent" />
                <div className="absolute bottom-4 left-6 w-14 h-14 bg-white/95 rounded-2xl flex items-center justify-center shadow-lg">
                  <service.icon className="text-blue-600" size={28} />
                </div>
              </div>

              <div className="flex flex-1 flex-col p-8">
                <h3 className="text-xl font-bold text-[#1a365d] mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  {t('services.learnMore')} <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
