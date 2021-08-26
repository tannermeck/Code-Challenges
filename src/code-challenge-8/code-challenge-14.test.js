import { isCapitalized, replaceZeros, validatePin, validateWord, hasNumber, validateEmail } from './code-challenge-14.js';

test('returns all words that have capital letters', () => {       
    expect(isCapitalized('We only want to Return the Words that begin With a capital Letter')).toStrictEqual([ 'We', 'Return', 'Words', 'With', 'Letter' ]);
    expect(isCapitalized('Given by our hand in the meadow that is called Runnymede, between Windsor and Staines, on the fifteenth day of June in the seventeenth year of our reign (i.e. 1215: the new regnal year began on 28 May).')).toStrictEqual(['Given', 'Runnymede', 'Windsor', 'Staines', 'June', 'May']);
    expect(isCapitalized('these words are all failures')).toStrictEqual([]);
  });
  describe('Testing challenge 1', () => {
    test('It should sort the characters by number of children', () => {
      expect(replaceZeros('This sentence has 0 written 0 times')).toStrictEqual('This sentence has zero written zero times'); 
    });
    test('Confirm a pin number is four digits', () => {
      expect(validatePin([4111])).toStrictEqual(true); 
      expect(validatePin(['a',123])).toStrictEqual(false); 
      expect(validatePin(['one', 234])).toStrictEqual(false); 
    });
    test('Validate word that is between 5 to 10 characters long', () => {
      expect(validateWord('apples')).toStrictEqual(true); 
      expect(validateWord('corn')).toStrictEqual(false); 
      expect(validateWord('avacados')).toStrictEqual(true); 
    });
    test('if a string has one or more letters followed by one or more digits', () => {
      expect(hasNumber('L1')).toStrictEqual(true); 
      expect(hasNumber('l1')).toStrictEqual(true); 
      expect(hasNumber('all')).toStrictEqual(false); 
      expect(hasNumber('Ll12')).toStrictEqual(true); 
    });
    test('check if an email is valid', () => {
      expect(validateEmail('tanner.alchemy@gmail.com')).toStrictEqual(true); 
      expect(validateEmail('tanner alchemy@gmail.com')).toStrictEqual(false); 
      expect(validateEmail('tanner123@')).toStrictEqual(true); 
      expect(validateEmail('tanner:123@')).toStrictEqual(false); 
    });
  });