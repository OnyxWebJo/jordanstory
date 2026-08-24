<?php
// Jordan Story Tours — PHP API Front Controller
header('Content-Type: application/json; charset=utf-8');

$config = require __DIR__ . '/../../config/config.php';

// CORS handling
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $config['app']['allowed_origins']) || $config['app']['env'] === 'development') {
    header("Access-Control-Allow-Origin: " . ($origin ?: '*'));
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Simple Router
$requestUri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$path = preg_replace('#^/api/v1/#', '', $requestUri);
$method = $_SERVER['REQUEST_METHOD'];

// Helper response function
function sendJsonResponse($data, $statusCode = 200) {
    http_response_code($statusCode);
    echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    exit;
}

// Database Connection Helper
function getDbConnection($config) {
    static $pdo = null;
    if ($pdo === null) {
        try {
            $dsn = sprintf(
                "mysql:host=%s;port=%s;dbname=%s;charset=%s",
                $config['db']['host'],
                $config['db']['port'],
                $config['db']['dbname'],
                $config['db']['charset']
            );
            $pdo = new PDO($dsn, $config['db']['user'], $config['db']['password'], [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            ]);
        } catch (PDOException $e) {
            sendJsonResponse([
                'success' => false,
                'error' => [
                    'code' => 'DATABASE_CONNECTION_ERROR',
                    'message' => 'Unable to connect to database'
                ]
            ], 500);
        }
    }
    return $pdo;
}

// Route Handlers
if ($path === 'health' || $path === '') {
    sendJsonResponse([
        'success' => true,
        'data' => [
            'name' => $config['app']['name'],
            'status' => 'healthy',
            'timestamp' => date('c')
        ]
    ]);
}

// Pricing Quote Endpoint
if ($path === 'pricing/quote' && $method === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true) ?? $_POST;
    
    $tourId = $input['tour_id'] ?? null;
    $adults = intval($input['adults'] ?? 1);
    $children = intval($input['children'] ?? 0);
    $accommodation = $input['accommodation_level'] ?? 'standard';

    if (!$tourId) {
        sendJsonResponse([
            'success' => false,
            'error' => ['code' => 'MISSING_TOUR_ID', 'message' => 'Tour ID is required']
        ], 400);
    }

    $pdo = getDbConnection($config);
    $stmt = $pdo->prepare("SELECT price_per_person, single_supplement FROM tour_price_rules WHERE tour_id = ? AND traveler_count = ? AND accommodation_level = ? AND active = 1 LIMIT 1");
    $stmt->execute([$tourId, $adults, $accommodation]);
    $rule = $stmt->fetch();

    $pricePerPerson = $rule ? floatval($rule['price_per_person']) : 150.00; // fallback base price if rule pending
    $subtotal = ($adults * $pricePerPerson) + ($children * $pricePerPerson * 0.7);
    
    sendJsonResponse([
        'success' => true,
        'data' => [
            'currency' => 'USD',
            'price_status' => $rule ? 'CONFIRMED' : 'ESTIMATED',
            'price_per_person' => $pricePerPerson,
            'adults' => $adults,
            'children' => $children,
            'subtotal' => round($subtotal, 2),
            'total' => round($subtotal, 2)
        ]
    ]);
}

// Create Booking Endpoint
if ($path === 'bookings' && $method === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true) ?? $_POST;

    $tourId = $input['tour_id'] ?? null;
    $firstName = trim($input['first_name'] ?? '');
    $lastName = trim($input['last_name'] ?? '');
    $email = trim($input['email'] ?? '');
    $phone = trim($input['phone'] ?? '');
    $travelDate = $input['travel_date'] ?? null;
    $adults = intval($input['adults'] ?? 1);
    $children = intval($input['children'] ?? 0);
    $requests = trim($input['special_requests'] ?? '');

    if (!$tourId || !$firstName || !$lastName || !$email || !$travelDate) {
        sendJsonResponse([
            'success' => false,
            'error' => ['code' => 'VALIDATION_ERROR', 'message' => 'First name, last name, email, tour ID, and travel date are required']
        ], 400);
    }

    $pdo = getDbConnection($config);

    try {
        $pdo->beginTransaction();

        // 1. Create or Find Customer
        $customerStmt = $pdo->prepare("SELECT id FROM customers WHERE email = ? LIMIT 1");
        $customerStmt->execute([$email]);
        $customer = $customerStmt->fetch();

        if ($customer) {
            $customerId = $customer['id'];
        } else {
            $customerId = 'CUST-' . strtoupper(bin2hex(random_bytes(6)));
            $insCust = $pdo->prepare("INSERT INTO customers (id, first_name, last_name, email, phone) VALUES (?, ?, ?, ?, ?)");
            $insCust->execute([$customerId, $firstName, $lastName, $email, $phone]);
        }

        // 2. Create Booking
        $bookingId = 'BK-' . strtoupper(bin2hex(random_bytes(8)));
        $ref = 'JST-' . date('Ymd') . '-' . rand(1000, 9999);
        
        $insBk = $pdo->prepare("INSERT INTO bookings (id, reference, customer_id, tour_id, status, payment_status, travel_date, adult_count, child_count, quoted_total, special_requests) VALUES (?, ?, ?, ?, 'pending', 'unpaid', ?, ?, ?, 0.00, ?)");
        $insBk->execute([$bookingId, $ref, $customerId, $tourId, $travelDate, $adults, $children, $requests]);

        $pdo->commit();

        sendJsonResponse([
            'success' => true,
            'data' => [
                'booking_reference' => $ref,
                'status' => 'pending',
                'message' => 'Your booking request has been successfully submitted. Our team will contact you shortly.'
            ]
        ], 201);
    } catch (Exception $e) {
        if ($pdo->inTransaction()) {
            $pdo->rollBack();
        }
        sendJsonResponse([
            'success' => false,
            'error' => ['code' => 'BOOKING_FAILED', 'message' => 'Failed to process booking request. Please try again.']
        ], 500);
    }
}

// 404 Fallback
sendJsonResponse([
    'success' => false,
    'error' => ['code' => 'NOT_FOUND', 'message' => 'Endpoint not found']
], 404);
