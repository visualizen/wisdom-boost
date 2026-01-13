import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Segments from "@/components/Segments";
import Certifications from "@/components/Certifications";
import Timeline from "@/components/Timeline";
import News from "@/components/News";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Soluções em Comércio Exterior"
        description="Importação e exportação ágil, segura e econômica. A Wisdom Trading conecta sua empresa ao mercado global com soluções completas em comércio exterior."
      />
      <Header />
      <Hero />
      <Services />
      <Benefits />
      <Segments />
      <Certifications />
      <Timeline />
      <News />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
