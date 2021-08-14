import { ofAge, peopleWhoBelongToTheIlluminati, evensOnly, fiveAndGreaterOnly, fiveCharactersOrFewerOnly } from './array-filter';

test.skip('Five and greater only', () => {
  const input = [3, 6, 8, 2]; // arrange
  const output = fiveAndGreaterOnly(input); // act
  expect(output).toEqual([6, 8]); // assert
});
test.skip('returns even numbers only', () => {
  const input = [3, 6, 8, 2]; // arrange
  const output = evensOnly(input); // act
  expect(output).toEqual([6, 8, 2]); // assert
});
test.skip('returns an object with 5 characters or less', () => {
  const input = ['by', 'dog', 'wolf', 'family', 'eaten', 'camping']; // arrange
  const output = fiveCharactersOrFewerOnly(input); // act
  expect(output).toEqual(['by', 'dog', 'wolf', 'eaten']); // assert
});
test.skip('returns people who belong to the illumanati only', () => {
  const input = [
    { name: 'Angelina Jolie', member: true },
    { name: 'Eric Jones', member: false },
    { name: 'Paris Hilton', member: true },
    { name: 'Kayne West', member: false },
    { name: 'Bob Ziroll', member: true }
  ]
  const output = peopleWhoBelongToTheIlluminati(input)
expect(output).toEqual([ 
  { name: 'Angelina Jolie', member: true }, 
  { name: 'Paris Hilton', member: true }, 
  { name: 'Bob Ziroll', member: true } 
])
})
test.skip('returns an array of people who are old enough to see the matrix', () => {
  const input = [
    { name: 'Angelina Jolie', age: 80 },
    { name: 'Eric Jones', age: 2 },
    { name: 'Paris Hilton', age: 5 },
    { name: 'Kayne West', age: 16 },
    { name: 'Bob Ziroll', age: 100 }
]; // arrange
  const output = ofAge(input); // act
  expect(output).toEqual([ 
    { name: 'Angelina Jolie', age: 80 },
    { name: 'Bob Ziroll', age: 100 } 
]); // assert
});
