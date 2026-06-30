<?php

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

include "config.php";

$data=json_decode(file_get_contents("php://input"),true);

$full_name = $data["full_name"];
$phone = $data["phone"];
$email = $data["email"];
$doctor = $data["doctor"];
$date = $data["date"];
$time = $data["time"];
$message = $data["message"];

$sql = "INSERT INTO appointments
        (full_name,phone,email,doctor,appointment_date, time_slot,message) VALUES (?,?,?,?,?,?,?,?)";


$stmt=$conn->prepare($sql);

$stmt->bind_param(
    "sssssss",
    $full_name,
    $phone,
    $email,
    $date,
    $doctor,
    $time,
    $message,
);

if($stmt->execute()){
    echo json_encode([
        "success"=>true,
        "message"=>"Appointment booked successfully"
    ]);
}
else{
    echo json_encode([
        "success"=>false,
        "message"=>"Something went wrong"
    ]);
}

$stmt->close();
$conn->close();



































