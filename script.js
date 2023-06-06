// Get the necessary elements from the DOM
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const passwordOutput = document.getElementById("passwordOutput");

// Add click event listener to the generate button
generateBtn.addEventListener("click", function() {
  const passwordLength = document.getElementById("passwordLength").value;
  const generatedPassword = generatePassword(passwordLength);
  passwordOutput.value = generatedPassword;
});

// Add click event listener to the copy button
copyBtn.addEventListener("click", function() {
  passwordOutput.select();
  document.execCommand("copy");
});

// Function to generate a random password
function generatePassword(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }
  return password;
}
