// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function cavemanReverese(str) {
  let ret = '';

  for (let i = str.length - 1; i >= 0; i--) {
    ret += str[i];
  }

  return ret;
}

function cavemanWithForOfLoops(str) {
  let ret = '';

  for (const char of str) {
    ret = char + ret;
  }

  return ret;
}

function cavemanWithReduce(str) {
  return str.split('').reduce((acc, char) => char + acc, '');
}

function reverseViaLib(str) {
  return str
    .split('') // turns it to array
    .reverse() // reverses the array
    .join(''); // joins up the array into one string
}

function reverse(str) {
  return cavemanWithReduce(str);
}

module.exports = reverse;
