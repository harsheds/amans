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

function copyToClipboard() {
    var passwordOutput = document.getElementById('passwordOutput');
    passwordOutput.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
}

document.getElementById('generateBtn').addEventListener('click', function () {
    var passwordOutput = document.getElementById('passwordOutput');
    passwordOutput.value = generatePassword();
});

document.getElementById('copyBtn').addEventListener('click', copyToClipboard);
