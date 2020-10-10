const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(reverse = true) {
        this.reverse = reverse;
    }
  encrypt(word, key) {
    if (word === undefined || key === undefined) throw new Error;
        let result = '';
        word = word.toUpperCase();
        key = key.toUpperCase();
        let count = 0;

        for (let i = 0; i < word.length; i++) {
            if (word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90) {
                let wordCode = word.charCodeAt(i);
                let newKey = count % key.length;
                let keyCode = key.charCodeAt(newKey);
                result += String.fromCharCode((wordCode + keyCode) % 26 + 65);
                count++;
            } else result += word.charAt(i);

        }
        return this.reverse ? result : result.split('').reverse().join('');
  }    
  decrypt(word, key) {
    if (word === undefined || key === undefined) throw new Error;
        let result = '';
        word = word.toUpperCase();
        key = key.toUpperCase();
        let count = 0;
        for (let i = 0; i < word.length; i++) {
            let code = word.charCodeAt(i);
            if (code >= 65 && code <= 90) {
                let wordCode = code - 65;
                let newKey = count % key.length;
                let keyChar = key.charCodeAt(newKey) - 65;
                let letterCode = (wordCode + (26 - keyChar)) % 26;
                result += String.fromCharCode(65 + letterCode);
                count++;
            } else result += word[i];
        }
        return this.reverse ? result : result.split('').reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;