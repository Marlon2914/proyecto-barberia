document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const message = document.getElementById('message');

    // Define múltiples usuarios con sus credenciales
    const users = [
        { username: 'admin', password: '123456' },
        { username: 'joel14', password: '123456' },
        { username: 'ranfis20', password: '123456' }
    ];

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Verificar si las credenciales coinciden con algún usuario
        const user = users.find(u => u.username === username.value && u.password === password.value);
        if (user) {
            message.textContent = '¡Inicio de sesión exitoso!';
            message.style.color = 'green';

            // Redirigir al usuario a la página principal
            window.location.href = 'index.html';
        } else {
            message.textContent = 'Usuario o contraseña incorrectos.';
            message.style.color = 'red';
        }

        message.style.display = 'block';

        setTimeout(() => {
            message.style.display = 'none';
        }, 3000);
    });

    document.getElementById('forgotPassword').addEventListener('click', (e) => {
        e.preventDefault();
        console.log('¡Olvidaste tu contraseña!');
    });

    document.getElementById('register').addEventListener('click', (e) => {
        e.preventDefault();
        console.log('¡Regístrate!');
    });
});

const backButton = document.querySelector(".back-button");
backButton.addEventListener("click", function() {
    window.history.back();
});