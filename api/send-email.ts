import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Método não permitido' });
  }

  try {
    const { name, phone, city, billValue } = request.body;

    const { data, error } = await resend.emails.send({
      from: 'Radial Energia <contato@radialenergia.com.br>',
      to: ['contato@radialenergia.com.br'],
      subject: 'Nova solicitação de análise - Site',
      html: `
        <h2>Nova solicitação de análise</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>WhatsApp:</strong> ${phone}</p>
        <p><strong>Cidade:</strong> ${city}</p>
        ${billValue ? `<p><strong>Valor da conta:</strong> ${billValue}</p>` : ''}
      `,
    });

    if (error) {
      return response.status(500).json({
        success: false,
        error: 'Erro ao enviar email'
      });
    }

    return response.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Erro ao processar requisição:', error);
    return response.status(500).json({
      success: false,
      error: 'Erro interno do servidor'
    });
  }
}
