import { leastToGreatest, greatestToLeast } from './array-sort.js'

test('sort from least to greatest', () => {
    const input = [1, 3, 5, 2, 90, 20]; // arrange
    const output = leastToGreatest(input); // act
    expect(output).toEqual([1, 2, 3, 5, 20, 90]); // assert
  }); 
test('sort from greatest to least', () => {
    const input = [1, 3, 5, 2, 90, 20]; // arrange
    const output = greatestToLeast(input); // act
    expect(output).toEqual([90, 20, 5, 3, 2, 1]); // assert
  }); 