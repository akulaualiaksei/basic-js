const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth( arr ) {
    // throw new CustomError('Not implemented');
    let arrDepth = 1;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        let nextArrDepth = 1 + this.calculateDepth(arr[i]);
        if (arrDepth < nextArrDepth) {
          arrDepth = nextArrDepth;
        }
      }
    }
    return arrDepth;

  }
};