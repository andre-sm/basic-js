const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  if (!Array.isArray(arr)) return false;
  return arr.filter(item => typeof item === 'string')
            .map(item => item.trim().toUpperCase())
            .sort((a, b) => {
                  return a > b ? 1 : a < b ? -1 : 0;
            })
            .map(item => item[0]).join('');
}

module.exports = {
  createDreamTeam
};
