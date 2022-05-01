const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(option = true){
    this.option = option;
  }

  encrypt(message, key) {

      if(!message || !key) throw new Error('Incorrect arguments!');

      key = key.toUpperCase();
  
      const spaceIdxs = [];
      for(let i = 0; i < message.length; i++) {
          if(message[i] === ' ') spaceIdxs.push([i])
      }
  
      message = message.toUpperCase().split(' ').join('');
  
      while(message.length > key.length) {
          key += key.repeat(1);
      }
      key = key.slice(0, message.length)
  
      const result = [];
      const startCode = 'A'.charCodeAt(0);
  
      for(let i = 0; i < key.length; i++) {
         if(message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
              const keyIdx = key.charCodeAt(i) - startCode;
              const messageIdx = message.charCodeAt(i) - startCode;
  
              result.push(String.fromCharCode(startCode + (keyIdx + messageIdx) % 26));
          } else {
              result.push(message[i]);
          }
      }
      spaceIdxs.forEach(item => {
          result.splice(item, 0, ' ')
      });

      return this.option === true ? result.join('') : result.reverse().join('');
  }
  decrypt(message, key) {

    if(!message || !key) throw new Error('Incorrect arguments!');

    key = key.toUpperCase();

    const spaceIdxs = [];
    for(let i = 0; i < message.length; i++) {
        if(message[i] === ' ') spaceIdxs.push([i])
    }

    message = message.toUpperCase().split(' ').join('');

    while(message.length > key.length) {
        key += key.repeat(1);
    }
    key = key.slice(0, message.length)

    const result = [];
    const startCode = 'A'.charCodeAt(0);

    for(let i = 0; i < key.length; i++) {
       if(message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
            const keyIdx = key.charCodeAt(i) - startCode;
            const messageIdx = message.charCodeAt(i) - startCode;

            result.push(String.fromCharCode(startCode + (messageIdx - keyIdx + 26) % 26));
        } else {
            result.push(message[i]);
        }
    }
    spaceIdxs.forEach(item => {
        result.splice(item, 0, ' ')
    });

    return this.option === true ? result.join('') : result.reverse().join('');;
  }
}

module.exports = {
  VigenereCipheringMachine
};
