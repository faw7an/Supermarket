// Function to authenticate user
function authenticateUser(username, password) {
    // Retrieve users from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Find user with matching username and password
    const user = users.find(user => user.username === username && user.password === password);
    console.log(user);
    return user;
}

// Handle form submission
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Authenticate user
    const user = authenticateUser(username, password);

    // If user is authenticated, redirect to dashboard.html
    if (user) {
        alert('Login successful');
        window.location.href = 'index.html'; // Redirect to dashboard page
    } else {
      alert('Invalid username or password');
    }
});

