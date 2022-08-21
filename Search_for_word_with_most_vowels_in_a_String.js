
const mostVowels = (str) => {
  
    let checkVowels = (char) => {
      let vowels = 'aeiouAEIOU';
      if (vowels.indexOf(char) > 0){
        return true;
      }
      return false;
    }
    let currWord = ''
    let maxWord = ''
    let currCount = 0;
    let maxCount = 0;
    for (let i = 0; i < str.length; i++){
      let char = str[i];
      if (char !== " " && char !== str[str.length - 1]){ //stops before str.length - 1
        currWord += char;
        if (checkVowels(char)){
          currCount += 1;
        }
      } else {
        if (currCount > maxCount){
          maxCount = currCount;
          maxWord = currWord;
        }
        currCount = 0;
        currWord = '';
      }
    }
    return maxWord  
  }
  
  describe('mostVowels', () => {
  
    it('is a function', () => {
      expect(typeof mostVowels).toEqual('function');
    });
  
    it('returns a string', () => {
      let returnedValue = mostVowels('Wit beyond measure is man\'s greatest treasure.');
      expect(typeof returnedValue).toEqual('string');
    });
  
    it('returns the word with the most vowels', () => {
      let returnedValue = mostVowels('Wit beyond measure is man\'s greatest treasure.');
      expect(returnedValue).toEqual('measure');
    });
  
    it('returns the word with the most vowels even if it\'s the last string in the sentence', () => {
      let returnedValue = mostVowels('Give her hell from us, Peeves.');
      expect(returnedValue).toEqual('Peeves');
    });
  
    it('returns an empty string if none of the inputted words have vowels', () => {
      let returnedValue = mostVowels('why dry my sly lynx?');
      expect(returnedValue).toEqual('');
    });
  
  });
  