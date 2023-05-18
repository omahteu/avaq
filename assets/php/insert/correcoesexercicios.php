<?php
include "../conexao.php";

$cd = $_POST["ha"];
$rm = $_POST["rm"];
$ds = $_POST["ds"];
$cp = $_POST["cap"];
$nt = $_POST["nota"];
$query = "insert into avaqce_correcoesa(cod, rm, disciplina, capitulo, nota) values(?, ?, ?, ?, ?)";

if ($conn->connect_error) {
    echo "$conn->connect_error";
    die("Connection Failed : " . $conn->connect_error);
} else {
    $stmt = $conn->prepare($query);
    $stmt->bind_param("sssss", $cd, $rm, $ds, $cp, $nt);
    $execval = $stmt->execute();
    $stmt->close();
    $conn->close();
}
