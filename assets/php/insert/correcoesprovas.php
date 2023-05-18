<?php
include "../conexao.php";

$cd = $_POST["ha"];
$rm = $_POST["rm"];
$ds = $_POST["ds"];
$nt = $_POST["nota"];
$query = "insert into avaqce_correcoes_provas(cod, rm, disciplina, nota) values(?, ?, ?, ?)";

if ($conn->connect_error) {
    echo "$conn->connect_error";
    die("Connection Failed : " . $conn->connect_error);
} else {
    $stmt = $conn->prepare($query);
    $stmt->bind_param("ssss", $cd, $rm, $ds, $nt);
    $execval = $stmt->execute();
    $stmt->close();
    $conn->close();
}
