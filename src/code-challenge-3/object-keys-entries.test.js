import { multiplyNumberToPower, capitalizeObjectKeys, getArrayOfKeysAndValues, getFilteredKey, sortedArraysByValuesLength, sortKeys, isUpperCase } from './object-keys-entries.js';

test.skip('it capitalizes the keys', () => {
  const dataObject = { name: 'Angelina Jolie', age: 80 }; //arrange
  const output = capitalizeObjectKeys(dataObject); //act
  expect(output).toEqual(['NAME', 'AGE']); //assert
});
test.skip('will sort the keys', () => {
  const dataObject = { name: 'Spot', age: 3, isDog: true, friends: ['Rover', 'Steve', 'Fluffy'] }; //arrange
  const output = sortKeys(dataObject); //act
  expect(output).toEqual(['age', 'name', 'isDog', 'friends']); //assert
});
test.skip('get filtered key', () => {
  const dataObject = { name: 'Angelina Jolie', isSpot: false, age: 80, } //arrange
  const output = getFilteredKey(dataObject); //act
  expect(output).toEqual(['age']); //assert
});
test.skip('get array of keys and values', () => {
  const dataObject = { name: 'Angelina Jolie', age: 80 } //arrange
  const output = getArrayOfKeysAndValues(dataObject); //act
  expect(output).toEqual([['name', 'Angelina Jolie'], ['age', 80]]); //assert
});
test.skip('sort arrays by values object', () => {
  const dataObject = { name: 'Bob', friend: 'Tom Hanks', location: 'Los Angeles' } //arrange
  const output = sortedArraysByValuesLength(dataObject); //act
  expect(output).toEqual([['location', 'Los Angeles'], ['friend', 'Tom Hanks'], ['name', 'Bob']]); //assert
});
test.skip('multiply the number by the power', () => {
  const dataObject = [3, 2]; //arrange
  const output = multiplyNumberToPower(dataObject); //act
  expect(output).toEqual(9); //assert
});
test.skip('is the string uppercase', () => {
  const dataObject = 'HELLO there'; //arrange
  const output = isUpperCase(dataObject); //act
  expect(output).toEqual(false); //assert
});