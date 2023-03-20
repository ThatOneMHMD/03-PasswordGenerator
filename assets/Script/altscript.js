// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// My part starts here! One big function to generate the function!
function generatePassword() {

  // password criteria variables
  var length = prompt("How many characters would you like your password to contain?");

  // length restrictions
  if (length < 8 || length > 128 ) {
    alert("Password length must be between 8 and 128 characters.");
    return"";
  }

  var includeLowercase = confirm("Include lower case characters?");
  var includeUppercase = confirm("Include upper case characters?");
  var includeNumbers = confirm("Include numbers?");
  var includeSpecial = confirm("Include special characters?");

  // to make sure password is not empty, at least one type of characters must be selected!
  // NOTE: in the instructions, it says that prompts should be validated. This code belo is my idea of validating it. it works in a way that prevents the password from being empty when no character type is chosen.
  // Now, while I can make an alert after each confirm (ex alert("you have chosn to include this type of characters of whatever")) But this would be tiring for both me and the user of the app who would have to read all of that. That's why I think my idea of the instructions is best. I hope that is acceptable!
  if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecial) {
    alert("At least one type of characters must be included!");
    return"";
  }

  // Types of characters
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialChars = "#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var numericChars = "0123456789";

  // to start the setup for character options
  var charsOptions = "";
  var password = "";

  // if lowercase characetrs are selected, then add them to password at random positions (in random order)
  if (includeLowercase) {
    charsOptions += lowercaseChars
  }

  // if uppercase characetrs are selected, then add them to password at random positions (in random order)
  if (includeUppercase) {
    charsOptions += uppercaseChars
  }

  // if special characetrs are selected, then add them to password at random positions (in random order)
  if (includeSpecial) {
    charsOptions += specialChars
  }

  // if numeric values are selected, then add them to password at random positions (in random order)
  if (includeNumbers) {
    charsOptions += numericChars
  }

  // Now the real password is a mix random selected characters. The following lines will limit the overall length of it, matching it to the previous inputed length!
  for ( var i = 0; i < length; i++) {
    password += charsOptions.charAt(Math.floor(Math.random() * charsOptions.length));
  }

  // present the password!
  return password;
}
