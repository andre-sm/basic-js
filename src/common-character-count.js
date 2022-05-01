const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  if(s1.length === 0 || s2.length === 0 ) return 0;
  let count = 0;

  do {
      let i = 0;
      const regexp = new RegExp(s1[i], "gi");
      const count1 = s1.match(regexp).length;
      const count2 = (s2.match(regexp) || []).length;
      s1 = s1.replace(regexp, '');

      count += Math.min(count1, count2)
      i++;
  } while (s1.length > 0);
  return count;
}

module.exports = {
  getCommonCharacterCount
};
