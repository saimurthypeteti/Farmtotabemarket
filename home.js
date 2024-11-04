// Check if the user is logged in
if (localStorage.getItem("loggedIn") !== "true") {
    // If not logged in, redirect to login page
    window.location.href = "login.html";
}

// Optionally display the user's name
var loggedInUser = localStorage.getItem("loggedInUser");
if (loggedInUser) {
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("welcomeMessage").innerText = "Welcome, " + loggedInUser + "!";
    });
}