"use server";

import { z } from "zod";

const leadSchema = z.object({
  nome: z.string().min(2, "Nome é obrigatório"),
  whatsapp: z.string().min(10, "WhatsApp é obrigatório"),
  email: z.string().email("E-mail inválido"),
  cnpj: z.string().min(14, "CNPJ é obrigatório (mínimo 14 caracteres)"),
  faturamento: z.enum(["ate-50k", "50k-100k", "100k-500k", "acima-500k"], {
    errorMap: () => ({ message: "Selecione uma faixa de faturamento válida" })
  }),
  momento: z.enum(["mei", "centralizo", "sem-processo", "escalar"], {
    errorMap: () => ({ message: "Selecione um momento válido" })
  }),
});

export async function submitLead(prevState: any, formData: FormData) {
  try {
    const rawData = {
      nome: formData.get("nome"),
      whatsapp: formData.get("whatsapp"),
      email: formData.get("email"),
      cnpj: formData.get("cnpj"),
      faturamento: formData.get("faturamento"),
      momento: formData.get("momento"),
    };

    const validatedData = leadSchema.parse(rawData);

    // TODO: Substituir por sua URL real de webhook (Make/Zapier) ou API do CRM
    const WEBHOOK_URL = process.env.WEBHOOK_URL || "https://webhook.site/placeholder";

    console.log("Enviando lead para o CRM...", validatedData);

    // Simulação de delay para a requisição
    await new Promise(resolve => setTimeout(resolve, 1000));

    /* Exemplo de integração real com Webhook/CRM:
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(validatedData),
    });

    if (!response.ok) {
      throw new Error("Erro na integração com CRM");
    }
    */

    return {
      success: true,
      message: "Sua aplicação foi enviada com sucesso! Nossa equipe entrará em contato em breve."
    };

  } catch (error) {
    if (error instanceof z.ZodError) {
      console.log("Erro de validação:", error.flatten().fieldErrors);
      return {
        success: false,
        errors: error.flatten().fieldErrors,
        message: "Por favor, preencha corretamente todos os campos solicitados."
      };
    }

    console.error("Erro interno ao processar lead:", error);
    return {
      success: false,
      message: "Ocorreu um erro no servidor ao enviar sua aplicação. Tente novamente mais tarde."
    };
  }
}
