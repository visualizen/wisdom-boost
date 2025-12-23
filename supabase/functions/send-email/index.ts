
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { name, email, phone, message, service } = await req.json();

    // Check if API key is present
    if (!Deno.env.get("RESEND_API_KEY")) {
      console.error("RESEND_API_KEY is missing");
      throw new Error("Server configuration error: Missing API Key");
    }

    const { data, error } = await resend.emails.send({
      from: 'Wisdom Site <Contato@wisdomtrading.com.br>', // Updated to verified domain
      to: ['joaootima@gmail.com'], // Temporary for testing
      subject: `Novo Lead: ${name} - ${service || 'Geral'}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #0c4a6e; border-bottom: 2px solid #0ea5e9; padding-bottom: 10px;">Novo Contato do Site</h1>
          
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Telefone:</strong> ${phone || 'Não informado'}</p>
            <p><strong>Serviço de Interesse:</strong> ${service || 'Geral/Não especificado'}</p>
          </div>

          <div style="margin-top: 20px;">
            <h3 style="color: #0369a1;">Mensagem:</h3>
            <p style="background-color: #f8fafc; padding: 15px; border-radius: 5px; border: 1px solid #e2e8f0;">
              ${message.replace(/\n/g, '<br>')}
            </p>
          </div>
          
          <p style="font-size: 12px; color: #64748b; margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 10px;">
            Enviado automaticamente pelo formulário do site Wisdom Trading.
          </p>
        </div>
      `
    });

    if (error) {
      console.error("Resend error:", error);
      throw error;
    }

    console.log("Email sent successfully:", data);

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error("Error in send-email function:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
