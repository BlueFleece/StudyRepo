function convertToRoman(num) {
  let obj = {
    "M" : 1000,
    "CM" : 900,
    "D" : 500,
    "CD" : 400,
    "C" : 100,
    "XC" : 90,
    "L" : 50,
    "XL" : 40,
    "X" : 10,
    "IX" : 9,
    "V" : 5,
    "IV" : 4,
    "I" : 1
  }
  const swapped = Object.entries(obj).map(
    ([key, value]) => [value, key]
  );
  
  let arr = [];
  while (num > 0) {
    for (let i = 0; i < swapped.length; i++){
      let value = parseInt(swapped[i][0])
      let numeral = swapped[i][1]
      if (value <= num){
        num -= value;
        arr.push(numeral);
        i = 0;
        break;
      }
    }
  }
  return arr.join("");
}
