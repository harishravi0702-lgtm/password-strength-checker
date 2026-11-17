let password = document.getElementById("password");
let strength = document.getElementById("strength");
let strengthText = document.getElementById("strengthText");

password.addEventListener("input", function () {
let value = password.value;
let score = 0;

// Check password conditions
if (value.length >= 8) {
    score++;
}

if (/[A-Z]/.test(value)) {
    score++;
}

if (/[a-z]/.test(value)) {
    score++;
}

if (/[0-9]/.test(value)) {
    score++;
}

if (/[@$!%*?&]/.test(value)) {
    score++;
}

// Update strength bar
if (value.length === 0) {
    strength.style.width = "0%";
    strength.style.backgroundColor = "transparent";
    strengthText.textContent = "Password strength: ";
}
else if (score <= 2) {
    strength.style.width = "25%";
    strength.style.backgroundColor = "#ff4d4d";
    strengthText.textContent = "Password strength: Weak";
}
else if (score === 3) {
    strength.style.width = "50%";
    strength.style.backgroundColor = "#ffa500";
    strengthText.textContent = "Password strength: Medium";
}
else if (score === 4) {
    strength.style.width = "75%";
    strength.style.backgroundColor = "#2ecc71";
    strengthText.textContent = "Password strength: Strong";
}
else {
    strength.style.width = "100%";
    strength.style.backgroundColor = "#27ae60";
    strengthText.textContent = "Password strength: Very Strong";
}
});
