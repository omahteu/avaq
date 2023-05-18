<?php
include "../conexao.php";
header("Acesso-Controle-Permitir-Origem: *");
$query = "SELECT id, cod, rm, disciplina, capitulo, nota FROM avaqce_correcoesa";
$resultado = $conn->query($query);
if ($resultado->num_rows > 0) {
    while($row = $resultado->fetch_assoc()) {
        $dados[] = [
            'id' => $row["id"],
            'cod' => $row["cod"],
            'rm' => $row["rm"],
            'disciplina' => $row["disciplina"],
            'capitulo' => $row["capitulo"],
            'nota' => $row["nota"]
        ];
    }
    $retorna = ['status' => true, 'dados' => $dados];
} else {
    $retorna = ['status' => false, 'msg' => "ERRO"];
}
echo json_encode($retorna);
