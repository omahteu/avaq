<?php
include "../conexao.php";

$cd = $_POST["hash"];
$ds = $_POST["disciplina"];
$rm = $_POST["aluno"];
$cp = $_POST["capi"];
$q1 = $_POST["q1"];
$q2 = $_POST["q2"];
$q3 = $_POST["q3"];
$q4 = $_POST["q4"];
$q5 = $_POST["q5"];
$q6 = $_POST["q6"];
$q7 = $_POST["q7"];
$q8 = $_POST["q8"];
$q9 = $_POST["q9"];
$q10 = $_POST["q10"];
$query = "insert into avaqce_respostas(cod, rm, disciplina, capitulo, um, dois, tres, quatro, cinco, seis, sete, oito, nove, dez) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

if ($conn->connect_error) {
    echo "$conn->connect_error";
    die("Connection Failed : " . $conn->connect_error);
} else {
    $stmt = $conn->prepare($query);
    $stmt->bind_param("ssssssssssssss", $cd, $rm, $ds, $cp,$q1, $q2, $q3, $q4, $q5, $q6, $q7, $q8, $q9, $q10);
    $execval = $stmt->execute();
    $stmt->close();
    $conn->close();
}
