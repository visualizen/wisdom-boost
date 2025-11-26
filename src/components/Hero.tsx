import { Button } from "@/components/ui/button";
import { ArrowRight, Globe } from "lucide-react";
import heroVideo from "@/assets/hero-video-final.mp4";
const Hero = () => {
  return <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary/20" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white animate-fade-in-up">
          
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Soluções Completas no{" "}
            <span className="drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] text-gray-100">Comércio Exterior</span>
          </h1>
          
          <p className="text-xl sm:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Importação e exportação ágil, segura e econômica. 
            Eliminamos barreiras e conectamos sua empresa ao mercado global.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 text-lg px-8 py-6 group border border-white/20">
              Conheça Nossas Soluções
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button size="lg" className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 text-lg px-8 py-6 border border-white/20">
              Solicite uma Consultoria
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>;
};
export default Hero;