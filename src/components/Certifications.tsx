import cert1 from "@/assets/certifications/cert-1.png";
import cert2 from "@/assets/certifications/cert-2.png";
import cert3 from "@/assets/certifications/cert-3.png";
import cert4 from "@/assets/certifications/cert-4.jpg";
import cert5 from "@/assets/certifications/cert-5.png";
import cert6 from "@/assets/certifications/cert-6.png";
import cert7 from "@/assets/certifications/cert-7.png";
import cert8 from "@/assets/certifications/cert-8.png";
import cert9 from "@/assets/certifications/cert-9.png";
import cert10 from "@/assets/certifications/cert-10.png";

const Certifications = () => {
  const certifications = [
    { name: "MAPA", logo: cert1 },
    { name: "DECEX", logo: cert2 },
    { name: "Ministério da Agricultura", logo: cert3 },
    { name: "ANVISA", logo: cert4 },
    { name: "IBAMA", logo: cert5 },
    { name: "CNPq", logo: cert6 },
    { name: "MCTI", logo: cert7 },
    { name: "Polícia Federal", logo: cert8 },
    { name: "E2", logo: cert9 },
    { name: "ANEEL", logo: cert10 },
  ];

  // Duplicar o array para criar o efeito de loop infinito
  const duplicatedCertifications = [...certifications, ...certifications];

  return (
    <section id="certifications" className="py-24 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-title bg-clip-text text-transparent">
            Conheça nossas Certificações
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Compromisso com excelência e conformidade reconhecidos nacionalmente e internacionalmente
          </p>
        </div>

        {/* Carrossel Infinito */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex animate-scroll-infinite">
              {duplicatedCertifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-8 w-32 h-32 flex items-center justify-center bg-white rounded-lg shadow-card hover:shadow-lg-custom transition-all duration-300 hover:scale-110"
                >
                  <img
                    src={cert.logo}
                    alt={cert.name}
                    className="max-w-full max-h-full object-contain p-4"
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
