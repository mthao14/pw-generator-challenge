// Assignment code here

var length = prompt("Select length of password between 8-128 characters.");

window.alert(" You selected " + length + " characters. ");

var characterType = prompt("Enter at least 1 character type: lowercase, uppercase, numeric, special character (! @ # $ % * + - ?).");

window.alert("You selected " + characterType + " for your special character(s). ");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
document.querySelector('#generate.btn').addEventListener('click', generatedPassword);

function generatedPassword() {
  window.alert(" Your password is " + password " . ");
}



