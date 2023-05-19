<?php
include "../conexao.php";

$hash = $_POST["hashemsg"];
$resp = $_POST["resp"];

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "UPDATE avaqce_chats SET resposta='$resp' WHERE hashe='$hash'";

if ($conn->query($sql) === TRUE) {
  echo "Record updated successfully";
} else {
  echo "Error updating record: " . $conn->error;
}

$conn->close();