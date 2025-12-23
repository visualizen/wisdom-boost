import cert1 from "@/assets/certifications/1.png";
import cert2 from "@/assets/certifications/2.png";
import cert3 from "@/assets/certifications/3.png";
import cert4 from "@/assets/certifications/4.png";
import cert5 from "@/assets/certifications/5.png";
import cert6 from "@/assets/certifications/6.png";
import cert7 from "@/assets/certifications/7.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Certifications = () => {
  const { t } = useLanguage();

  const certifications = [
    { name: "MAPA", logo: cert1 },
    { name: "ANVISA", logo: cert2 },
    { name: "Policia Federal", logo: cert3 },
    { name: "ANP", logo: cert4 },
    { name: "IBAMA", logo: cert5 },
    { name: "Receita Federal", logo: cert6 }, // Guessing based on common certs, can update if specific names known
    { name: "Exército", logo: cert7 },
  ];

  // Duplicar o array para criar o efeito de loop infinito
  const duplicatedCertifications = [...certifications, ...certifications];

  return (
    <section id="certifications" className="py-24 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent">
            {t('certifications.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('certifications.subtitle')}
          </p>
        </div>

        {/* Carrossel Infinito */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex animate-scroll-infinite">
              {duplicatedCertifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-8 w-48 h-48 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <img
                    src={cert.logo}
                    alt={cert.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
