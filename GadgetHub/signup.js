document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const repeatPassword = document.getElementById("psw-repeat").value;
    if(!email || !password || !repeatPassword) {
        alert("Please fill in all fields.");
        return;
    }
    if(password !== repeatPassword) {
        alert("Passwords do not match.");
        return;
    }
    if(password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
  }
  if(!/[A-Za-z]/.test(password)) {
        alert("Password must contain at least one letter.");
        return;
    }
  if(!/[!@#$%^&*_]/.test(password)) {
        alert("Password must contain at least one special character.");
        return;
    }
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Email must be a valid email address.");
        return;
    }

  localStorage.setItem("currentUser", JSON.stringify({ email }));
    window.location.href = "index.html"; // Redirect to login page after successful signup
})
