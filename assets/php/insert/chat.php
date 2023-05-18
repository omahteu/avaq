<?php
include "../conexao.php";

$hoje = date('d/m/Y');
$ds = $_POST["disciplinas"];
$ms = $_POST["mensagem"];
$query = "insert into avaqce_chats(data, disciplina, mensagem) values(?, ?, ?)";

if ($conn->connect_error) {
    echo "$conn->connect_error";
    die("Connection Failed : " . $conn->connect_error);
} else {
    $stmt = $conn->prepare($query);
    $stmt->bind_param("sss", $hoje, $ds, $ms);
    $execval = $stmt->execute();
    $stmt->close();
    $conn->close();
}
