import testUtils from 'react-dom/test-utils';
import { getHouses, hasChildrenEntries, totalCharacters, updateNumbers, sortByChildren } from './more-object-keys-entries.js';
test.skip('it gets the names of the houses', () => {
  const characters = [
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
  ]; //arrange
  const output = getHouses(characters); //act
  expect(output).toEqual([
    'Stark',
    'Arryn',
    'Lannister',
    'Targaryen',
    'Tyrell',
    'Greyjoy',
    'Snow'
  ]); //assert
});
test.skip('converts an object of key value pairs into a string', () => {
    const dataObject = {'Grace Hopper': '222-303-5938', 'Ada Lovelace': '222-349-9842', 'Alan Turing': '222-853-5933'}; //arrange
    const output = updateNumbers(dataObject); //act
    expect(output).toEqual(['Grace Hopper: 222-303-5938','Ada Lovelace: 222-349-9842','Alan Turing: 222-853-5933']); //assert
  });
test.skip('takes in an array of characters and returns the total number', () => {
    const dataObject = [
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
      ]; //arrange
    const output = totalCharacters(dataObject); //act
    expect(output).toEqual(26); //assert
  });
test.skip('takes in an arr of object and a target character and returns a boolean', () => {
    const dataObject = [
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
      const character = 'Euron' 
      const characterTrue = 'Eddard' //arrange
    const output = hasChildrenEntries(dataObject, character)
    const trueOutput = hasChildrenEntries(dataObject, characterTrue); //act
    expect(output).toEqual(false); //assert
    expect(trueOutput).toEqual(true); //assert
  });
test.skip('takes in an array and sorts by children and then by name', () => {
    const dataObject = [
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
       //arrange
    const output = sortByChildren(dataObject)
     //act
    expect(output).toEqual([ {name: 'Euron', spouse: null, children: [], house: 'Greyjoy'}, { name: 'Jon S.', spouse: null, children: [],house: 'Snow'}, {name: 'Jon A.', spouse: 'Lysa', children: ['Robin'], house: 'Arryn'}, {name: 'Mace', spouse: 'Alerie', children: ['Margaery', 'Loras'], house: 'Tyrell'}, { name: 'Cersei',spouse: 'Robert', children: ['Joffrey', 'Myrcella', 'Tommen'], house: 'Lannister'}, {name: 'Daenarys', spouse: 'Khal Drogo', children: ['Drogon', 'Rhaegal', 'Viserion'], house: 'Targaryen'}, {name: 'Eddard', spouse: 'Catelyn', children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'], house: 'Stark'}]); //assert
  });