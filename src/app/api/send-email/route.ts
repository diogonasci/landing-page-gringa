import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, phone, city, billValue } = await request.json();

    const { data, error } = await resend.emails.send({
      from: "Radial Energia <contato@radialenergia.com.br>",
      to: ["contato@radialenergia.com.br"],
      subject: "Nova solicitação de análise - Site",
      html: `
        <h2>Nova solicitação de análise</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>WhatsApp:</strong> ${phone}</p>
        <p><strong>Cidade:</strong> ${city}</p>
        ${
          billValue
            ? `<p><strong>Valor da conta:</strong> ${billValue}</p>`
            : ""
        }
      `,
    });

    if (error) {
      return NextResponse.json(
        { success: false, error: "Erro ao enviar email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Erro ao processar requisição:", error);
    return NextResponse.json(
      { success: false, error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
