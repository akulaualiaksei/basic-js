const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (direction = true) {
    this.direction = direction;
  }
  encrypt(message, key) {
    // throw new CustomError('Not implemented');
    let result = [], j = 0;
    if (!message || !key) {
      throw new Error('wrong input');
    }
    key = key.toUpperCase();
    message = message.toUpperCase();
    for (let i=0; key.length < message.length; i++) {
      if (i < key.length) {
        key += key[i];
      } else {
        i = 0;
        key += key[i];
      }
      // console.log(key);
    }
    // console.log(message);
    for (let i = 0; i < message.length; i++) {

      let m = message[i].charCodeAt(0) - `A`.charCodeAt(0);
      let k = key[j].charCodeAt(0) - `A`.charCodeAt(0);
      if (m >= 0 && m <= 25) {
        let c = (m + k) % 26 + `A`.charCodeAt(0);
        result.push(String.fromCharCode(c));
        j++;
        // console.log(`from charcode ${String.fromCharCode(c)}`);
      } else {
        result.push(message[i]);
        // console.log(`from mes ${message[i]}`);
        // j--;
      }

    }
    if (this.direction) {
      return result.join('');
    } else {
      return result.reverse().join('');
    }
  }

  decrypt(message, key) {
    // throw new CustomError('Not implemented');
    let result = [];
    let j = 0;
    if (!message || !key) {
      throw new Error('wrong input');
    }
    key = key.toUpperCase();
    message = message.toUpperCase();
    for (let i=0; key.length < message.length; i++) {
      if (i < key.length) {
        key += key[i];
      } else {
        i = 0;
        key += key[i];
      }
      // console.log(key);
    }
    // console.log(message);
    for (let i = 0; i < message.length; i++) {

      let c = message[i].charCodeAt(0) - `A`.charCodeAt(0);
      let k = key[j].charCodeAt(0) - `A`.charCodeAt(0);
      if (c>= 0 && c <= 25) {
        let m = (c + 26 - k) % 26 + `A`.charCodeAt(0);
        result.push(String.fromCharCode(m));
        j++;
      } else {
        result.push(message[i]);
        // j--;
      }

    }
    if (this.direction) {
      return result.join('');
    } else {
      return result.reverse().join('');
    }
  }
}

module.exports = VigenereCipheringMachine;
