const registerButton = document.getElementById('register');
const loginButton = document.getElementById('login');
const container = document.getElementById('container');

if (registerButton && container) {
    registerButton.addEventListener('click', () => {
        container.classList.add('right-panel-active');
    });
}

if (loginButton && container) {
    loginButton.addEventListener('click', () => {
        container.classList.remove('right-panel-active');
    });
}