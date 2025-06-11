// api/send-email.js
export default async function handler(req, res) {
    console.log('=== API CHAMADA ===');
    console.log('Método:', req.method);
    console.log('Body:', req.body);
  
    // Configurar CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
    // Handle preflight request
    if (req.method === 'OPTIONS') {
      res.status(200).end();
      return;
    }
  
    if (req.method !== 'POST') {
      return res.status(405).json({ 
        success: false, 
        error: 'Método não permitido' 
      });
    }
  
    try {
      const { name, phone, city, billValue } = req.body;
  
      // Validação básica
      if (!name || !phone || !city) {
        return res.status(400).json({
          success: false,
          error: 'Nome, telefone e cidade são obrigatórios'
        });
      }
  
      console.log('Dados recebidos:');
      console.log('Nome:', name);
      console.log('Phone:', phone);
      console.log('Cidade:', city);
      console.log('Valor conta:', billValue);
  
      // Por enquanto, vamos apenas simular o sucesso
      // Depois adicionaremos o Resend quando isso estiver funcionando
      res.status(200).json({ 
        success: true, 
        message: 'Formulário recebido com sucesso!',
        data: {
          name,
          phone,
          city,
          billValue,
          timestamp: new Date().toISOString()
        }
      });
  
    } catch (error) {
      console.error('Erro:', error);
      res.status(500).json({
        success: false,
        error: 'Erro interno: ' + error.message
      });
    }
  }