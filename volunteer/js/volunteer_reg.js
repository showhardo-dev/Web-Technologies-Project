const form = document.getElementById("regForm");
const clearBtn = document.getElementById("clearBtn");
const message = document.getElementById("form_message");
 
// Regular expressions
const namePattern = /^[A-Za-z ]+$/;                // letters and spaces only
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // abc@gmail.com
const phonePattern = /^01[3-9][0-9]{8}$/;          // 017XXXXXXXX (11 digits)
 
// Show an error under a field
function setError(id, text) {
    document.getElementById(id + "_error").innerHTML = text;
}
 
// Remove all error messages
function clearErrors() {
    const errors = document.getElementsByClassName("error-msg");
    for (let i = 0; i < errors.length; i++) {
        errors[i].innerHTML = "";
    }
    message.innerHTML = "";
}
 
// Check every input. Returns true only if there are no errors.
function validateForm() {
    clearErrors();
    let valid = true;
 
    // Values (variables)
    const name = document.getElementById("fullname").value.trim();
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirmpassword").value;
    const address = document.getElementById("address").value.trim();
    const days = document.querySelectorAll('input[name="days"]:checked');
    const startDate = document.getElementById("startdate").value;
    const ecName = document.getElementById("ecname").value.trim();
    const ecRelation = document.getElementById("ecrelation").value.trim();
    const ecPhone = document.getElementById("ecphone").value.trim();
    const agree = document.getElementById("agree").checked;
 
    // Today's date and the latest birth date allowed (16 years ago), as YYYY-MM-DD
    const today = new Date().toLocaleDateString("en-CA");
    const sixteenYearsAgo = new Date();
    sixteenYearsAgo.setFullYear(sixteenYearsAgo.getFullYear() - 16);
    const latestBirth = sixteenYearsAgo.toLocaleDateString("en-CA");
 
    // Name
    if (name === "") {
        setError("fullname", "Name cannot be empty");
        valid = false;
    } else if (!namePattern.test(name)) {
        setError("fullname", "Name should contain only letters");
        valid = false;
    }
 
    // Date of birth - UNIQUE RULE 1: must be at least 16 years old
    if (dob === "") {
        setError("dob", "Date of birth cannot be empty");
        valid = false;
    } else if (dob > latestBirth) {
        setError("dob", "You must be at least 16 years old to volunteer");
        valid = false;
    }
 
    // Gender
    if (gender === null) {
        setError("gender", "Please select a gender");
        valid = false;
    }
 
    // Email
    if (email === "") {
        setError("email", "Email cannot be empty");
        valid = false;
    } else if (!emailPattern.test(email)) {
        setError("email", "Enter a valid email address");
        valid = false;
    }
 
    // Phone
    if (phone === "") {
        setError("phone", "Phone number cannot be empty");
        valid = false;
    } else if (!phonePattern.test(phone)) {
        setError("phone", "Enter 11 digits only, like 017XXXXXXXX");
        valid = false;
    }
 
    // Password
    if (password === "") {
        setError("password", "Password cannot be empty");
        valid = false;
    } else if (password.length < 6 || !/[0-9]/.test(password)) {
        setError("password", "Password is too weak (minimum 6 characters and one number)");
        valid = false;
    }
 
    // Confirm password
    if (confirm === "") {
        setError("confirmpassword", "Please confirm your password");
        valid = false;
    } else if (confirm !== password) {
        setError("confirmpassword", "Passwords do not match");
        valid = false;
    }
 
    // Address
    if (address === "") {
        setError("address", "Address cannot be empty");
        valid = false;
    }
 
    // UNIQUE RULE 2: at least one available day
    if (days.length === 0) {
        setError("days", "Please select at least one available day");
        valid = false;
    }
 
    // UNIQUE RULE 3: Available From date cannot be in the past
    if (startDate === "") {
        setError("startdate", "Please select the date you are available from");
        valid = false;
    } else if (startDate < today) {
        setError("startdate", "Available From date cannot be in the past");
        valid = false;
    }
 
    // UNIQUE RULE 4: emergency contact name must contain only letters
    if (ecName === "") {
        setError("ecname", "Contact name cannot be empty");
        valid = false;
    } else if (!namePattern.test(ecName)) {
        setError("ecname", "Contact name should contain only letters");
        valid = false;
    }
 
    // Relationship
    if (ecRelation === "") {
        setError("ecrelation", "Relationship cannot be empty");
        valid = false;
    } else if (!namePattern.test(ecRelation)) {
        setError("ecrelation", "Relationship should contain only letters");
        valid = false;
    }
 
    // UNIQUE RULE 5: emergency phone must be valid and different from your own
    if (ecPhone === "") {
        setError("ecphone", "Contact phone cannot be empty");
        valid = false;
    } else if (!phonePattern.test(ecPhone)) {
        setError("ecphone", "Enter 11 digits only, like 017XXXXXXXX");
        valid = false;
    } else if (ecPhone === phone) {
        setError("ecphone", "Must be different from your own number");
        valid = false;
    }
 
    // Agreement
    if (!agree) {
        setError("agree", "You must agree to the volunteer guidelines");
        valid = false;
    }
 
    return valid;
}
 
// Submit event: stop the form if there is any error
form.addEventListener("submit", function (event) {
    event.preventDefault();
 
    if (validateForm()) {
        message.innerHTML = "<p class='success-msg'>Registration Successful!</p>";
        form.reset();
    } else {
        message.innerHTML = "<p class='form-error'>Please correct the errors above and try again.</p>";
    }
});
 
// Click event: Clear button removes all messages
clearBtn.addEventListener("click", clearErrors);
 
// Change event: remove a field's error once the user edits it
form.addEventListener("change", function (event) {
    const errorBox = document.getElementById(event.target.name + "_error");
    if (errorBox) {
        errorBox.innerHTML = "";
    }
});