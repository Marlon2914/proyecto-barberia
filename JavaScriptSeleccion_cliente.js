// Variables para almacenar la selección del cliente
var selectedCutType = "";
var selectedPrice = 0;

// Función para seleccionar el tipo de corte
function selectCutType(cutType, price) {
    // Almacenar la selección del cliente en las variables
    selectedCutType = cutType;
    selectedPrice = price;
    
    // Mostrar un mensaje de confirmación
    alert('Seleccionaste ' + selectedCutType + ' por $' + selectedPrice);
}

// Ejemplo de uso
selectCutType("Corte de cabello", 20); // Selecciona "Corte de cabello" por $20
