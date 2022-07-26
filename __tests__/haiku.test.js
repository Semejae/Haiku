import ThreeLine from './../src/haiku.js';

describe('ThreeLine', () => { 
  
  test('should take lines of haiku.', () => {
    const inputLines = new ThreeLine ('You and me alone. Madness of world locked away. To the suns glory.');
    expect(inputLines.text).toEqual('You and me alone. Madness of world locked away. To the suns glory.');
  });

  test('input text must have three lines of haiku.', () => { 
    const inputLines = new ThreeLine ('You and me alone. Madness of world locked away. To the suns glory.');
    let text = inputLines.text;
    expect(inputLines.howManyLines(text)).toEqual(3);
  });

});

