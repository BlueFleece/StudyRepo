// Palindrome Checker
// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

// We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

// We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

function palindrome(str) {
  let arr = str.split(/[^a-zA-Z0-9]/g);
  let nStr = arr.filter(elem => elem !== "").join("").toLowerCase();
  let rStr = nStr.split("").reverse().join("");
  if (nStr === rStr) {
    return true;
  } else {
    return false;
  }
  
}

// Is Palindrome
// A palindrome is a word that is spelled the same forwards and backwards. For example, "LEVEL", "RACECAR", and "KAYAK" are all palindromes, while "MOTOR", "RUDDER", and "DOGGED" are not palidromes.

// Write a recursive function, isPalindrome, to check if a string is a palindrome. Return true if the string is a palindrome; otherwise, return false.

// isPalindrome('Kayak'); // => true
// isPalindrome('NEVERODDOREVEN'); // => true
// isPalindrome('Tacocat'); // => true
// isPalindrome('SELFLESS'); // => false

function reverseStr(str){
  if (str.length === 0){
    return '';
  } else {
    return str[str.length - 1] + reverseStr(str.slice(0, str.length - 1));
  }
}

function isPalindrome(str){
  if (reverseStr(str).toLowerCase() === str.toLowerCase()){
    return true;
  } else {
    return false;
  }
}

