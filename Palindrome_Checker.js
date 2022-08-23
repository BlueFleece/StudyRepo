//without recursion
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

//using recursion
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

