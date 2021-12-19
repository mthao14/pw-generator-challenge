// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
document.querySelector('#generate.btn').addEventListener('click', pwCriteria);

function pwCriteria() {
  window.alert("Select criteria for password");
}


