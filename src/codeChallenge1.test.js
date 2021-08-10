import { doubleNumbers, stringItUp, capitalizeNames, namesOnly, makeStrings } from './codeChallenge1.js';

test('doubles numbers', () => {
    const input = [2, 5, 100]; // arrange
    const output = doubleNumbers(input); // act
    expect(output).toEqual([4, 10, 200]); // assert
  });
  
  test('stringify numbers', () => {
      const input = [2, 5, 100];
      const output = stringItUp(input);
      expect(output).toEqual(["2", "5", "100"])
  })
  
//   test('capitalize names', () => {
//     const input = ["john", "JACOB", "jinGleHeimer", "schmidt"]
//     const output = capitalizeNames(input);
//     expect(output).toEqual(["John", "Jacob", "Jingleheimer", "Schmidt"])
//   })

test('returns a name only', () => {
    const input = [
        { name: "Angelina Jolie", age: 80 },
        { name: "Eric Jones", age: 2
        },
        { name: "Paris Hilton", age: 5 },
        { name: "Kayne West", age: 16 },
        { name: "Bob Ziroll", age: 100 }
    ]
    const output = namesOnly(input)
    expect(output).toEqual([
        "Angelina Jolie", 
        "Eric Jones", 
        "Paris Hilton", 
        "Kayne West", 
        "Bob Ziroll"
    ])
})
test('returns a string array', () => {
    const input = [
        { name: "Angelina Jolie", age: 80 },
        { name: "Eric Jones", age: 2
        },
        { name: "Paris Hilton", age: 5 },
        { name: "Kayne West", age: 16 },
        { name: "Bob Ziroll", age: 100 }
    ]
    const output = makeStrings(input)
    expect(output).toEqual([
        "Angelina Jolie can go to The Matrix", 
        "Eric Jones is under age!!", 
        "Paris Hilton is under age!!", 
        "Kayne West is under age!!", 
        "Bob Ziroll can go to The Matrix"
    ])
})