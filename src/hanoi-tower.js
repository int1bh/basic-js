const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let disk = (Math.pow(2, disksNumber)) - 1;
  let sec = 3600 / turnsSpeed * disk;
  let obj = {
    turns: disk,
    seconds: Math.floor(sec)
  };
  return obj;
};
