<?php
include "../conexao.php";
header("Acesso-Controle-Permitir-Origem: *");
$query = "SELECT id, rm, hashe, dia, disciplina, mensagem, resposta FROM avaqce_chats";
$resultado = $conn->query($query);
if ($resultado->num_rows > 0) {
    while($row = $resultado->fetch_assoc()) {
        $dados[] = [
            'id' => $row["id"],
            'rm' => $row["rm"],
            'hashe' => $row["hashe"],
            'dia' => $row["dia"],
            'disciplina' => $row["disciplina"],
            'mensagem' => $row["mensagem"],
            'resposta' => $row["resposta"]
        ];
    }
    $retorna = ['status' => true, 'dados' => $dados];
} else {
    $retorna = ['status' => false, 'msg' => "ERRO"];
}
echo json_encode($retorna);
