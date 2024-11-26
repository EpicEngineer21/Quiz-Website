// Function to validate the login form
function validateForm(event) {
    // Prevent form submission if validation fails
    event.preventDefault();
    
    // Get the form values
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    
    // Get the error message elements
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');
    
    // Clear previous error messages
    usernameError.style.visibility = 'hidden';
    passwordError.style.visibility = 'hidden';
    
    let isValid = true;

    // Validate username
    if (username === '') {
        usernameError.textContent = 'Username is required.';
        usernameError.style.visibility = 'visible';
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

    // If everything is valid, submit the form
    if (isValid) {
        // Redirect to the quiz page after successful validation
        window.location.href = 'quiz.html';  // Change this to your desired page
    }
}

// Attach the validation to the form
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', function(event) {
    validateForm(event);  // Call the validateForm function when form is submitted
});
