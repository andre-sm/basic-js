const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)) {
    throw new NotImplementedError("'arr' parameter must be an instance of the Array!");
  }

  const firstArray = arr;
  const newArr = [];

  for(let i = 0; i < firstArray.length; i++) {
      if(firstArray[i] === '--double-next') {
        if(firstArray[i + 1]) newArr.push(firstArray[i + 1]);
          continue;
      }
      if(firstArray[i] === '--double-prev') {
        if(firstArray[i - 1]) newArr.push(firstArray[i - 1]);
          continue;
      }
      if(firstArray[i] === '--discard-next') {
        if(firstArray[i + 1]) firstArray.splice(i, 2);
          continue;
      }
      if(firstArray[i] === '--discard-prev') {
        if(firstArray[i - 1]) newArr.splice(i - 1, 2);
          continue;
      }
      newArr.push(firstArray[i])
  }
  return newArr;
}

module.exports = {
  transform
};
