import { ArrowRight, Globe } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4";
import AnimatedHeroButton from "./AnimatedHeroButton";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return <section id="home" className="relative min-h-screen flex items-center pt-32 md:pt-40">
    <div className="absolute inset-0 z-0 overflow-hidden">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover brightness-50 grayscale-[25%]">
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-sky-500/40" />
    </div>

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto text-center text-white animate-fade-in-up">


        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
          {t('hero.title')}{" "}
          <span className="text-white">{t('hero.titleHighlight')}</span>
        </h1>

        <p className="text-xl sm:text-2xl mb-8 text-white max-w-3xl mx-auto drop-shadow-md">
          {t('hero.description')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <AnimatedHeroButton />
        </div>
      </div>
    </div>


  </section>;
};
export default Hero;