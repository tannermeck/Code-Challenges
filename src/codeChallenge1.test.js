import { doubleNumbers } from './codeChallenge1.js';

test('doubles numbers', () => {
    const input = [2, 5, 100]; // arrange
    const output = doubleNumbers(input); // act
    expect(output).toEqual([4, 10, 200]); // assert
  });
  