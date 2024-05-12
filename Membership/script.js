function register() {
    var fullname = document.getElementById('fullname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // You can add your registration logic here, like sending data to server or storing in local storage
    
    alert("Registration successful! Welcome, " + fullname + "!");
}
