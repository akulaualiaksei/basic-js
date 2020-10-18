const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let repeatTimes, separator, addition, additionRepeatTimes, additionSeparator;
  let result = '';
  if (options.repeatTimes !== undefined) {
    repeatTimes = options.repeatTimes;
  } else {
    repeatTimes = 1;
  }
  if (options.separator !== undefined) {
    separator = `${options.separator}`;
  } else {
    separator = '+';
  }
  if (options.addition !== undefined) {
    addition = `${options.addition}`;
  } else {
    addition = '';
  }
  if (options.additionRepeatTimes !== undefined) {
    additionRepeatTimes = options.additionRepeatTimes;
  } else {
    additionRepeatTimes = 1;
  }
  if (options.additionSeparator !== undefined) {
    additionSeparator = `${options.additionSeparator}`;
  } else {
    additionSeparator = '|';
  }

  for (let i=0; i< repeatTimes; i++) {
    result += `${str}`;
    for (let j=0; j< additionRepeatTimes; j++) {
      result += addition;
      if (j < additionRepeatTimes-1) {
        result += additionSeparator;
      }
    }
    if (i < repeatTimes - 1 ) {
      result += separator;
    }
  }
  return result;
};
