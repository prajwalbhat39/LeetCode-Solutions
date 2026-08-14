/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let indexMap = new Map();
    let occurrenceMap = new Map();

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (!indexMap.has(char)) {
            indexMap.set(char, i);
        }

        if (occurrenceMap.has(char)) {
            occurrenceMap.set(char, occurrenceMap.get(char) + 1);
        } else {
            occurrenceMap.set(char, 1);
        }
    }

    for (let [char, count] of occurrenceMap) {
        if (count === 1) {
            return indexMap.get(char);
        }
    }

    return -1;
};