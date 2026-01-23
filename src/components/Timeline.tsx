import {
  User, ShoppingBag, DollarSign, Plane, Package, Truck, Users, FileText,
  TrendingUp, FileCheck, Home, ChevronLeft, ChevronRight
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import cargoShipBg from "@/assets/cargo-ship-bg.png";
import { useRef, useEffect, useState } from "react";

const Timeline = () => {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const isPausedRef = useRef(isPaused);

  // Keep ref in sync with state
  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  // Auto-scroll animation - runs once on mount
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    const speed = 0.7;

    const animate = () => {
      // Use ref to get current pause state (avoids stale closure)
      if (!isPausedRef.current && scrollContainer) {
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        if (scrollContainer.scrollLeft < maxScroll - 1) {
          scrollContainer.scrollLeft += speed;
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    // Start animation immediately
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []); // Empty dependency - runs once

  // Manual scroll handler
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

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
    <section className="py-24 relative overflow-hidden group/section">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${cargoShipBg})` }}
      >
        <div className="absolute inset-0 bg-blue-900/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-blue-900/70 to-slate-900/90"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-cyan-400 font-medium text-sm">{t('timeline.badge')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white text-shadow-lg">
            {t('timeline.title')}
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto drop-shadow-md">
            {t('timeline.subtitle')}
          </p>
        </div>

        {/* Timeline Container with External Arrows */}
        <div className="flex items-center justify-center gap-4 md:gap-8">
          {/* Left Utility Button */}
          <button
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onClick={() => scroll('left')}
            className="hidden md:flex flex-shrink-0 z-20 bg-slate-900/80 p-4 rounded-full border border-cyan-500/50 hover:bg-cyan-600 hover:text-white hover:border-white text-cyan-400 transition-all duration-300 transform hover:scale-110 shadow-lg backdrop-blur-sm cursor-pointer"
            aria-label="Scroll Left"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Scrollable Content Area */}
          <div
            ref={scrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            className="relative w-full overflow-x-auto pb-12 glass-scrollbar cursor-grab active:cursor-grabbing flex-1"
          >
            {/* Connecting Line (Visual) - spans all 11 items */}
            <div className="absolute top-[60px] left-0 h-1 bg-gradient-to-r from-cyan-500/30 via-cyan-500/50 to-cyan-500/30 w-[3600px]"></div>

            <div className="flex gap-8 min-w-max px-4 pt-10">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="flex flex-col items-center w-72 group relative">
                    {/* Icon Marker */}
                    <div className="w-20 h-20 bg-slate-900/80 backdrop-blur-md border-2 border-cyan-500 rounded-full flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 group-hover:border-white group-hover:bg-cyan-600 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                      <Icon size={32} className="text-cyan-400 group-hover:text-white transition-colors" />

                      {/* Step Number Badge */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center border-2 border-slate-900 text-white font-bold text-sm">
                        {index + 1}
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/20 hover:border-cyan-500/50 transition-all duration-300 text-center w-full h-full flex flex-col hover:-translate-y-2 hover:shadow-xl">
                      <h3 className="text-xl font-bold text-white mb-3">{step.label}</h3>
                      <p className="text-blue-100 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Utility Button */}
          <button
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onClick={() => scroll('right')}
            className="hidden md:flex flex-shrink-0 z-20 bg-slate-900/80 p-4 rounded-full border border-cyan-500/50 hover:bg-cyan-600 hover:text-white hover:border-white text-cyan-400 transition-all duration-300 transform hover:scale-110 shadow-lg backdrop-blur-sm cursor-pointer"
            aria-label="Scroll Right"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Timeline;