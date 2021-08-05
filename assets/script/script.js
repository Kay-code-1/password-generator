// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  function generatePassword() {
    var passwd = '';
    var pwdLength = 0;
    var tmpPwd = [];

    pwdLength = prompt("Enter password length!");
    if (pwdLength < 8 || pwdLength > 128) {
      alert("Password length should be between 8 and 128 characters.");
    } else {
        for(let i=0; i < pwdLength; i++) {
          let n = Math.floor(Math.random()*10);
          tmpPwd.push(n.toString());
        }
        passwd = tmpPwd.join('');
    } 
    return passwd;
  }

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
