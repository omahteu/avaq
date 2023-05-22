<?php
include "../conexao.php";
header("Acesso-Controle-Permitir-Origem: *");
$query = "SELECT id, disciplina, url FROM avaqce_aulas";
$resultado = $conn->query($query);
if ($resultado->num_rows > 0) {
    while($row = $resultado->fetch_assoc()) {
        $dados[] = [
            'id' => $row["id"],
            'disciplina' => $row["disciplina"],
            'url' => $row["url"]
        ];
    }
    $retorna = ['status' => true, 'dados' => $dados];
} else {
    $retorna = ['status' => false, 'msg' => "ERRO"];
}
echo json_encode($retorna);
