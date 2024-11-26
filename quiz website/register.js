// Function to validate the registration form
function validateRegisterForm(event) {
    event.preventDefault();  // Prevent form submission if validation fails

    // Get form field values
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    // Get the error message elements
    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    // Clear previous error messages
    usernameError.style.visibility = 'hidden';
    emailError.style.visibility = 'hidden';
    passwordError.style.visibility = 'hidden';
    confirmPasswordError.style.visibility = 'hidden';

    let isValid = true;

    // Validate username
    if (username === '') {
        usernameError.textContent = 'Username is required.';
        usernameError.style.visibility = 'visible';
        isValid = false;
    }

    // Validate email
    if (email === '') {
        emailError.textContent = 'Email is required.';
        emailError.style.visibility = 'visible';
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        emailError.style.visibility = 'visible';
        isValid = false;
    }

    // Validate password (at least 6 characters)
    if (password === '') {
        passwordError.textContent = 'Password is required.';
        passwordError.style.visibility = 'visible';
        isValid = false;
    } else if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters.';
        passwordError.style.visibility = 'visible';
        isValid = false;
    }

    // Validate confirm password
    if (confirmPassword === '') {
        confirmPasswordError.textContent = 'Please confirm your password.';
        confirmPasswordError.style.visibility = 'visible';
        isValid = false;
    } else if (confirmPassword !== password) {
        confirmPasswordError.textContent = 'Passwords do not match.';
        confirmPasswordError.style.visibility = 'visible';
        isValid = false;
    }

    // If everything is valid, submit the form
    if (isValid) {
        document.getElementById('registerForm').submit();
    }
}

// Real-time validation for each input field
document.getElementById('username').addEventListener('input', function() {
    const username = this.value.trim();
    const usernameError = document.getElementById('usernameError');
    if (username !== '') {
        usernameError.style.visibility = 'hidden';
    }
});

document.getElementById('email').addEventListener('input', function() {
    const email = this.value.trim();
    const emailError = document.getElementById('emailError');
    if (email !== '') {
        emailError.style.visibility = 'hidden';
    }
});

document.getElementById('password').addEventListener('input', function() {
    const password = this.value.trim();
    const passwordError = document.getElementById('passwordError');
    if (password !== '') {
        passwordError.style.visibility = 'hidden';
    }
});

document.getElementById('confirmPassword').addEventListener('input', function() {
    const confirmPassword = this.value.trim();
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    if (confirmPassword !== '') {
        confirmPasswordError.style.visibility = 'hidden';
    }
});
//For submit button to redirect to quiz page

// JavaScript to handle form submission and redirection
const loginForm = document.getElementById('registerForm');
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting the traditional way

    // Redirect to the dashboard after "successful" login (example)
    window.location.href = 'homepage.html';  // Change this to your desired page
});

