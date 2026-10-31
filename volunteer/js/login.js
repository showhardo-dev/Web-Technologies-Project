// Login form - validation (messages shown with innerHTML only)

const form = document.querySelector("form");

// Use our own messages instead of the browser's default "required" popups
form.noValidate = true;

// A box under the form where all messages are shown
const messageBox = document.createElement("div");
messageBox.style.textAlign = "center";
form.after(messageBox);

// Regular expression for email format
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Check the inputs and return a list of error messages
function validateLogin() {
    const errors = [];

    const loginId = document.getElementById("loginid").value.trim();
    const password = document.getElementById("password").value;
    const category = document.getElementById("category"); // only checked if the page has it

    // Volunteer ID / Email
    if (loginId === "") {
        errors.push("Volunteer ID or email cannot be empty");
    } else if (loginId.includes("@") && !emailPattern.test(loginId)) {
        errors.push("Enter a valid email address");
    }

    // Password
    if (password === "") {
        errors.push("Password cannot be empty");
    } else if (password.length < 6) {
        errors.push("Password must contain at least 6 characters");
    }

    // User category
    if (category !== null && category.value === "") {
        errors.push("Please select a user category");
    }

    return errors;
}

// Submit event: stop the form if there is any error
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const errors = validateLogin();

    if (errors.length === 0) {
        messageBox.innerHTML = "<p style='color:#1b5e20; font-weight:bold'>Login Successful!</p>";
    } else {
        messageBox.innerHTML = "<p style='color:#c62828; font-weight:bold'>" + errors.join("<br>") + "</p>";
    }
});

// Change event: remove the old message when the user edits a field
form.addEventListener("change", function () {
    messageBox.innerHTML = "";
});