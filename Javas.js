function bookAppointment() {
    const appointmentDate = document.getElementById('appointmentDate').value;
    const cutType = document.getElementById('cutType').value;
    const barber = document.getElementById('barber').value;
    const trimType = document.getElementById('trimType').value;

    const appointment = {
        appointmentDate,
        cutType,
        barber,
        trimType
    };

    // Aquí puedes enviar la reserva de cita a tu servidor utilizando una solicitud HTTP POST
    // Por ejemplo, si estás utilizando la API Fetch de JavaScript:
    fetch('https://your-server-url.com/api/appointments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(appointment)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Cita reservada con éxito!');
            // Redirigir a la página de confirmación o realizar cualquier otra acción
        } else {
            alert('Error al reservar la cita. Por favor, inténtalo de nuevo.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error al reservar la cita. Por favor, inténtalo de nuevo.');
    });
}
