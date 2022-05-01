const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
    const idsArr = [];
    let id = arr.indexOf(-1);

    while(id !== -1) {
        idsArr.push(id)
        id = arr.indexOf(-1, id + 1)
    }
    const sortedArr = arr.filter(item => item !== -1).sort((a, b) => a - b);
    idsArr.forEach(item => {
        sortedArr.splice(item, 0, -1);
    });
    return sortedArr;
}

module.exports = {
  sortByHeight
};
