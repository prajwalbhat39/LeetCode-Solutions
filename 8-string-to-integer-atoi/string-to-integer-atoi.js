/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
 function isDigit(char) {
        return char >= '0' && char <= '9';
    }
  let result = 0;
let sign = 1;
let digitRead = false;
let signRead = false;

for (let i = 0; i < s.length; i++) {

    if (s[i] === " " && digitRead === false && signRead === false) {
        continue;
    }

    if ((s[i] === "-" || s[i] === "+") && signRead === false && digitRead === false) {
        signRead = true;
        if (s[i] === "-") {
            sign = -1;
        }
        continue;
    }

    if (isDigit(s[i])) {
        digitRead = true;
        result = result * 10 + (s[i] - '0');
        continue;
    }

    break;
}

result *= sign;

if (result < -(2 ** 31)) {
    return -(2 ** 31);
}

if (result > (2 ** 31) - 1) {
    return (2 ** 31) - 1;
}

return result;
};