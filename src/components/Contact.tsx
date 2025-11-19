import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import airplaneBg from "@/assets/airplane-bg.png";

const Contact = () => {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${airplaneBg})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* CTA Header */}
        <div className="text-center mb-16 animate-fade-in-up max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            Prontos para elevar o seu<br />comércio exterior ao próximo nível?
          </h2>
          <p className="text-3xl text-primary font-bold mb-4">
            Vamos construir resultados juntos!
          </p>
          <p className="text-xl text-white/90">
            Entre em contato e descubra como podemos transformar seu negócio
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6 animate-fade-in-up">
              <div className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Email</h3>
                    <p className="text-white/80 text-sm">contato@wisdomtrading.com.br</p>
                  </div>
                </div>
              </div>

              <div className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Telefone</h3>
                    <p className="text-white/80 text-sm">+55 (11) 1234-5678</p>
                  </div>
                </div>
              </div>

              <div className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Endereço</h3>
                    <p className="text-white/80 text-sm">São Paulo, SP - Brasil</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <form className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-white">
                      Nome Completo *
                    </label>
                    <Input 
                      placeholder="Digite seu nome" 
                      className="h-12 bg-white/10 backdrop-blur-sm border-white/30 text-white placeholder:text-white/50 focus:border-white focus:bg-white/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-white">
                      Email *
                    </label>
                    <Input 
                      type="email" 
                      placeholder="seu@email.com" 
                      className="h-12 bg-white/10 backdrop-blur-sm border-white/30 text-white placeholder:text-white/50 focus:border-white focus:bg-white/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-white">
                    Telefone
                  </label>
                  <Input 
                    type="tel" 
                    placeholder="(11) 91234-5678" 
                    className="h-12 bg-white/10 backdrop-blur-sm border-white/30 text-white placeholder:text-white/50 focus:border-white focus:bg-white/20"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-white">
                    Mensagem *
                  </label>
                  <Textarea 
                    placeholder="Conte-nos sobre suas necessidades..."
                    className="min-h-[120px] resize-none bg-white/10 backdrop-blur-sm border-white/30 text-white placeholder:text-white/50 focus:border-white focus:bg-white/20"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full h-14 bg-primary hover:bg-primary/90 text-white text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <span>Enviar Mensagem</span>
                  <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
