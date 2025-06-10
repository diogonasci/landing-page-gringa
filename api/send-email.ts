import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  if (request.method !== "POST") {
    return response.status(405).json({
      success: false,
      error: "Método não permitido",
    });
  }

  try {
    const { name, phone, city, billValue } = request.body;

    const data = await resend.emails.send({
      from: "Contato <onboarding@resend.dev>",
      to: ["diogonascii@gmail.com"],
      subject: "Nova solicitação de análise - Landing Page",
      html: `
        <h2>Nova solicitação de análise</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>WhatsApp:</strong> ${phone}</p>
        <p><strong>Cidade:</strong> ${city}</p>
        <p><strong>Valor da conta:</strong> ${billValue || "Não informado"}</p>
      `,
    });

    return response.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return response.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : "Erro desconhecido",
    });
  }
}
