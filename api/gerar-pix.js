const API_URL = 'https://api.misticpay.com/api/transactions/create';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

export default async function handler(req, res) {
  Object.entries(corsHeaders).forEach(([key, value]) => {
    res.setHeader(key, value);
  });

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Use POST para acessar este endpoint' });
  }

  const clientId = process.env.MISTICPAY_CI || 'ci_ya585i44736o8o5';
  const clientSecret = process.env.MISTICPAY_CS || 'cs_0oj72imsoa64xn3htyly5mcbp';

  const input = req.body || {};

  const payerName = String(input.payerName ?? input.customerName ?? '').trim();
  let payerDocument = String(input.payerDocument ?? '')
    .trim()
    .replace(/\D/g, '');
  const amount = parseFloat(input.amount ?? 19.9);
  const descricao =
    String(input.descricao ?? '').trim() ||
    `Pagamento de R$ ${amount.toFixed(2).replace('.', ',')}`;

  if (!payerName) {
    return res.status(400).json({ error: 'Nome do pagador é obrigatório' });
  }

  if (payerDocument && payerDocument.length !== 11) {
    return res.status(400).json({ error: 'CPF deve ter 11 dígitos numéricos' });
  }

  if (!payerDocument) payerDocument = '00000000000';

  const payload = {
    amount,
    payerName,
    payerDocument,
    transactionId: `pix-${Date.now()}${Math.floor(1000 + Math.random() * 9000)}`,
    description: descricao,
  };

  let response;
  try {
    response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        ci: clientId,
        cs: clientSecret,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    return res.status(502).json({
      error: 'Falha ao contatar a API MisticPay',
      detalhe: err.message || String(err),
    });
  }

  const text = await response.text();

  if (response.ok) {
    res.setHeader('Content-Type', 'application/json');
    return res.status(200).send(text);
  }

  return res.status(response.status || 500).json({
    error: 'Erro na API MisticPay',
    status: response.status,
    detalhe: text || 'sem resposta do servidor',
  });
}
