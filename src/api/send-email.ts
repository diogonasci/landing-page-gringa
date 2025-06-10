import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, phone, city, billValue } = await request.json();

    const data = await resend.emails.send({
      from: "Contato <onboarding@resend.dev>",
      to: ["seu-email@exemplo.com"], // Substitua pelo seu e-mail
      subject: "Nova solicitação de análise - Landing Page",
      html: `
        <h2>Nova solicitação de análise</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>WhatsApp:</strong> ${phone}</p>
        <p><strong>Cidade:</strong> ${city}</p>
        <p><strong>Valor da conta:</strong> ${billValue || "Não informado"}</p>
      `,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ success: false, error });
  }
}
