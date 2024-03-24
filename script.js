document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const message = document.getElementById('message');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (username.value === 'admin' && password.value === '123456') {
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