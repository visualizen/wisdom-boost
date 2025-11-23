import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, Clock, Globe } from "lucide-react";

const Contato = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-secondary via-background to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent">
              Entre em Contato
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Estamos prontos para ajudar sua empresa a crescer no mercado global
            </p>
          </div>
        </div>
      </section>

      {/* Additional Contact Info */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="text-white" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <p className="text-muted-foreground text-sm">contato@wisdomtrading.com.br</p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="text-white" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">Telefone</h3>
              <p className="text-muted-foreground text-sm">+55 (11) 1234-5678</p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-white" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">Localização</h3>
              <p className="text-muted-foreground text-sm">R. Joinville, 304 - Centro</p>
              <p className="text-muted-foreground text-sm">Itajaí - SC, 88301-410</p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="text-white" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">Horário</h3>
              <p className="text-muted-foreground text-sm">Seg - Sex: 9h às 18h</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent">
              Nossa Localização
            </h2>
            <p className="text-muted-foreground">
              Visite nosso escritório em São Paulo
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-lg border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.2961234567!2d-48.66668!3d-26.9033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8ca1b8b8b8b8b%3A0x1234567890!2sR.%20Joinville%2C%20304%20-%20Centro%2C%20Itaja%C3%AD%20-%20SC%2C%2088301-410!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Wisdom Trading"
            />
          </div>
        </div>
      </section>

      <ContactForm />

      <Footer />
    </div>
  );
};

export default Contato;
