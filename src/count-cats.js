const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
  let numOfString = 0;

    for (let currentString of array) {
        if (currentString.includes('^^') !== false) {
            numOfString++;

        }
    }
    return numOfString;
};
