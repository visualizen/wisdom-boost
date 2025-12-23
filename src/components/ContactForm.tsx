import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { z } from "zod";
import airplaneBg from "@/assets/airplane-bg.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { supabase } from "@/integrations/supabase/client";

interface ContactFormProps {
  showServiceSelect?: boolean;
  defaultService?: string;
  title?: string;
  subtitle?: string;
}

const ContactForm = ({ showServiceSelect = false, defaultService = "", title, subtitle }: ContactFormProps) => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: defaultService,
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const contactSchema = z.object({
    name: z.string().trim().min(1, { message: t('contact.labels.name') + " é obrigatório" }).max(100),
    email: z.string().trim().email({ message: "Email inválido" }).max(255),
    phone: z.string().trim().optional().or(z.literal("")),
    service: z.string().optional(),
    message: z.string().trim().min(10, { message: "Mensagem muito curta" }).max(1000)
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    try {
      const validatedData = contactSchema.parse(formData);
      setIsSubmitting(true);

      // Call Supabase Edge Function
      const { data, error } = await supabase.functions.invoke('send-email', {
        body: validatedData,
      });

      if (error) {
        throw error;
      }

      console.log('Email sent:', data);

      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
    } catch (error) {
      console.error("Error sending message:", error);

      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        // Fallback to WhatsApp if email fails or other error
        const validatedData = formData; // Fallback uses current state
        let message = `*Novo contato (via Fallback)*%0A%0A*Nome:* ${encodeURIComponent(validatedData.name)}%0A*Email:* ${encodeURIComponent(validatedData.email)}`;
        if (validatedData.phone) message += `%0A*Telefone:* ${encodeURIComponent(validatedData.phone)}`;
        if (validatedData.service) message += `%0A*Serviço:* ${encodeURIComponent(validatedData.service)}`;
        message += `%0A*Mensagem:* ${encodeURIComponent(validatedData.message)}`;

        window.open(`https://wa.me/5547996256869?text=${message}`, '_blank');

        toast({
          title: "Erro no envio de email",
          description: "Redirecionando para o WhatsApp...",
          variant: "destructive"
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <section id="contato" className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${airplaneBg})` }}
      >
        <div className="absolute inset-0 bg-[#0f172a]/90" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* CTA Header */}
        <div className="text-center mb-12 animate-fade-in-up max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text leading-tight text-slate-50 md:text-5xl">
            {title || t('contact.title')}
          </h2>
          <p className="text-3xl font-bold mb-4 text-slate-50">
            {subtitle || t('contact.subtitle')}
          </p>
          <p className="text-xl text-white/90">
            {t('contact.desc')}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6 animate-fade-in-up">
              <div className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{t('contact.labels.emailTitle')}</h3>
                    <p className="text-white/80 text-sm">contato@wisdomtrading.com.br</p>
                  </div>
                </div>
              </div>

              <div className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{t('contact.labels.phoneTitle')}</h3>
                    <p className="text-white/80 text-sm">+55 (47) 99625-6869</p>
                  </div>
                </div>
              </div>

              <div className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{t('contact.labels.addressTitle')}</h3>
                    <p className="text-white/80 text-sm">Rua Joinville, 304, Sala 302 – Edifício Athon</p>
                    <p className="text-white/80 text-sm">Centro, 88301-410 - Itajaí, SC</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-white">
                      {t('contact.labels.name')}
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder={t('contact.placeholders.name')}
                      className="h-12 bg-white/10 backdrop-blur-sm border-white/30 text-white placeholder:text-white/50 focus:border-white focus:bg-white/20"
                      maxLength={100}
                    />
                    {errors.name && <p className="text-sm text-red-300">{errors.name}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-white">
                      {t('contact.labels.email')}
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder={t('contact.placeholders.email')}
                      className="h-12 bg-white/10 backdrop-blur-sm border-white/30 text-white placeholder:text-white/50 focus:border-white focus:bg-white/20"
                      maxLength={255}
                    />
                    {errors.email && <p className="text-sm text-red-300">{errors.email}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-white">
                    {t('contact.labels.phone')}
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder={t('contact.placeholders.phone')}
                    className="h-12 bg-white/10 backdrop-blur-sm border-white/30 text-white placeholder:text-white/50 focus:border-white focus:bg-white/20"
                    maxLength={20}
                  />
                  {errors.phone && <p className="text-sm text-red-300">{errors.phone}</p>}
                </div>

                {showServiceSelect && (
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-white">
                      {t('contact.labels.service')}
                    </label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                      <SelectTrigger className="h-12 bg-white/10 backdrop-blur-sm border-white/30 text-white focus:border-white focus:bg-white/20">
                        <SelectValue placeholder={t('contact.placeholders.service')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="importacao">Importação por Encomenda e C&O</SelectItem>
                        <SelectItem value="representacao">Representação Comercial Internacional</SelectItem>
                        <SelectItem value="consultoria">Consultoria Fiscal e Tributária</SelectItem>
                        <SelectItem value="logistica">Gestão Logística Internacional</SelectItem>
                        <SelectItem value="estudos">Estudos de NCM e Acordos Tarifários</SelectItem>
                        <SelectItem value="viabilidade">Análise de Viabilidade</SelectItem>
                        <SelectItem value="outros">Outros Serviços</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.service && <p className="text-sm text-red-300">{errors.service}</p>}
                  </div>
                )}

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-white">
                    {t('contact.labels.message')}
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder={t('contact.placeholders.message')}
                    className="min-h-[120px] resize-none bg-white/10 backdrop-blur-sm border-white/30 text-white placeholder:text-white/50 focus:border-white focus:bg-white/20"
                    maxLength={1000}
                  />
                  {errors.message && <p className="text-sm text-red-300">{errors.message}</p>}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="w-full h-14 bg-primary hover:bg-primary/90 text-white text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <span>{isSubmitting ? t('contact.button.sending') : t('contact.button.default')}</span>
                  <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
