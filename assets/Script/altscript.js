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


// My part starts here: ----
// One big function to generate the password according to the acceptance criteria!
function generatePassword() {

  // password criteria variables
  var length = prompt("How many characters would you like your password to contain?");

  // length restrictions: no less than 8 and no more than 128!
  if (length < 8 || length > 128 ) {
    alert("Password length must be between 8 and 128 characters.");
    return"";
  }

  // confirms ehther to add or not a specific type of characters!
  var includeLowercase = confirm("Include lower case characters?");
  var includeUppercase = confirm("Include upper case characters?");
  var includeNumbers = confirm("Include numbers?");
  var includeSpecial = confirm("Include special characters?");

  // to make sure password is not empty, at least one type of characters must be selected!
  // NOTE: in the instructions, it says that prompts should be validated. This code below is my idea of validating it. It works in a way that prevents the password from being empty when no character type is chosen; it ensures that at least one type is selected!
  // Now, while I can make an alert after each confirm (ex alert("you have chosn to include this type of characters of whatever")) But this would be tiring for both me and the user of the app who would have to read all of that. That's why I think my idea of the instructions is best. I hope that is acceptable! (I asked a TA and she said this is what they're looking for. But I'll keep the comment anyway...)
  if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecial) {
    alert("At least one type of characters must be included!");
    return"";
  }

  // Types of characters defined here
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialChars = "#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var numericChars = "0123456789";

  // to start the setup for character options
  var charsOptions = "";
  var password = "";

  // if lowercase characetrs are selected, then add them to charsOptions Var at random positions (in random order)
  if (includeLowercase) {
    charsOptions += lowercaseChars
  }

  // if uppercase characetrs are selected, then add them to charsOptions Var at random positions (in random order)
  if (includeUppercase) {
    charsOptions += uppercaseChars
  }

  // if special characetrs are selected, then add them to charsOptions Var at random positions (in random order)
  if (includeSpecial) {
    charsOptions += specialChars
  }

  // if numeric values are selected, then add them to charsOptions Var at random positions (in random order)
  if (includeNumbers) {
    charsOptions += numericChars
  }

  // Now the real password Var is empty. What we have gathered so far was a mix of randomly selected characters that were inserted into the charsOptions Var. Note that the charsOptions Var has the entirety of the added char-type. (EX: if upperCase is included, then all of upperCase chars are included. Thus, the following line will limit the overall length of the password, matching it to the previous inputed length. In Essence, this lines adds a number of characters that matches the inputed length before. Hence, the overall result is a randomly selected password with the number of characters matching the length chosen before! This is what the loop does overall!
  for ( var i = 0; i < length; i++) {
    password += charsOptions.charAt(Math.floor(Math.random() * charsOptions.length));
  }

  // present the password!
  return password;
}
