import { useState } from "react";
import { Calculator, DollarSign, Package, Plane, Ship, TrendingUp, User, Mail, Building2, Phone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().trim().min(2, "Nome deve ter pelo menos 2 caracteres").max(100, "Nome muito longo"),
  email: z.string().trim().email("Email inválido").max(255, "Email muito longo"),
  company: z.string().trim().min(2, "Empresa deve ter pelo menos 2 caracteres").max(100, "Nome da empresa muito longo"),
  phone: z.string().trim().min(10, "Telefone inválido").max(20, "Telefone inválido"),
});

const ImportCalculator = () => {
  const { toast } = useToast();
  const [operationType, setOperationType] = useState<"import" | "export">("import");
  const [transportMode, setTransportMode] = useState<"sea" | "air">("sea");
  const [fobValue, setFobValue] = useState("");
  const [weight, setWeight] = useState("");
  const [country, setCountry] = useState("");
  const [productType, setProductType] = useState("");
  
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadData, setLeadData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const calculateCosts = () => {
    const fob = parseFloat(fobValue) || 0;
    const weightKg = parseFloat(weight) || 0;
    
    // Estimativas de custos baseadas no modal de transporte
    const freightRate = transportMode === "air" ? 8.5 : 2.5; // USD por kg
    const freight = weightKg * freightRate;
    const insurance = (fob + freight) * 0.005; // 0.5%
    
    // CIF = FOB + Frete + Seguro
    const cif = fob + freight + insurance;
    
    // Impostos de importação (valores aproximados)
    const importTax = cif * 0.14; // II médio de 14%
    const ipi = (cif + importTax) * 0.10; // IPI médio de 10%
    const pis = (cif + importTax) * 0.0165; // PIS 1.65%
    const cofins = (cif + importTax) * 0.076; // COFINS 7.6%
    const icms = (cif + importTax + ipi + pis + cofins) * 0.18; // ICMS médio 18%
    
    const totalTaxes = importTax + ipi + pis + cofins + icms;
    const totalCost = cif + totalTaxes;
    
    return {
      fob,
      freight,
      insurance,
      cif,
      importTax,
      ipi,
      pis,
      cofins,
      icms,
      totalTaxes,
      totalCost,
    };
  };

  const costs = calculateCosts();

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const validatedData = leadSchema.parse(leadData);
      
      // Criar mensagem para WhatsApp
      const calculationSummary = `
📊 *Simulação de ${operationType === "import" ? "Importação" : "Exportação"}*

💰 Valor FOB: R$ ${costs.fob.toFixed(2)}
📦 Peso: ${weight} kg
🚢 Transporte: ${transportMode === "sea" ? "Marítimo" : "Aéreo"}
🌍 País: ${country}
📦 Produto: ${productType}

💵 *Custo Total Estimado:* R$ ${costs.totalCost.toFixed(2)}

---
👤 *Dados do Solicitante:*
Nome: ${validatedData.name}
Email: ${validatedData.email}
Empresa: ${validatedData.company}
Telefone: ${validatedData.phone}
      `.trim();

      const phoneNumber = "5547988776655";
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(calculationSummary)}`;
      
      window.open(whatsappUrl, "_blank");
      
      toast({
        title: "Sucesso!",
        description: "Seus dados foram processados. Redirecionando para WhatsApp...",
      });

      // Limpar formulário
      setLeadData({ name: "", email: "", company: "", phone: "" });
      setShowLeadForm(false);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const firstError = error.errors[0];
        toast({
          title: "Erro de validação",
          description: firstError.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Erro",
          description: "Ocorreu um erro ao processar seus dados. Tente novamente.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-br from-blue-500/5 via-background to-cyan-500/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full border border-blue-500/20">
            <Calculator className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">Ferramenta Gratuita</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-500 bg-clip-text text-transparent">
            Simulador de Custos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Calcule estimativas de custos para suas operações de comércio exterior e receba uma análise detalhada
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculadora */}
            <Card className="relative overflow-hidden border-2 border-blue-500/20 bg-card/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-primary opacity-5" />
              <CardHeader className="relative z-10">
                <CardTitle className="text-3xl flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <Calculator className="text-white" size={24} />
                  </div>
                  Dados da Operação
                </CardTitle>
                <CardDescription className="text-base">
                  Preencha os campos abaixo para simular seus custos
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 relative z-10">
                {/* Tipo de Operação */}
                <div className="space-y-3">
                  <Label className="text-base font-semibold">Tipo de Operação</Label>
                  <RadioGroup value={operationType} onValueChange={(value: "import" | "export") => setOperationType(value)}>
                    <div className="flex gap-4">
                      <div className="flex items-center space-x-2 flex-1">
                        <RadioGroupItem value="import" id="import" />
                        <Label htmlFor="import" className="cursor-pointer flex-1 p-3 border border-border rounded-lg hover:border-primary transition-colors">
                          Importação
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 flex-1">
                        <RadioGroupItem value="export" id="export" />
                        <Label htmlFor="export" className="cursor-pointer flex-1 p-3 border border-border rounded-lg hover:border-primary transition-colors">
                          Exportação
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                {/* Modal de Transporte */}
                <div className="space-y-3">
                  <Label className="text-base font-semibold">Modal de Transporte</Label>
                  <RadioGroup value={transportMode} onValueChange={(value: "sea" | "air") => setTransportMode(value)}>
                    <div className="flex gap-4">
                      <div className="flex items-center space-x-2 flex-1">
                        <RadioGroupItem value="sea" id="sea" />
                        <Label htmlFor="sea" className="cursor-pointer flex-1 p-3 border border-border rounded-lg hover:border-primary transition-colors flex items-center gap-2">
                          <Ship size={18} />
                          Marítimo
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 flex-1">
                        <RadioGroupItem value="air" id="air" />
                        <Label htmlFor="air" className="cursor-pointer flex-1 p-3 border border-border rounded-lg hover:border-primary transition-colors flex items-center gap-2">
                          <Plane size={18} />
                          Aéreo
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                {/* Valor FOB */}
                <div className="space-y-3">
                  <Label htmlFor="fobValue" className="text-base font-semibold flex items-center gap-2">
                    <DollarSign size={18} />
                    Valor FOB (R$)
                  </Label>
                  <Input
                    id="fobValue"
                    type="number"
                    placeholder="Ex: 10000"
                    value={fobValue}
                    onChange={(e) => setFobValue(e.target.value)}
                    className="text-lg h-12"
                  />
                </div>

                {/* Peso */}
                <div className="space-y-3">
                  <Label htmlFor="weight" className="text-base font-semibold flex items-center gap-2">
                    <Package size={18} />
                    Peso Total (kg)
                  </Label>
                  <Input
                    id="weight"
                    type="number"
                    placeholder="Ex: 1000"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="text-lg h-12"
                  />
                </div>

                {/* País de Origem */}
                <div className="space-y-3">
                  <Label htmlFor="country" className="text-base font-semibold">País de Origem/Destino</Label>
                  <Select value={country} onValueChange={setCountry}>
                    <SelectTrigger className="h-12 text-base">
                      <SelectValue placeholder="Selecione o país" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="china">China</SelectItem>
                      <SelectItem value="usa">Estados Unidos</SelectItem>
                      <SelectItem value="germany">Alemanha</SelectItem>
                      <SelectItem value="italy">Itália</SelectItem>
                      <SelectItem value="india">Índia</SelectItem>
                      <SelectItem value="argentina">Argentina</SelectItem>
                      <SelectItem value="mexico">México</SelectItem>
                      <SelectItem value="other">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Tipo de Produto */}
                <div className="space-y-3">
                  <Label htmlFor="productType" className="text-base font-semibold">Tipo de Produto</Label>
                  <Input
                    id="productType"
                    placeholder="Ex: Máquinas industriais, Eletrônicos..."
                    value={productType}
                    onChange={(e) => setProductType(e.target.value)}
                    className="text-lg h-12"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Resultados */}
            <div className="space-y-6">
              <Card className="relative overflow-hidden border-2 border-cyan-500/20 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/10" />
                <CardHeader className="relative z-10">
                  <CardTitle className="text-3xl flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                      <TrendingUp className="text-white" size={24} />
                    </div>
                    Estimativa de Custos
                  </CardTitle>
                  <CardDescription className="text-base">
                    Valores aproximados baseados nos dados informados
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 relative z-10">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                      <span className="text-muted-foreground">Valor FOB</span>
                      <span className="font-semibold text-lg">{formatCurrency(costs.fob)}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                      <span className="text-muted-foreground">Frete Internacional</span>
                      <span className="font-semibold text-lg">{formatCurrency(costs.freight)}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                      <span className="text-muted-foreground">Seguro</span>
                      <span className="font-semibold text-lg">{formatCurrency(costs.insurance)}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg border border-primary/20">
                      <span className="font-semibold">Valor CIF</span>
                      <span className="font-bold text-xl text-primary">{formatCurrency(costs.cif)}</span>
                    </div>
                  </div>

                  <div className="border-t-2 border-dashed border-border pt-4 space-y-3">
                    <h4 className="font-bold text-lg mb-3">Impostos Estimados</h4>
                    <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                      <span className="text-muted-foreground text-sm">Imposto de Importação (II)</span>
                      <span className="font-semibold">{formatCurrency(costs.importTax)}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                      <span className="text-muted-foreground text-sm">IPI</span>
                      <span className="font-semibold">{formatCurrency(costs.ipi)}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                      <span className="text-muted-foreground text-sm">PIS</span>
                      <span className="font-semibold">{formatCurrency(costs.pis)}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                      <span className="text-muted-foreground text-sm">COFINS</span>
                      <span className="font-semibold">{formatCurrency(costs.cofins)}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                      <span className="text-muted-foreground text-sm">ICMS</span>
                      <span className="font-semibold">{formatCurrency(costs.icms)}</span>
                    </div>
                  </div>

                  <div className="border-t-2 border-primary/30 pt-4">
                    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl border-2 border-primary/30">
                      <span className="font-bold text-xl">CUSTO TOTAL</span>
                      <span className="font-bold text-3xl bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">
                        {formatCurrency(costs.totalCost)}
                      </span>
                    </div>
                  </div>

                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mt-6">
                    <p className="text-sm text-muted-foreground text-center">
                      <strong>Importante:</strong> Valores aproximados para fins de simulação. Para um orçamento preciso, entre em contato com nossa equipe.
                    </p>
                  </div>

                  {!showLeadForm ? (
                    <Button 
                      onClick={() => setShowLeadForm(true)}
                      className="w-full h-14 text-lg font-bold bg-gradient-primary hover:opacity-90 transition-opacity"
                      disabled={!fobValue || !weight || !country || !productType}
                    >
                      Receber Orçamento Detalhado
                    </Button>
                  ) : null}
                </CardContent>
              </Card>

              {/* Formulário de Lead */}
              {showLeadForm && (
                <Card className="relative overflow-hidden border-2 border-green-500/20 bg-gradient-to-br from-green-500/5 to-emerald-500/5 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-emerald-600/10" />
                  <CardHeader className="relative z-10">
                    <CardTitle className="text-2xl">Seus Dados</CardTitle>
                    <CardDescription>
                      Informe seus dados para receber um orçamento personalizado
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <form onSubmit={handleLeadSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="flex items-center gap-2">
                          <User size={16} />
                          Nome Completo
                        </Label>
                        <Input
                          id="name"
                          placeholder="Seu nome"
                          value={leadData.name}
                          onChange={(e) => setLeadData({ ...leadData, name: e.target.value })}
                          required
                          maxLength={100}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="flex items-center gap-2">
                          <Mail size={16} />
                          Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="seu@email.com"
                          value={leadData.email}
                          onChange={(e) => setLeadData({ ...leadData, email: e.target.value })}
                          required
                          maxLength={255}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company" className="flex items-center gap-2">
                          <Building2 size={16} />
                          Empresa
                        </Label>
                        <Input
                          id="company"
                          placeholder="Nome da empresa"
                          value={leadData.company}
                          onChange={(e) => setLeadData({ ...leadData, company: e.target.value })}
                          required
                          maxLength={100}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="flex items-center gap-2">
                          <Phone size={16} />
                          Telefone
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="(47) 98877-6655"
                          value={leadData.phone}
                          onChange={(e) => setLeadData({ ...leadData, phone: e.target.value })}
                          required
                          maxLength={20}
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full h-12 text-base font-bold bg-gradient-to-r from-green-600 to-emerald-600 hover:opacity-90 transition-opacity"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Enviando..." : "Enviar e Receber Orçamento"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportCalculator;
