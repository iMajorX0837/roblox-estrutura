const API_URL = 'https://api.misticpay.com/api/transactions/create';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Content-Type': 'application/json',
};

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: corsHeaders, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: corsHeaders,
      body: JSON.stringify({ error: 'Use POST para acessar este endpoint' }),
    };
  }

  const clientId = process.env.MISTICPAY_CI || 'ci_ya585i44736o8o5';
  const clientSecret = process.env.MISTICPAY_CS || 'cs_0oj72imsoa64xn3htyly5mcbp';

  let input;
  try {
    input = JSON.parse(event.body || '{}');
  } catch {
    return {
      statusCode: 400,
      headers: corsHeaders,
      body: JSON.stringify({ error: 'JSON inválido' }),
    };
  }

  const payerName = String(input.payerName ?? input.customerName ?? '').trim();
  let payerDocument = String(input.payerDocument ?? '')
    .trim()
    .replace(/\D/g, '');
  const amount = parseFloat(input.amount ?? 19.9);
  const descricao =
    String(input.descricao ?? '').trim() ||
    `Pagamento de R$ ${amount.toFixed(2).replace('.', ',')}`;

  if (!payerName) {
    return {
      statusCode: 400,
      headers: corsHeaders,
      body: JSON.stringify({ error: 'Nome do pagador é obrigatório' }),
    };
  }

  if (payerDocument && payerDocument.length !== 11) {
    return {
      statusCode: 400,
      headers: corsHeaders,
      body: JSON.stringify({ error: 'CPF deve ter 11 dígitos numéricos' }),
    };
  }

  if (!payerDocument) payerDocument = '00000000000';

  const payload = {
    amount,
    payerName,
    payerDocument,
    transactionId: `pix-${Date.now()}${Math.floor(1000 + Math.random() * 9000)}`,
    description: descricao,
  };

  let res;
  try {
    res = await fetch(API_URL, {
      method: 'POST',
      headers: {
        ci: clientId,
        cs: clientSecret,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    return {
      statusCode: 502,
      headers: corsHeaders,
      body: JSON.stringify({
        error: 'Falha ao contatar a API MisticPay',
        detalhe: err.message || String(err),
      }),
    };
  }

  const text = await res.text();

  if (res.ok) {
    return {
      statusCode: 200,
      headers: corsHeaders,
      body: text,
    };
  }

  return {
    statusCode: res.status || 500,
    headers: corsHeaders,
    body: JSON.stringify({
      error: 'Erro na API MisticPay',
      status: res.status,
      detalhe: text || 'sem resposta do servidor',
    }),
  };
};
