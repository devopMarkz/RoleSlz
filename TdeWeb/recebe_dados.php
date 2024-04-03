<?php

$servername = "localhost";
$username = "root";
$password = "aluno";
$dbname = "marcos";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Erro ao conectar ao banco de dados: " . $conn->connect_error);
}

// Prepara os dados do formulário para inserção no banco de dados
$nomeDoEvento = $_POST['nomeDoEvento'];
$dataDoEvento = $_POST['dataDoEvento'];
$horaDoEvento = $_POST['horaDoEvento'];
$descricaoDoEvento = $_POST['descricaoDoEvento'];

// Prepara a consulta SQL para inserir os dados no banco de dados
$sql = "INSERT INTO eventos (nome, data, hora, descricao) VALUES ('$nomeDoEvento', '$dataDoEvento', '$horaDoEvento', '$descricaoDoEvento')";


// Executa a consulta
if ($conn->query($sql) === TRUE) {
    echo('<meta http-equiv="refresh" content="0;url=criarEvento.html">');
    echo "<script>alert('Formulário enviado com sucesso');</script>";
} else {
    echo "Erro ao inserir dados: " . $conn->error;
}

// Fecha a conexão com o banco de dados
$conn->close();
?>