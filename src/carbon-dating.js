const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  
  
};

function dateSample(sampleActivity) {
  if (typeof(sampleActivity) != 'string') {
    return false;
  } else {
    return true;
  }
}

console.log(dateSample(1));