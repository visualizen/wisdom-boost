import { User, ShoppingBag, DollarSign, Plane, Package, Truck, Users, FileText, TrendingUp, FileCheck, Home } from "lucide-react";

const Timeline = () => {
  const topSteps = [
    { icon: User, label: "Cliente" },
    { icon: ShoppingBag, label: "Pedido de Compra" },
    { icon: DollarSign, label: "Trade Finance" },
    { icon: Plane, label: "Transporte Internacional" },
    { icon: Package, label: "Armazenagem Estratégica" },
    { icon: Home, label: "Entrega ao Cliente" },
  ];

  const bottomSteps = [
    { icon: Users, label: "Fornecedores" },
    { icon: FileText, label: "Planejamento Tributário" },
    { icon: TrendingUp, label: "Gestão Operacional" },
    { icon: FileCheck, label: "Desembaraço Aduaneiro" },
    { icon: Truck, label: "Transporte Rodoviário" },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-50">
        <img 
          src="/src/assets/cargo-ship-bg.png" 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent">
            Linha do Tempo
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            O caminho completo da sua operação de comércio exterior
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-7xl mx-auto">
          {/* Top Row */}
          <div className="relative mb-20">
            <div className="flex justify-between items-start gap-4">
              {topSteps.map((step, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center animate-fade-in-up group flex-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 relative z-10">
                    <step.icon className="text-black" size={32} />
                  </div>
                  {/* Vertical connector line */}
                  <div 
                    className="w-0.5 h-16 bg-white animate-line-grow-vertical origin-top"
                    style={{ animationDelay: `${index * 0.3 + 0.5}s` }}
                  />
                  <p className="text-sm font-semibold text-white mt-4 text-center">{step.label}</p>
                </div>
              ))}
            </div>
            
            {/* Horizontal Line */}
            <div 
              className="absolute top-10 left-0 w-full h-1 bg-white animate-line-grow-horizontal origin-left"
              style={{ animationDelay: `${topSteps.length * 0.3 + 0.5}s` }}
            />
          </div>

          {/* Bottom Row */}
          <div className="relative" style={{ minHeight: '220px' }}>
            {bottomSteps.map((step, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center animate-fade-in-up group absolute"
                style={{ 
                  animationDelay: `${(index + topSteps.length) * 0.1}s`,
                  left: `${((index + 1) / (topSteps.length)) * 100}%`,
                  transform: 'translateX(-50%)',
                  top: '0'
                }}
              >
                {/* Vertical connector line to main horizontal line */}
                <div 
                  className="w-0.5 h-40 bg-white animate-line-grow-vertical origin-top absolute"
                  style={{ 
                    animationDelay: `${(topSteps.length + index) * 0.3 + 1.5}s`,
                    top: '-160px',
                    left: '50%',
                    transform: 'translateX(-50%)'
                  }}
                />
                <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 relative z-10 mt-0">
                  <step.icon className="text-black" size={32} />
                </div>
                <p className="text-sm font-semibold text-white mt-4 text-center w-32">{step.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
