const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // throw new CustomError('Not implemented');
  if (Array.isArray(arr)) {
    let resultArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "--discard-next") {
        i++;
      } else if (arr[i] === "--discard-prev") {
        if (i > 0 && arr[i - 2] !== "--discard-next") {
          resultArr.pop();
        }
      } else if (arr[i] === "--double-next") {
        if (i + 1 < arr.length) {
          resultArr.push(arr[i + 1]);
        }
      } else if (arr[i] === "--double-prev") {
        if (arr[i-2] !== '--discard-next' && i > 0) {
          resultArr.push(arr[i - 1]);
        }
      } else {
        // if (typeof(arr[i]) ===  'number') {
            resultArr.push(arr[i]);
        // }
      }
    }
    return resultArr;
  } else {
    throw new Error("Wrong input, should be array");
  }
};
