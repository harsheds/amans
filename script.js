function generatePassword() {
    var length = parseInt(document.getElementById('passwordLength').value);
    var characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-=_+';

    var password = '';
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * characters.length);
        password += characters.charAt(randomIndex);
    }

    return password;
}

// external.js

// Get the copy button and password output element
const copyBtn = document.getElementById("copyBtn");
const passwordOutput = document.getElementById("passwordOutput");

// Add click event listener to the copy button
copyBtn.addEventListener("click", function() {
    passwordOutput.select();
    document.execCommand("copy");
});


document.getElementById('generateBtn').addEventListener('click', function () {
    var passwordOutput = document.getElementById('passwordOutput');
    passwordOutput.value = generatePassword();
});

document.getElementById('copyBtn').addEventListener('click', copyToClipboard);
