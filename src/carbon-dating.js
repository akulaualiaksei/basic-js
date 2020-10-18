const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  //throw new CustomError('Not implemented');
  // console.log(typeof sampleActivity === 'string' && Number(sampleActivity) <16 && Number(sampleActivity) >0)
  // console.log(typeof Number(sampleActivity));
  // console.log(typeof Number(sampleActivity) ==='number');
  // console.log(sampleActivity);

  if (typeof sampleActivity === 'string' && Number(sampleActivity) <=15 && Number(sampleActivity) >0) {
    return Math.ceil(Math.log(MODERN_ACTIVITY/Number(sampleActivity))/(0.693/HALF_LIFE_PERIOD));

  } else {
    return false;
  }
};
