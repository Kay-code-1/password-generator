var numChoice, upperCaseChoice, lowerCaseChoice, specialCharChoice;

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

// Create a function that prompts the user for the password options
function getUserOptions() {
  // Create a var to store the length of password from the user input (look up parseInt())

  var passLength = parseInt(prompt("Enter Password length."));
  console.log(passLength);

  // create a conditional statement to check if the lenght is an actual number 8 Eight
  // create a conditional to check if PW lenght is atleast 8 char long
  // create a conditional to check if PW lenght is lower than 128 chars

  if (passLength < 8 || passLength > 128) {
    alert("Please enter a value between 8 and 128!");
    return null;
  } else {
    numChoice = confirm("Do you want Numbers in password");
    upperCaseChoice = confirm("Do you want Upper Case letters in password");
    lowerCaseChoice = confirm("Do you want Lower Case letters in password");
    specialCharChoice = confirm("Do you want Special Characters in password");
    console.log(numChoice, upperCaseChoice, lowerCaseChoice, specialCharChoice);
    return {
      numChoice: numChoice,
      upperCaseChoice: upperCaseChoice,
      lowerCaseChoice: lowerCaseChoice,
      specialCharChoice: specialCharChoice,
      passLength: passLength,
    };
  }
}

// Create 4 different condinal statements to store if user password is going to use special chars , numbers, lower and upper

// create a conditional statment to check if user included some type of character

// Create a variable to store the user input

// create object to store user input

// var passOptions = {
//   passLength: passLength,
//   specialChars,
//   numericalChars,
//   lowerCase,
//   upperCase,
// };

// return out passOptions

//}end function

// Function for getting a random element from an array
// check out math.random

function randomize(max) {
  return Math.floor(Math.random() * max);
}

// function to generate a password with out user input
function generatePassword() {
  // create a variable and call our function so we can use data from the previous function.
  var userOptions = getUserOptions();
  if (userOptions === null) {
    return "";
  }

  let userPosChars = [];
  const tmpPwd = [];

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
    for (let i = 0; i < userOptions.passLength; i++) {
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
  }
  
  return tmpPwd.join("");
}

// create a variable to store password
// var results = []

// array to store the types of characters to include in our password
// var userPosChars = []

// array to contain atleast one of each chosen type of characters to make sure atleast one of every character is being used (validation)
// var guarChar = []

// create conditonal statements that add the array of characters into an array of possibloe characters based on our users input
// need to push our new random characters to the guarenteed characters (look up .concat())

// if (userOptions.specialCharacers){
// take chars and concat
// take characters and push(randomizationfunction(specialCharacter)) (AFTER WE RANDOMIZE)
// create conditonal statements that add the array of characters into an array of possibloe characters based on our users input
// need to push our new random characters to the guarenteed characters (look up .concat())

// create conditonal statements that add the array of characters into an array of possibloe characters based on our users input
// need to push our new random characters to the guarenteed characters (look up .concat())

// create conditonal statements that add the array of characters into an array of possibloe characters based on our users input
// need to push our new random characters to the guarenteed characters (look up .concat())

// create a for loop to pluck out random options object and grabing random characters from the array of possible characters and concat them into the results variable

// create another forloop to guarante atleast one character from each possible characters in the rusults

// Take the result look up join() and turn it into a string
//}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
