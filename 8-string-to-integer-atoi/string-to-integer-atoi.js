/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    function isDigit(char) {
        return char >= '0' && char <= '9';
    }
    let result = ""
    let digitRead = false
    let signRead = false
    for (let i = 0; i < s.length; i++) {

        if (s[i] === " " && digitRead === false && signRead === false) {
            continue;
        }

        if ((s[i] === "-" || s[i] === "+") && signRead === false && digitRead === false) {
            result += s[i];
            signRead = true;
            continue;
        }

        if (isDigit(s[i])) {
            result += s[i];
            digitRead = true;
            continue;
        }

        else {
            break;
        }
    }
    if(result === "-" || result === "+"){
        return 0;
    }
    result = Number(result);

    if (result < -(2 ** 31)) {
        return -(2 ** 31);
    }

    if (result > (2 ** 31) - 1) {
        return (2 ** 31) - 1;
    }
    return result
};