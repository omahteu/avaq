<?php
include "../conexao.php";

$hoje = date('d/m/Y');
$rm = $_POST["rm"];
$hs = $_POST["hash"];
$ds = $_POST["disciplinas"];
$ms = $_POST["mensagem"];
$rs = "";
$query = "insert into avaqce_chats(rm, hash, data, disciplina, mensagem, resposta) values(?, ?, ?, ?, ?, ?)";

if ($conn->connect_error) {
    echo "$conn->connect_error";
    die("Connection Failed : " . $conn->connect_error);
} else {
    $stmt = $conn->prepare($query);
    $stmt->bind_param("ssssss", $rm, $hs, $hoje, $ds, $ms, $rs);
    $execval = $stmt->execute();
    $stmt->close();
    $conn->close();
}
