<?php
include "../conexao.php";
header("Acesso-Controle-Permitir-Origem: *");
$query = "SELECT id, aulas_mod1, aulas_mod2, aulas_mod3, aulas_mod4, aulas_mod5, aulas_mod6, exercicios_mod1, exercicios_mod2, exercicios_mod3, exercicios_mod4, exercicios_mod5, exercicios_mod6, provas_mod1, provas_mod2, provas_mod3, provas_mod4, provas_mod5, provas_mod6 FROM avaqce_datas";
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
