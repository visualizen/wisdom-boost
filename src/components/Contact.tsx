import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Sparkles } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative py-32 bg-gradient-to-b from-primary-dark via-primary to-primary-dark overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-[100px] -top-20 -left-20 animate-pulse" />
        <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-[100px] -bottom-20 -right-20 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Tech grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(white 1px, transparent 1px), 
                           linear-gradient(90deg, white 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* CTA Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-2 mb-6">
            <Sparkles className="text-white" size={20} />
            <span className="text-white font-medium">Fale Conosco</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Prontos para elevar o seu<br />comércio exterior ao próximo nível?
          </h2>
          <p className="text-2xl text-white font-semibold mb-2">
            Vamos construir resultados juntos!
          </p>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Nossa equipe está pronta para transformar seus desafios em oportunidades de negócio
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Info Cards */}
            <div className="lg:col-span-2 space-y-6 animate-fade-in-up">
              <div className="group relative overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:border-white/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                <div className="relative z-10 flex items-start gap-4">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-white">Email</h3>
                    <p className="text-white/80 hover:text-white transition-colors cursor-pointer">
                      contato@wisdomtrading.com.br
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:border-white/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                <div className="relative z-10 flex items-start gap-4">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-white">Telefone</h3>
                    <p className="text-white/80 hover:text-white transition-colors cursor-pointer">
                      +55 (11) 1234-5678
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:border-white/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                <div className="relative z-10 flex items-start gap-4">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-white">Endereço</h3>
                    <p className="text-white/80">São Paulo, SP - Brasil</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <form className="relative overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl hover:border-white/30 transition-all duration-500">
                <div className="absolute inset-0 bg-white opacity-[0.02]" />
                
                <div className="relative z-10 space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-white flex items-center gap-2">
                      Nome Completo
                      <span className="text-white">*</span>
                    </label>
                    <Input 
                      placeholder="Digite seu nome completo" 
                      className="h-14 bg-white/10 backdrop-blur-sm border-white/20 focus:border-white text-white placeholder:text-white/60 transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-white flex items-center gap-2">
                        Email
                        <span className="text-white">*</span>
                      </label>
                      <Input 
                        type="email" 
                        placeholder="seu@email.com" 
                        className="h-14 bg-white/10 backdrop-blur-sm border-white/20 focus:border-white text-white placeholder:text-white/60 transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-white">
                        Telefone
                      </label>
                      <Input 
                        type="tel" 
                        placeholder="(11) 91234-5678" 
                        className="h-14 bg-white/10 backdrop-blur-sm border-white/20 focus:border-white text-white placeholder:text-white/60 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-white flex items-center gap-2">
                      Mensagem
                      <span className="text-white">*</span>
                    </label>
                    <Textarea 
                      placeholder="Conte-nos sobre suas necessidades de comércio exterior..."
                      className="min-h-[150px] resize-none bg-white/10 backdrop-blur-sm border-white/20 focus:border-white text-white placeholder:text-white/60 transition-all"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full h-14 bg-white text-primary text-lg font-semibold shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] hover:bg-white/90 transition-all duration-300 group"
                  >
                    <span>Enviar Mensagem</span>
                    <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
