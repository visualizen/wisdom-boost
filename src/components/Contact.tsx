import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Sparkles } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative py-32 bg-gradient-to-b from-background via-[hsl(215,28%,12%)] to-background overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-primary/20 rounded-full blur-[100px] -top-20 -left-20 animate-pulse" />
        <div className="absolute w-96 h-96 bg-primary/20 rounded-full blur-[100px] -bottom-20 -right-20 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Tech grid background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), 
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* CTA Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-2 mb-6">
            <Sparkles className="text-primary" size={20} />
            <span className="text-primary font-medium">Fale Conosco</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-title bg-clip-text text-transparent">
            Prontos para elevar o seu<br />comércio exterior ao próximo nível?
          </h2>
          <p className="text-2xl text-primary font-semibold mb-2">
            Vamos construir resultados juntos!
          </p>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa equipe está pronta para transformar seus desafios em oportunidades de negócio
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Info Cards */}
            <div className="lg:col-span-2 space-y-6 animate-fade-in-up">
              <div className="group relative overflow-hidden bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-xl border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                <div className="relative z-10 flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-foreground">Email</h3>
                    <p className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                      contato@wisdomtrading.com.br
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-xl border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                <div className="relative z-10 flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-foreground">Telefone</h3>
                    <p className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                      +55 (11) 1234-5678
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-xl border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                <div className="relative z-10 flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-foreground">Endereço</h3>
                    <p className="text-muted-foreground">São Paulo, SP - Brasil</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <form className="relative overflow-hidden bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-xl border border-border/50 rounded-3xl p-8 shadow-2xl hover:border-primary/30 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-primary opacity-[0.02]" />
                
                <div className="relative z-10 space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                      Nome Completo
                      <span className="text-primary">*</span>
                    </label>
                    <Input 
                      placeholder="Digite seu nome completo" 
                      className="h-14 bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                        Email
                        <span className="text-primary">*</span>
                      </label>
                      <Input 
                        type="email" 
                        placeholder="seu@email.com" 
                        className="h-14 bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">
                        Telefone
                      </label>
                      <Input 
                        type="tel" 
                        placeholder="(11) 91234-5678" 
                        className="h-14 bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                      Mensagem
                      <span className="text-primary">*</span>
                    </label>
                    <Textarea 
                      placeholder="Conte-nos sobre suas necessidades de comércio exterior..."
                      className="min-h-[150px] resize-none bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary transition-all"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full h-14 bg-gradient-primary text-lg font-semibold shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all duration-300 group"
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
