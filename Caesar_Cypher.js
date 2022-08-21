// YOUR CODE BELOW

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