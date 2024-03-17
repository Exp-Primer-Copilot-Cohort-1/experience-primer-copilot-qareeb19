const hw1 = require('./problems_ts.ts');

/**
 * Problem 1
 */
describe('Problem 1', () => {
  test('flatten list', () => {
    let arrays = [[1, 2, 3], [4, 5], [6]];
    let expected = [1,2,3,4,5,6];
    const actual = hw1.flatten(arrays);
    expect(actual).toMatchObject(expected);
  });

});

/**
 * Problem 3
 */

describe('Problem 3', () => {
  test('retry until success', () => {
    const result = hw1.retry(8, 8);
    expect(result).not.toBeInstanceOf(hw1.OurCustomError);
    expect(result).toEqual(64); // Assuming retry should eventually return 8 * 8
  });

  test('retry throws illegal argument error for b = 0', () => {
    expect(() => hw1.retry(8, 0)).toThrow('illegal argument');
  });

  // Add more tests as needed
});

/**
 * Problem 5
 */
describe('Problem 5', () => {
  test('create linkedlist', () => {
    let expected = {value: 10, rest: {value: 20, rest: {value: 30, rest: null}}};
    const actual = hw1.arrayToList([10,20,30]);
    expect(actual).toMatchObject(expected);
  });

  /** add more Problem 5 tests here */
});

/**
 * Problem 9
 */
describe('Problem 9', () => {
  test('find closest size country', async () => {
   
    const expected = { country: 'Canada', delta: 277709 };
    const actual = await hw1.closestSizesCountries('China');
    expect(actual).toMatchObject(expected);
  });



});
