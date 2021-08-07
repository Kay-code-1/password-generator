var numChoice, upperCaseChoice, lowerCaseChoice, specialCharChoice;
var userOptions, passLength;

// Array of special characters
var specialChars = [
  "/",
  "[",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "_",
  "+",
  "-",
];

// Array of numerical characters
var numericalChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Array of lowerCase characters (look up .split())
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of upperCase characters (look up .split())
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

//Function to get options from users to generate password: Length and choice of Numbers, Letters and Special characters

function getUserOptions() {
  //variable to store password length

  var passLength = parseInt(prompt("Enter Password length."));
  console.log("Password length is: " + passLength);

  // Validation to enter numbers only from 8 -128 for password length

  if (isNaN(passLength)) {
    alert("Enter a number only for password length!");
    return null;
  } else if (passLength < 8 || passLength > 128) {
    alert("Please enter a value between 8 and 128!");
    return null;
  } else {
    alert("Generating password: Please choose from following options!");

    // Variables to store choices for user password: special chars , numbers, lower and upper

    numChoice = confirm("Do you want Numbers in password");
    upperCaseChoice = confirm("Do you want Upper Case letters in password");
    lowerCaseChoice = confirm("Do you want Lower Case letters in password");
    specialCharChoice = confirm("Do you want Special Characters in password");
    console.log(
      "Choice of Num upper lower special chars: " + numChoice,
      upperCaseChoice,
      lowerCaseChoice,
      specialCharChoice
    );
    return {
      numChoice: numChoice,
      upperCaseChoice: upperCaseChoice,
      lowerCaseChoice: lowerCaseChoice,
      specialCharChoice: specialCharChoice,
      passLength: passLength,
    };
  }
}

//Object to store user choices

var passOptions = {
  passLength: passLength,
  numChoice: numChoice,
  upperCaseChoice: upperCaseChoice,
  lowerCaseChoice: lowerCaseChoice,
  specialCharChoice: specialCharChoice,
};

//Function to choose random characters from an array

function randomize(max) {
  return Math.floor(Math.random() * max);
}

// function to generate a password

function generatePassword() {
  var userOptions = getUserOptions();

  //Condition to check if user has selected some options for password generation

  if (userOptions === null) {
    return "";
  }

  // Arrays for Temporary password and possible characters

  let userPosChars = [];
  const tmpPwd = [];
  let choiceCount = 0,
    fixedChar = 0;

  if (userOptions.specialCharChoice) {
    choiceCount++;
  }

  if (userOptions.numChoice) {
    choiceCount++;
  }

  if (userOptions.lowerCaseChoice) {
    choiceCount++;
  }

  if (userOptions.upperCaseChoice) {
    choiceCount++;
  }

  fixedChar = choiceCount > 2 ? choiceCount : 0;

  //Validation to ensure user selects atleast one option for password generation

  if (
    !userOptions.specialCharChoice &&
    !userOptions.numChoice &&
    !userOptions.upperCaseChoice &&
    !userOptions.lowerCaseChoice
  ) {
    alert(
      "Please select atleast one choice among Number, Letters and Special Characters!"
    );
  } else {
    //Generate possible characters array
    for (let i = 0; i < userOptions.passLength - fixedChar; i++) {
      if (userOptions.specialCharChoice) {
        userPosChars.push(specialChars[randomize(specialChars.length)]);
      }
      if (userOptions.numChoice) {
        userPosChars.push(
          numericalChars[randomize(numericalChars.length)].toString()
        );
      }
      if (userOptions.upperCaseChoice) {
        userPosChars.push(upperCase[randomize(upperCase.length)]);
      }
      if (userOptions.lowerCaseChoice) {
        userPosChars.push(lowerCase[randomize(lowerCase.length)]);
      }
      tmpPwd.push(userPosChars[randomize(userPosChars.length)]);
      userPosChars.splice(0, userPosChars.length);
    }

    console.log("Tmp Password is: " + tmpPwd);

    //Generate a fixed characters array based on user choices

    if (fixedChar > 2) {
      if (userOptions.specialCharChoice) {
        tmpPwd.push(specialChars[randomize(specialChars.length)]);
      }
      if (userOptions.numChoice) {
        tmpPwd.push(
          numericalChars[randomize(numericalChars.length)].toString()
        );
      }
      if (userOptions.upperCaseChoice) {
        tmpPwd.push(upperCase[randomize(upperCase.length)]);
      }
      if (userOptions.lowerCaseChoice) {
        tmpPwd.push(lowerCase[randomize(lowerCase.length)]);
      }
    }

    console.log("Tmp Password after is: " + tmpPwd);
  }

  return tmpPwd.join("");
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
