import { Button } from "@/components/ui/button";
import { ArrowRight, Globe } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-primary/50" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Globe size={20} />
            <span className="text-sm font-medium">Conectando Empresas ao Mundo</span>
          </div>
          
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Soluções Completas no{" "}
            <span className="bg-gradient-text bg-clip-text text-transparent">Comércio Exterior</span>
          </h1>
          
          <p className="text-xl sm:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Importação e exportação ágil, segura e econômica. 
            Eliminamos barreiras e conectamos sua empresa ao mercado global.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 group"
            >
              Conheça Nossas Soluções
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6"
            >
              Solicite uma Consultoria
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
