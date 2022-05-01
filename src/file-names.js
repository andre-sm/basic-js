const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const dataMap = new Map();
  const result = [];

  for(let i = 0; i < names.length; i++) {
      if(dataMap.has(names[i])) {
          if(dataMap.get(names[i]) === names[i]) {
              let count = 0;
              for (let value of dataMap.values()) {
                  if(value === names[i]) count++;
                }
              dataMap.set(`${names[i]}(${count})`, names[i])
          } else {
              dataMap.set(`${names[i]}(1)`, names[i])
          }
      } else {
          dataMap.set(names[i], names[i])
      }
  }

  for (let key of dataMap.keys()) {
      result.push(key)
  }

  return result;
}

module.exports = {
  renameFiles
};
