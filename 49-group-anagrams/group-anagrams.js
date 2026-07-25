/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let alphabetMap = new Map();

    for (let str of strs) {
        let sortedStr = str.split('').sort().join('');

        if (!alphabetMap.has(sortedStr)) {
            alphabetMap.set(sortedStr, []);
        }

        alphabetMap.get(sortedStr).push(str);
    }

    let result = [];

    for (let value of alphabetMap.values()) {
        result.push(value);
    }

    return result;
};