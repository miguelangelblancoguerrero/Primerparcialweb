document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('loginButton');

    loginButton.addEventListener('click', function() {
        const codigoEstudiante = document.getElementById('codigoEstudiante').value;
        const contraseña = document.getElementById('contraseña').value;

        const data = {
            codigoEstudiante: codigoEstudiante,
            contraseña: contraseña
        };

        // Realizar la solicitud POST
        fetch('https://24a0dac0-2579-4138-985c-bec2df4bdfcc-00-3unzo70c406dl.riker.replit.dev/login', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud.');
            }
            return response.json();
        })
        .then(userData => {
            // Almacenar los datos del usuario en localStorage
            localStorage.setItem('usuario', JSON.stringify(userData));
            // Redirigir a la página de inicio
            window.location.href = 'homepage.html';
        })
        .catch(error => {
            console.error('Error:', error);
            // Aquí puedes mostrar un mensaje de error al usuario si la solicitud falla
        });
    });
});