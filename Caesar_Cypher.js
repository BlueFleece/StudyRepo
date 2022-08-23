// Caesar Cypher
// A Caesar Cypher is a classic encryption technique favored by the ancient Romans.

// Define a function, caesarCypher, that accepts two arguments:

// secret (string) - the string we want to encrypt
// shift (num) - the number we want to rotate each letter in the string by
// caesarCypher should return an encrypted version of the string shifted by the number of letters supplied. For example, the string 'abc' shifted by 2 should return 'cde'. Spaces between words should not be rotated. Note that any shifts that exceed the end of the alphabet should wrap around. For example, the string 'xyz' shifted by 2 should return 'zab', the string 'hello' shifted by 13 should return 'urryb'.

// You can assume the shift number will be a positive integer. Additionally, you may assume that the secret string will be entirely lower case

// caesarCypher('hello world', 13); // => 'uryyb jbeyq'

function caesarCypher(secret, shift) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var newString = '';
    for (let i = 0; i < secret.length; i++){
      var charIndex = alphabet.indexOf(secret[i]);
      if (secret[i] === ' '){
        newString += ' ';
      } else if (charIndex + shift > 25) {
          newString += alphabet[charIndex + shift - 26]
      } else if (charIndex >= 0) {
          newString += alphabet[charIndex + shift];
      }
    }
    return newString;
  }
  
  console.log(caesarCypher('hello', 13));
  
  describe('Caesar Cypher', () => {
  
    it('is a function?', () => {
      expect(typeof caesarCypher).toEqual('function');
    });
  
    it('rotates a letter by the number passed in', () => {
      let returnedValue = caesarCypher('a', 2);
      expect(returnedValue).toEqual('c');
    });
  
    it('rotates every letter in the string by the supplied letter', () => {
      let returnedValue = caesarCypher('doggo', 7);
      expect(returnedValue).toEqual('kvnnv');
    });
  
    it('wraps around to the beginning of the alphabet when necessary', () => {
      let returnedValue = caesarCypher('hello', 13);
      expect(returnedValue).toEqual('uryyb');
    });
  
    it('retains spaces between encrypter world', () => {
      let returnedValue = caesarCypher('hello world', 13);
      expect(returnedValue).toEqual('uryyb jbeyq');
    });
  
  });
