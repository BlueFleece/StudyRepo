// Get Longest Name
// Write a function, getLongestName, that accepts an object as an argument. The object represents a family tree. Return the longest name in the family.

// let family = {
//   'Beverly Marquez': {
//     'Nina Rhone': {
//       'William Rhodes': null,
//       'Paul Nell': null,
//       'Sir Paddington the Fourth, of the county Wilstonshire': null
//     }
//   }
// };

// getLongestName(family); // => 'Sir Paddington the Fourth, of the county Wilstonshire'

function getLongestName(obj){
  let longestName = '';
  for (let key in obj){
    let value = obj[key];
    if (value){
      longestName = getLongestName(value);
    } 
    if (key.length > longestName.length) {
      longestName = key;
    } 
  }
  return longestName;
}

describe('getLongestName', () => {
  let family = {
    'Ludie Cook': {
      'Laura Montano': null,
      'John Drewry': {
        'Deborah Gore': null,
        'Beverly Marquez': {
          'Nina Rhone': {
            'William Rhodes': null,
            'Paul Nell': null,
            'Sir Paddington the Fourth, of the county Wilstonshire': null
          }
        }
      }
    }
  };

  it('is a function', () => {
    expect(typeof getLongestName).toEqual('function');
  });

  it('returns a string', () => {
    let returnedValue = getLongestName(family);
    expect(typeof returnedValue).toEqual('string');
  });

  it('returns the longest name in the family', () => {
    let returnedValue = getLongestName(family);
    expect(returnedValue).toEqual('Sir Paddington the Fourth, of the county Wilstonshire');
  });

});
