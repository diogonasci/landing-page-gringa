// api/send-email.ts
import { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface RequestBody {
  name: string;
  phone: string;
  city: string;
  billValue?: string;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  console.log('API chamada - Método:', req.method);
  console.log('API chamada - Body:', req.body);
  console.log('RESEND_API_KEY existe:', !!process.env.RESEND_API_KEY);

  // Configurar CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Apenas aceitar POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      error: 'Método não permitido' 
    });
  }

  try {
    // Verificar se RESEND_API_KEY existe
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY não configurada');
      return res.status(500).json({
        success: false,
        error: 'Configuração do servidor incompleta'
      });
    }

    const { name, phone, city, billValue }: RequestBody = req.body;

    // Validação básica
    if (!name || !phone || !city) {
      return res.status(400).json({
        success: false,
        error: 'Nome, telefone e cidade são obrigatórios'
      });
    }

    console.log('Tentando enviar email para:', 'diogonascii@gmail.com');

    // Enviar email usando Resend
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Use o domínio padrão do Resend para teste
      to: ['diogonascii@gmail.com'], // Email de destino
      subject: 'Nova solicitação de análise - Site Radial',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #ff5d26;">Nova solicitação de análise</h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>WhatsApp:</strong> ${phone}</p>
            <p><strong>Cidade:</strong> ${city}</p>
            ${billValue ? `<p><strong>Valor da conta de luz:</strong> ${billValue}</p>` : ''}
          </div>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          
          <p style="color: #666; font-size: 12px;">
            Enviado em: ${new Date().toLocaleString('pt-BR', { 
              timeZone: 'America/Sao_Paulo' 
            })}
          </p>
          
          <p style="color: #666; font-size: 12px;">
            Este email foi enviado automaticamente através do site da Radial Energia.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Erro do Resend:', error);
      return res.status(500).json({
        success: false,
        error: 'Erro ao enviar email: ' + JSON.stringify(error)
      });
    }

    console.log('Email enviado com sucesso:', data);

    // Resposta de sucesso
    res.status(200).json({ 
      success: true, 
      message: 'Email enviado com sucesso!',
      data 
    });

  } catch (error) {
    console.error('Erro ao processar requisição:', error);
    res.status(500).json({
      success: false,
      error: 'Erro interno do servidor: ' + (error instanceof Error ? error.message : 'Erro desconhecido')
    });
  }
}