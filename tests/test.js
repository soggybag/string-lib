/* eslint-disable no-undef */
const {
  isEmpty,
  capitalize,
  capitalizeWords,
  removeExtraSpaces,
  kebabCase,
  camelCase,
  snakeCase,
  makeHashtag,
  allCaps,
  shift,
} = require('../src/index');

// isEmpty.test.js
describe('isEmpty', () => {
  test('returns true for an empty string', () => {
    expect(isEmpty('')).toBe(true);
  });

  test('returns true for a string containing only whitespace characters', () => {
    expect(isEmpty('   \n  \t   ')).toBe(true);
  });

  test('returns false for a non-empty string', () => {
    expect(isEmpty('Hello, world!')).toBe(false);
  });

  test('returns false for a string with leading or trailing whitespace', () => {
    expect(isEmpty('   Hello, world!   ')).toBe(false);
  });
});

// capitalize.test.js

describe('capitalize', () => {
  test('returns an empty string when the input is empty', () => {
    expect(capitalize('')).toBe('');
  });

  test('capitalizes the first letter of a non-empty string', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('world')).toBe('World');
  });

  test('preserves the casing of the remaining letters', () => {
    expect(capitalize('jAVAscript')).toBe('JAVAscript');
    expect(capitalize('cAPSLOCK')).toBe('CAPSLOCK');
  });
});

// capitalizeWords.test.js

describe('capitalizeWords', () => {
  test('capitalizes the first letter of each word in a string', () => {
    expect(capitalizeWords('hello world')).toBe('Hello World');
    expect(capitalizeWords('this is a test')).toBe('This Is A Test');
  });

  test('returns an empty string when the input is empty', () => {
    expect(capitalizeWords('')).toBe('');
  });
});

// --------------------------

test('Sanity Check', () => {
  expect(2 + 2).toBe(4);
});
// Challenge 1
test('test capitalize', () => {
  expect(capitalize('')).toBe('');
  expect(capitalize('hello')).toBe('Hello');
  expect(capitalize('hello world')).toBe('Hello world');
  expect(capitalize('this is a very long string.')).toBe('This is a very long string.');
});
// Challenge 2
test('test allCaps', () => {
  expect(allCaps('')).toBe('');
  expect(allCaps('hello')).toBe('HELLO');
  expect(allCaps('hello world')).toBe('HELLO WORLD');
  expect(allCaps('this is a very long string.')).toBe('THIS IS A VERY LONG STRING.');
});
// Challenge 3
test('test capitalizeWords', () => {
  expect(capitalizeWords('')).toBe('');
  expect(capitalizeWords('hello')).toBe('Hello');
  expect(capitalizeWords('hello world')).toBe('Hello World');
  expect(capitalizeWords('this is a very long string.')).toBe('This Is A Very Long String.');
});
// Challenge 4
test('test removeExtraSpaces', () => {
  expect(removeExtraSpaces('')).toBe('');
  expect(removeExtraSpaces('hello')).toBe('hello');
  expect(removeExtraSpaces('hello     world')).toBe('hello world');
  expect(removeExtraSpaces('this is a very long string.')).toBe('this is a very long string.');
  expect(removeExtraSpaces('       ')).toBe('');
  expect(removeExtraSpaces('     hello      world     ')).toBe('hello world');
});
// Challenge 5
test('test kebabCase', () => {
  expect(kebabCase('')).toBe('');
  expect(kebabCase('hello')).toBe('hello');
  expect(kebabCase('hello world')).toBe('hello-world');
  expect(kebabCase('this is a very long string.')).toBe('this-is-a-very-long-string');
  expect(kebabCase('     hello      world     ')).toBe('hello-world');
  expect(kebabCase('number test! 8?')).toBe('number-test-8');
});
// Challenge 6
test('test snakeCase', () => {
  expect(snakeCase('')).toBe('');
  expect(snakeCase('hello')).toBe('hello');
  expect(snakeCase('hello world')).toBe('hello_world');
  expect(snakeCase('this is a very long string.')).toBe('this_is_a_very_long_string');
  expect(snakeCase('     hello      world     ')).toBe('hello_world');
  expect(snakeCase('number test! 8?')).toBe('number_test_8');
});
// Challenge 7
test('test camelCase', () => {
  expect(camelCase('')).toBe('');
  expect(camelCase('hello')).toBe('hello');
  expect(camelCase('hello world')).toBe('helloWorld');
  expect(camelCase('this is a very long string')).toBe('thisIsAVeryLongString');
  expect(camelCase('     hello      world     ')).toBe('helloWorld');
  expect(camelCase('number test 8')).toBe('numberTest8');
});
// Challenge 8
test('test shift', () => {
  expect(shift('')).toBe('');
  expect(shift('hello')).toBe('elloh');
  expect(shift('hello world')).toBe('ello worldh');
  expect(shift('this is a very long string.')).toBe('his is a very long string.t');
});
// Challenge 9
test('test makeHashtag', () => {
  expect(makeHashtag('')).toBe('');
  expect(makeHashtag('hello')).toBe('#Hello');
  expect(makeHashtag('hello world')).toBe('#HelloWorld');
  expect(makeHashtag('this is a very long string.')).toBe('#ThisIsAVeryLongString.');
});
// Challenge 10
test('test isEmpty', () => {
  expect(isEmpty('      ')).toBe(true);
  expect(isEmpty('\n')).toBe(true);
  expect(isEmpty('\r')).toBe(true);
  expect(isEmpty('\t')).toBe(true);
  expect(isEmpty('hello')).toBe(false);
  expect(isEmpty('hello world')).toBe(false);
});
