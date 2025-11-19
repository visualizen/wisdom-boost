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
    <section className="py-24 bg-primary/10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, white 2%, transparent 0%), 
                           radial-gradient(circle at 75px 75px, white 2%, transparent 0%)`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-title bg-clip-text text-transparent">
            Linha do Tempo
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            O caminho completo da sua operação de comércio exterior
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-7xl mx-auto">
          {/* Top Row */}
          <div className="relative mb-20">
            <div className="flex justify-between items-start gap-4 mb-12">
              {topSteps.map((step, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center animate-fade-in-up group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-8 shadow-lg border-4 border-primary group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <step.icon className="text-primary" size={32} />
                  </div>
                  {index < topSteps.length - 1 && (
                    <div className="absolute top-10 left-0 w-full h-1 bg-white shadow-md -z-10" 
                         style={{ 
                           left: `${(index / (topSteps.length - 1)) * 100}%`,
                           width: `${100 / (topSteps.length - 1)}%`
                         }} 
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between gap-4">
              {topSteps.map((step, index) => (
                <div 
                  key={index} 
                  className="flex-1 text-center"
                >
                  <p className="text-sm font-semibold text-foreground">{step.label}</p>
                </div>
              ))}
            </div>
            
            {/* Horizontal Line */}
            <div className="absolute top-10 left-0 w-full h-2 bg-white shadow-md rounded-full" />
          </div>

          {/* Bottom Row */}
          <div className="relative">
            <div className="flex justify-center items-start gap-8">
              {bottomSteps.map((step, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center animate-fade-in-up group"
                  style={{ animationDelay: `${(index + topSteps.length) * 0.1}s` }}
                >
                  <p className="text-sm font-semibold text-foreground mb-4 text-center min-h-[40px] flex items-end">{step.label}</p>
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-primary group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <step.icon className="text-primary" size={32} />
                  </div>
                  {/* Connector Lines */}
                  <div className="w-1 h-12 bg-white shadow-md absolute top-[-48px] rounded-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
