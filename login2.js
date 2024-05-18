document.addEventListener('DOMContentLoaded', function () {
        

const container = document.getElementById('container');
const loginBtn = document.getElementById('login');
const registerBtn = document.getElementById('register');

registerBtn.addEventListener('click', () => {
    container.classList.add("active")
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active")
});


// login js code

// Function to authenticate user
function authenticateUser(username, password, email) {
    // Retrieve users from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Find user with matching username and password
    const user = users.find(user => user.username === username && user.password === password && user.email === email);
    // console.log(user);
    return user;
}   
   
// Handle form submission
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get input values
    const username = document.getElementById('username-L').value;
    const password = document.getElementById('password-L').value;
    const email = document.getElementById('email-L').value;

    // Authenticate user
    const user = authenticateUser(username, password, email);

    // If user is authenticated, redirect to dashboard.html
    if (user) {
        alert('Login successful');
        window.location.href = 'home.html'; // Redirect to dashboard page
    } else {
      alert('Invalid username or password');
    }
});

// rediration after login error check

// Path: register.js

        // Function to register a new user
        function registerUser(username, email, password) {
            // Get existing users from local storage or initialize an empty array
            let users = JSON.parse(localStorage.getItem('users')) || []; 
            // this returns parse if true if false returns empty array  

            // Check if username or email already exists
            const existingUser = users.find(user => user.username === username || user.email === email);
            if (existingUser) {
                return { success: false, message: 'Username or email already exists' };
            }

            // Add new user to the users array
            users.push({ username, email, password });

            // Store updated users array back to local storage
            localStorage.setItem('users', JSON.stringify(users));

            return { success: true, message: 'User registered successfully' };
        }

        // Example usage:
        // registerUser('user123', 'user123@example.com', 'password123');

        let form = document.querySelector('#registerForm');
        form.addEventListener('submit', function (e
        ) {
            e.preventDefault();

            let username = document.querySelector('#username').value;
            let email = document.querySelector('#email').value;
            let pass = document.querySelector('#password').value;
            // let check = document.querySelector('#check').checked;
            let result = registerUser(username, email, pass);


            // if (check){
                if (result.success) {
                    alert(result.message);
                    container.classList.remove("active"); 
                } else {
                    alert(result.message);
                }
            // } else {
            //     alert("Please agree to the terms and conditions");
            // }

        })

    });