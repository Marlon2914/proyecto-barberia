import mysql from 'mysql';

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'demo_user',
  password: '123456789',
  database: 'corte_estilo_db'
});

// Conectarse a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos MySQL');
});

// Realizar una consulta
connection.query('SELECT * FROM tabla', (error, results, fields) => {
  if (error) throw error;
  console.log('Resultados de la consulta:', results);
});

// Cerrar la conexión
connection.end((err) => {
  if (err) {
    console.error('Error al cerrar la conexión:', err);
    return;
  }
  console.log('Conexión cerrada exitosamente');
});