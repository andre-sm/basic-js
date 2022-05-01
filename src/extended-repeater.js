const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let { repeatTimes, separator = '+', addition, additionRepeatTimes, additionSeparator = '|' } = options;
  let result = '';

  str = str + '';

  if(!repeatTimes) return str += addition; 

  if(addition !== undefined) {
    addition = addition + '';
      if(additionRepeatTimes) {
        for(let i = 0; i < additionRepeatTimes; i++) {
            if(i === additionRepeatTimes - 1) {
                str += addition
            } else{
                str += addition + additionSeparator;
            }
        }
      } else {
        str += addition
      }
  }

  if(repeatTimes) {
      for(let i = 0; i < repeatTimes; i++) {
          if(i === repeatTimes - 1) {
              result += str;
          } else{
              result += str + separator;
          }
      }
  }
  return result;
}

module.exports = {
  repeater
};
