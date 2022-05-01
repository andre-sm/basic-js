const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  const allItemsArray = [];

  const reverse = domains.map(item => item.split('.')
                                          .reverse()
                                          .map(item => `.${item}`)
                                          .reduce((prev, cur) => {
                                              allItemsArray.push(prev + cur);
                                              return prev + cur;
                                          }, ''));

  for(let i = 0; i < allItemsArray.length; i++) {
      if(result[allItemsArray[i]]) continue;

      const count = allItemsArray.filter(el => el === allItemsArray[i]).length;
      result[allItemsArray[i]] = count;
  }
                               
  return result;
}

module.exports = {
  getDNSStats
};
