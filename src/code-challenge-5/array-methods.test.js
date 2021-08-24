import { howMuchPencil, wordsToCharList, listFoods, stepActions, removeLastCharacter } from './array-methods';

 test.skip('It should return a list of shortening words', () => {
    expect(howMuchPencil('Welcome')).toStrictEqual(['Welcome', 'elcome', 'lcome', 'come', 'ome', 'me', 'e', '']);
    expect(howMuchPencil('Welcome').length).toStrictEqual(8);
    expect(howMuchPencil('')).toStrictEqual(['']);
    expect(howMuchPencil('abc')).toStrictEqual(['abc', 'bc', 'c', '']);
  });
 test.skip('returns words to characters', () => {
    expect(wordsToCharList('Gregor')).toStrictEqual(['G', 'r', 'e', 'g', 'o', 'r']);
    const name = 'Gregor';
    const nameLength = wordsToCharList(name);
    expect(nameLength.length).toEqual(6)
    expect(wordsToCharList('hooray')).toStrictEqual(['h', 'o', 'o', 'r', 'a', 'y']);
    expect(wordsToCharList('')).toStrictEqual([]);
  });
  test.skip('return item list names', () => {
    const dataObject =  {
        name: 'How to make a Gruffalo Crumble',
        ingredients: [
          '1 medium-sized Gruffalo',
          '8 pounds oats',
          '2 pounds brown sugar',
          '4 pounds flour',
          '2 gallons pure maple syrup',
          '16 cups chopped nuts',
          '1 pound baking soda',
          '1 pound baking powder',
          '1 pound cinnamon',
          '6 gallons melted butter',
          '2 gallons fresh water',
        ],
        steps: [
          'Pre-heat a large oven to 375',
          'De-prickle the gruffalo',
          'Sprinkle with cinnamon, sugar, flour, and nuts',
          'Mix until evenly distributed',
          'Grease a 3-foot x 3-foot casserole dish',
          'Combine gruffalo compote with water to maintain moisture in the oven',
          'Fold together remaining ingredients to make the crisp',
          'Spread the crisp evenly over the gruffalo mixture',
          'Bake for 12-15 hours',
        ]
      }; //arrange
    const output = listFoods(dataObject); //act
    expect(output).toEqual(['Gruffalo', 'oats', 'brown sugar', 'flour', 'pure maple syrup', 'chopped nuts', 'baking soda', 'baking powder', 'cinnamon', 'melted butter', 'fresh water']); //assert
  });
  test.skip('return a list of steps', () => {
    const dataObject =  {
        name: 'How to make a Gruffalo Crumble',
        ingredients: [
          '1 medium-sized Gruffalo',
          '8 pounds oats',
          '2 pounds brown sugar',
          '4 pounds flour',
          '2 gallons pure maple syrup',
          '16 cups chopped nuts',
          '1 pound baking soda',
          '1 pound baking powder',
          '1 pound cinnamon',
          '6 gallons melted butter',
          '2 gallons fresh water',
        ],
        steps: [
          'Pre-heat a large oven to 375',
          'De-prickle the gruffalo',
          'Sprinkle with cinnamon, sugar, flour, and nuts',
          'Mix until evenly distributed',
          'Grease a 3-foot x 3-foot casserole dish',
          'Combine gruffalo compote with water to maintain moisture in the oven',
          'Fold together remaining ingredients to make the crisp',
          'Spread the crisp evenly over the gruffalo mixture',
          'Bake for 12-15 hours',
        ]
      }; //arrange
    const output = stepActions(dataObject); //act
    expect(output).toEqual(['Pre-heat', 'De-prickle', 'Sprinkle', 'Mix', 'Grease', 'Combine', 'Fold', 'Spread', 'Bake']); //assert
  });
  test.skip('returns characters removed', () => {
    expect(removeLastCharacter('Gregor', 2)).toStrictEqual('Greg');
    expect(removeLastCharacter('hello', -1)).toStrictEqual('hello');
    expect(removeLastCharacter('wowow', -700)).toStrictEqual('wowow');
    expect(removeLastCharacter('hello', 12)).toStrictEqual('');
    expect(removeLastCharacter('', 1)).toStrictEqual('');
    expect(removeLastCharacter('a', 1)).toStrictEqual('');
  });