
import emailjs from '@emailjs/browser';
import { toast } from "sonner";

// TODO: Replace with your actual EmailJS credentials
// You can get these from https://www.emailjs.com/
export const EMAILJS_CONFIG = {
    SERVICE_ID: "YOUR_SERVICE_ID",
    TEMPLATE_ID: "YOUR_TEMPLATE_ID",
    PUBLIC_KEY: "YOUR_PUBLIC_KEY"
};

interface AIRequestData {
    titulo: string;
    tamanho: string;
    estilo: string;
    prompt: string;
    palavrasChave: string;
}

export const emailService = {
    sendAIRequestNotification: async (data: AIRequestData) => {
        try {
            // Check if config is set (basic check)
            if (EMAILJS_CONFIG.SERVICE_ID === "YOUR_SERVICE_ID") {
                console.warn("EmailJS not configured");
                return { success: false, error: "not_configured" };
            }

            const templateParams = {
                to_email: "joaootima@gmail.com",
                from_name: "Wisdom CMS AI Request",
                message: `
                    Nova solicitação de geração de artigo via IA:
                    
                    Título: ${data.titulo}
                    Tamanho: ${data.tamanho}
                    Estilo: ${data.estilo}
                    Palavras-chave: ${data.palavrasChave}
                    
                    Prompt:
                    ${data.prompt}
                `
            };

            await emailjs.send(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID,
                templateParams,
                EMAILJS_CONFIG.PUBLIC_KEY
            );

            return { success: true };
        } catch (error) {
            console.error("Error sending email:", error);
            return { success: false, error };
        }
    }
};
