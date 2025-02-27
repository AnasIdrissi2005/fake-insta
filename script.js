// script.js

// Toggle password visibility
document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordInput = document.getElementById('password');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

    // Change eye icon when clicked
    this.classList.toggle('fa-eye-slash');
});

// Handle form submission
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessageBox = document.getElementById('errorMessageBox');

    // Clear previous error messages
    errorMessageBox.textContent = '';
    errorMessageBox.classList.remove('show');

    if (!username || !password) {
        errorMessageBox.textContent = "Veuillez remplir tous les champs.";
        errorMessageBox.classList.add('show');
        return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(username) && !/^\d+$/.test(username)) {
        errorMessageBox.textContent = "Le format du téléphone ou de l'e-mail est incorrect.";
        errorMessageBox.classList.add('show');
        return;
    }

    // Password length validation
    if (password.length < 8) {
        errorMessageBox.textContent = "La mot de passe doit contenir au moins 8 caractères.";
        errorMessageBox.classList.add('show');
        return;
    }

    // Display account not found message
    errorMessageBox.textContent = `Compte introuvable\nNous ne trouvons pas de compte lié à ${username}. Essayez un autre numéro de téléphone ou une autre adresse e-mail. Si vous n'avez pas de compte Instagram, vous pouvez vous inscrire.`;
    errorMessageBox.classList.add('show');
});

// Signup link click handler
document.getElementById('signupLink').addEventListener('click', function (event) {
    event.preventDefault();
    alert("Cliquez ici pour s'inscrire !");
});