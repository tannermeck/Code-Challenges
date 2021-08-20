import { returnTen, findMax } from './code-challenge-11';

  test('it should return the last 10 characters of a string as an array', () => {
    expect(returnTen('hello world')).toStrictEqual(['e','l','l','o',' ','w','o','r','l','d']);
    expect(returnTen('world')).toStrictEqual(['w','o','r','l','d']);
  });
  test('it should return the max character in an array', () => {
    expect(findMax([[13,24,24,2], [2,5,6], [2,3]])).toStrictEqual(24);
  });
