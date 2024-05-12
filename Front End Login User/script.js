function validateLogin() {
    var loginUsername = document.getElementById("loginUsername").value;
    var loginPassword = document.getElementById("loginPassword").value;

    // Simple validation examples
    if (loginUsername.trim() === "" || loginPassword.trim() === "") {
        alert("Please enter both username and password.");
        return false;
    }

    // Perform login logic (not implemented in this example)
    // If successful, you can redirect the user to another page

    alert("Login successful!");
    return false; // Prevent form submission for demonstration
{


    window.location.href ="/index.html";
}

   {
    alert("Invalid username or password. Please try again.");
   }

}

function validateRegistration() {
    var registerUsername = document.getElementById("registerUsername").value;
    var registerPassword = document.getElementById("registerPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Simple validation examples
    if (registerUsername.trim() === "" || registerPassword.trim() === "") {
        alert("Please enter both username and password.");
        return false;
    }

    if (registerPassword !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    // Perform registration logic (not implemented in this example)
    // If successful, you can show a success message or redirect the user to the login form

    alert("Registration successful! Please log in.");
    showLoginForm(); // Show the login form after registration
    return false; // Prevent form submission for demonstration
}

function showRegistrationForm() {
    document.getElementById("loginFormContainer").classList.add("hidden");
    document.getElementById("registrationFormContainer").classList.remove("hidden");
}

function showLoginForm() {
    document.getElementById("registrationFormContainer").classList.add("hidden");
    document.getElementById("loginFormContainer").classList.remove("hidden");
}