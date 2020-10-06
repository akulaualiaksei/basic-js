const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
  //throw new CustomError('Not implemented');
  let earsArray = [];
  let count = 0;
  console.log(Array.isArray(matrix))
  earsArray = matrix.join().split(',');
  console.log(earsArray);
  for (let i=0; i<earsArray.length; i++) {
    if (earsArray[i] === '^^') {count++}
  }
  return count;
};
