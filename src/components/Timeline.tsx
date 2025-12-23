import { User, ShoppingBag, DollarSign, Plane, Package, Truck, Users, FileText, TrendingUp, FileCheck, Home } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Timeline = () => {
  const { t } = useLanguage();

  // Logical order assuming specific flow:
  // 1. Cliente (Start)
  // 2. Pedido de Compra
  // 3. Fornecedores
  // 4. Planejamento Tributário
  // 5. Trade Finance
  // 6. Gestão Operacional
  // 7. Transporte Internacional
  // 8. Desembaraço Aduaneiro
  // 9. Armazenagem Estratégica
  // 10. Transporte Rodoviário
  // 11. Entrega ao Cliente (End)

  const steps = [
    { icon: User, label: t('timeline.steps.client.label'), description: t('timeline.steps.client.desc') },
    { icon: ShoppingBag, label: t('timeline.steps.purchase.label'), description: t('timeline.steps.purchase.desc') },
    { icon: Users, label: t('timeline.steps.suppliers.label'), description: t('timeline.steps.suppliers.desc') },
    { icon: FileText, label: t('timeline.steps.tax.label'), description: t('timeline.steps.tax.desc') },
    { icon: DollarSign, label: t('timeline.steps.finance.label'), description: t('timeline.steps.finance.desc') },
    { icon: TrendingUp, label: t('timeline.steps.operational.label'), description: t('timeline.steps.operational.desc') },
    { icon: Plane, label: t('timeline.steps.transport.label'), description: t('timeline.steps.transport.desc') },
    { icon: FileCheck, label: t('timeline.steps.customs.label'), description: t('timeline.steps.customs.desc') },
    { icon: Package, label: t('timeline.steps.storage.label'), description: t('timeline.steps.storage.desc') },
    { icon: Truck, label: t('timeline.steps.road.label'), description: t('timeline.steps.road.desc') },
    { icon: Home, label: t('timeline.steps.delivery.label'), description: t('timeline.steps.delivery.desc') },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.15),transparent_70%)]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-cyan-400 font-medium text-sm">{t('timeline.badge')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {t('timeline.title')}
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            {t('timeline.subtitle')}
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent transform md:-translate-x-1/2"></div>

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={index} className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} group`}>

                  {/* Icon Marker */}
                  <div className="absolute left-[20px] md:left-1/2 w-10 h-10 md:w-14 md:h-14 bg-slate-900 border-2 border-cyan-500 rounded-full flex items-center justify-center transform -translate-x-1/2 z-20 group-hover:scale-110 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300">
                    <Icon size={20} className="hidden md:block text-cyan-400" />
                    <Icon size={16} className="md:hidden text-cyan-400" />
                  </div>

                  {/* Content Card */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 group-hover:-translate-y-1 shadow-lg">
                      <div className="flex items-center gap-3 mb-2 md:hidden">
                        {/* Mobile Title Icon if need be, but central icon is fine */}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{step.label}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Empty space for the other side */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;