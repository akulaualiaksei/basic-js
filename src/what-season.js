const CustomError = require("../extensions/custom-error");

module.exports = function getSeason( date ) {
  // throw new CustomError('Not implemented');
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  let month = date.getMonth() + 1;
  if (!date.getTime()) {
    throw new Error('Error')
  }
  if (month === 12 || (month >= 1 && month <= 2)) {
    return 'winter';
  } else if (month >= 3 && month <= 5) {
    return 'spring';
  } else if (month >=6 && month <= 8) {
    return 'summer';
  } else if (month >=9 && month <=11) {
    return 'autumn';
  }
};
