<?php
include "../conexao.php";
header("Acesso-Controle-Permitir-Origem: *");
$query = "SELECT id, modulo1, modulo2, modulo3, modulo4, modulo5, modulo6, final FROM avaqce_datas";
$resultado = $conn->query($query);
if ($resultado->num_rows > 0) {
    while($row = $resultado->fetch_assoc()) {
        $dados[] = [
            'id' => $row["id"],
            'modulo1' => $row["modulo1"],
            'modulo2' => $row["modulo2"],
            'modulo3' => $row["modulo3"],
            'modulo4' => $row["modulo4"],
            'modulo5' => $row["modulo5"],
            'modulo6' => $row["modulo6"],
            'final' => $row["final"]
        ];
    }
    $retorna = ['status' => true, 'dados' => $dados];
} else {
    $retorna = ['status' => false, 'msg' => "ERRO"];
}
echo json_encode($retorna);
