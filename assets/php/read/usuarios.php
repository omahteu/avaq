<?php
include "../conexao.php";
header("Acesso-Controle-Permitir-Origem: *");
$query = "SELECT id, usuario, nome, senha, tipo, disciplina FROM avaqce_usuarios";
$resultado = $conn->query($query);
if ($resultado->num_rows > 0) {
    while($row = $resultado->fetch_assoc()) {
        $dados[] = [
            'id' => $row["id"],
            'usuario' => $row["usuario"],
            'nome' => $row["nome"],
            'senha' => $row["senha"],
            'tipo' => $row["tipo"],
            'disciplina' => $row["disciplina"]
        ];
    }
    $retorna = ['status' => true, 'dados' => $dados];
} else {
    $retorna = ['status' => false, 'msg' => "ERRO"];
}
echo json_encode($retorna);
