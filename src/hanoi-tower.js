const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  /* throw new CustomError('Not implemented'); */
  // remove line with error and write your code here
  let turns = 0 , seconds = 0;
  turns = Math.pow(2, disksNumber) - 1;
  seconds = Math.floor(turns / (turnsSpeed / (60 * 60)));
  return {
  turns:  turns,
  seconds: seconds
  }
};

// calculateHanoi(5, 4074);
