const CustomError = require("../extensions/custom-error");

const chainMaker = {
  result : [],
  getLength() {
    // return
    this.result.length;
    return this;
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value) {
    // return
    this.result.push(value);
    return this;
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink(position) {
    if (Number.isInteger(position)) {
      // return
      this.result.splice(position - 1 , 1);
      return this;
    } else {
      this.result = [];
      throw new Error('wrong number in remove position');
    }
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    // throw new CustomError('Not implemented');
    // return
    this.result.reverse();
    return this;
    // remove line with error and write your code here
  },
  finishChain() {
    // throw new CustomError('Not implemented');
    let stringResult = '';
    for (i = 0; i < this.result.length; i++) {
      if (stringResult.length === 0) {
        stringResult = `${stringResult}( ${this.result[i]} )`;
      } else {
        stringResult = `${stringResult}~~( ${this.result[i]} )`;
      }
    }
    this.result = [];
    return stringResult;
    // remove line with error and write your code here
  }
};

module.exports = chainMaker;
