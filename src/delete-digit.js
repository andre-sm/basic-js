const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(number) {
  const str = number.toString();
  const numArray = [];

  for(let i = 0; i < str.length; i++) {
      numArray.push(+str.replace(str[i], ''));
  }
  return Math.max(...numArray);
}

module.exports = {
  deleteDigit
};
