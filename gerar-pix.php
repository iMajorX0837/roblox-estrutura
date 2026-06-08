<?php
// DEBUG: Ativa erros para ver o que está acontecendo
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Use POST para acessar este endpoint']);
    exit;
}

// O resto do código continua igual...
$input = json_decode(file_get_contents('php://input'), true);

$payerName     = trim($input['payerName'] ?? $input['customerName'] ?? '');
$payerDocument = trim($input['payerDocument'] ?? '');
$amount        = floatval($input['amount'] ?? 19.90);
$descricao     = trim($input['descricao'] ?? 'Pagamento de R$ ' . number_format($amount, 2, ',', '.'));

if (empty($payerName)) {
    http_response_code(400);
    echo json_encode(['error' => 'Nome do pagador é obrigatório']);
    exit;
}

if (!empty($payerDocument) && (strlen($payerDocument) !== 11 || !ctype_digit($payerDocument))) {
    http_response_code(400);
    echo json_encode(['error' => 'CPF deve ter 11 dígitos numéricos']);
    exit;
}

// Se não tiver CPF, gera um CPF temporário (algumas APIs aceitam)
if (empty($payerDocument)) {
    $payerDocument = '00000000000';
}

$apiUrl = 'https://api.misticpay.com/api/transactions/create';

$clientId     = 'ci_ya585i44736o8o5';
$clientSecret = 'cs_0oj72imsoa64xn3htyly5mcbp';

$payload = [
    'amount'        => $amount,
    'payerName'     => $payerName,
    'payerDocument' => $payerDocument,
    'transactionId' => 'pix-' . time() . rand(1000,9999),
    'description'   => $descricao
];

$ch = curl_init($apiUrl);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST           => true,
    CURLOPT_HTTPHEADER     => [
        "ci: $clientId",
        "cs: $clientSecret",
        'Content-Type: application/json'
    ],
    CURLOPT_POSTFIELDS     => json_encode($payload),
    CURLOPT_TIMEOUT        => 30,
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode >= 200 && $httpCode < 300) {
    echo $response;
} else {
    http_response_code($httpCode ?: 500);
    echo json_encode([
        'error'   => 'Erro na API MisticPay',
        'status'  => $httpCode,
        'detalhe' => $response ?: 'sem resposta do servidor'
    ]);
}
?>