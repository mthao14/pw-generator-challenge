// Assignment code here


// prompts that pop up to create password

// length prompt & confirmation
var length = prompt("Select length of password between 8-128 characters.");

if (length > 8 && length < 128) {
  window.alert(" You selected " + length + " characters. ");

} else { 
  window.alert("Please enter value between 8-128 for characters.");
}

// special character prompt & confirmation
var characterType = prompt("Enter at least 1 character type for password: lowercase, uppercase, numeric, special character (! @ # $ % * + - ?).");

window.alert("You selected " + characterType + " for your special character(s). ");


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function declaration
function writePassword(max,min) {
  var passwordChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#@!%&()/";
  var randPwLen = Math.floor(Math.random() * (max - min + 1)) + min;
  var randPassword = Array(randPwLen).fill(passwordChars).map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
  return randPassword;
}
  
  var passwordText = document.querySelector("#password");

  passwordText.value = writePassword;

// Add event listener to generate button
document.querySelector('#generate.btn').addEventListener('click', writePassword);


function writePassword() {
  window.alert(" Your password is " + password + " . ");
}




