const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {

  calculateDepth(array) {
    //throw new NotImplementedError('Not implemented');
    const depthArray = [];
    let depth = 0;

    if(array.every(item => !Array.isArray(item))) return 1;

    newArr(array)
    function newArr(array) {
      depth++;
      array.forEach(item => {
          if(Array.isArray(item)) {
              depth += newArr(item);
          }
      });
      
      depthArray.push(depth);
      depth = 0
      return depth;
    }

    return Math.max(...depthArray);
  }
}

module.exports = {
  DepthCalculator
};
