/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let i = 0;
    let totalSum = 0;

    const romanMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
        IV: 4,
        IX: 9,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900
    };

    while (i < s.length) {

        if (s[i] === "I") {
            if (s[i + 1] === "V") {
                totalSum += romanMap["IV"];
                i += 2;
            }
            else if (s[i + 1] === "X") {
                totalSum += romanMap["IX"];
                i += 2;
            }
            else {
                totalSum += romanMap[s[i]];
                i += 1;
            }
        }

        else if (s[i] === "X") {
            if (s[i + 1] === "L") {
                totalSum += romanMap["XL"];
                i += 2;
            }
            else if (s[i + 1] === "C") {
                totalSum += romanMap["XC"];
                i += 2;
            }
            else {
                totalSum += romanMap[s[i]];
                i += 1;
            }
        }

        else if (s[i] === "C") {
            if (s[i + 1] === "D") {
                totalSum += romanMap["CD"];
                i += 2;
            }
            else if (s[i + 1] === "M") {
                totalSum += romanMap["CM"];
                i += 2;
            }
            else {
                totalSum += romanMap[s[i]];
                i += 1;
            }
        }

        else {
            totalSum += romanMap[s[i]];
            i += 1;
        }
    }

    return totalSum;
};