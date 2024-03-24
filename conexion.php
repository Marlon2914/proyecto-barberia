<?php
$servername = "localhost"; // Nombre del servidor (por defecto, "localhost" si está en tu máquina local)
$username = "demo_user"; 
$password = "123456789";
$dbname = "corte_estilo_db";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Error al conectar a la base de datos: " . $conn->connect_error);
}

echo "Conexión exitosa a la base de datos";

class Database {
    private $servername;
    private $username;
    private $password;
    private $dbname;
    private $conn;

    public function __construct($servername, $username, $password, $dbname) {
        $this->servername = $servername;
        $this->username = $username;
        $this->password = $password;
        $this->dbname = $dbname;
    }

    public function connect() {
        $this->conn = new mysqli($this->servername, $this->username, $this->password, $this->dbname);

        if ($this->conn->connect_error) {
            die("Error al conectar a la base de datos: " . $this->conn->connect_error);
        }

        return $this->conn;
    }

    public function isConnected() {
        return $this->conn && $this->conn->ping();
    }
}

$servername = "localhost";
$username = "demo_user";
$password = "";
$dbname = "corte_estilo_db";

$database = new Database($servername, $username, $password, $dbname);
$conn = $database->connect();

if ($database->isConnected()) {
    echo "Conexión exitosa a la base de datos";
} else {
    echo "Error al conectar a la base de datos";
}
?>
