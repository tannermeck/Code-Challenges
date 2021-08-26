import {sortByChildren, containsW, isNum, containsWorld, isCapitalized, citiesAtoJ } from './code-challenge-13.js';

describe('Testing challenge 1', () => {
    test.skip('It should sort the characters by number of children', () => {
        let characters = [
            {
              name: 'Eddard',
              spouse: 'Catelyn',
              children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
              house: 'Stark'
            },
            {
              name: 'Jon A.',
              spouse: 'Lysa',
              children: ['Robin'],
              house: 'Arryn'
            },
            {
              name: 'Cersei',
              spouse: 'Robert',
              children: ['Joffrey', 'Myrcella', 'Tommen'],
              house: 'Lannister'
            },
            {
              name: 'Daenarys',
              spouse: 'Khal Drogo',
              children: ['Drogon', 'Rhaegal', 'Viserion'],
              house: 'Targaryen'
            },
            {
              name: 'Mace',
              spouse: 'Alerie',
              children: ['Margaery', 'Loras'],
              house: 'Tyrell'
            },
            {
              name: 'Euron',
              spouse: null,
              children: [],
              house: 'Greyjoy'
            },
            {
              name: 'Jon S.',
              spouse: null,
              children: [],
              house: 'Snow'
            }
          ];
      expect(sortByChildren(characters)[0].name).toStrictEqual('Euron');
      expect(sortByChildren(characters)[0].children.length).toStrictEqual(0);
    });
    test.skip('returns true or false if a word contains a w', () => {
        
      expect(containsW('hello world')).toStrictEqual(true);
      expect(containsW('Hello World')).toStrictEqual(false);
      expect(containsW('hello everyone')).toStrictEqual(false);
    });
    test.skip('returns true if the input contains a number', () => {
        
      expect(isNum(1234567890)).toStrictEqual(true);
      expect(isNum('12345')).toStrictEqual(true);
      expect(isNum('h3llo w0rld')).toStrictEqual(true);
      expect(isNum('hello world')).toStrictEqual(false);
      expect(isNum('')).toStrictEqual(false);
    });
    test.skip('returns true if the input contains world', () => {
        
      expect(containsWorld('hello world')).toStrictEqual(true);
      expect(containsWorld('Hello World')).toStrictEqual(false);
      expect(containsWorld('hello everyone')).toStrictEqual(false);
    });
    test.skip('returns all words that have capital letters', () => {
        
      expect(isCapitalized('We only want to Return the Words that begin With a capital Letter')).toStrictEqual([ 'We', 'Return', 'Words', 'With', 'Letter' ]);
      expect(isCapitalized('Given by our hand in the meadow that is called Runnymede, between Windsor and Staines, on the fifteenth day of June in the seventeenth year of our reign (i.e. 1215: the new regnal year began on 28 May).')).toStrictEqual(['Given', 'Runnymede', 'Windsor', 'Staines', 'June', 'May']);
      expect(isCapitalized('these words are all failures')).toStrictEqual([]);
      
    });
    test.skip('returns cities a to j', () => {
        
      expect(citiesAtoJ(['Cleveland', 'San Diego', 'Birmingham', 'Seattle', 'Miami', 'New York City', 'Omaha', 'Portland', 'Austin', 'Boston', 'Newport Beach', 'Hoboken'])).toStrictEqual(['Austin', 'Birmingham', 'Boston', 'Cleveland', 'Hoboken']);
      expect(citiesAtoJ(['Albuquerque', 'Chicago', 'Philadelphia', 'Newark', 'Sacramento', 'Eugene'])).toStrictEqual(['Albuquerque', 'Chicago', 'Eugene']);
      expect(citiesAtoJ([])).toStrictEqual([]);
       
    });
  });