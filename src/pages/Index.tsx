import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Timeline from "@/components/Timeline";
import Certifications from "@/components/Certifications";
import Segments from "@/components/Segments";
import News from "@/components/News";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Benefits />
      <Timeline />
      <Certifications />
      <Segments />
      <News />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
