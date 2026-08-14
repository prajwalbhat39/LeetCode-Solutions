var firstUniqChar = function(s) {
    let count = new Array(26).fill(0);

    for (let char of s) {
        count[char.charCodeAt(0) - 97]++;
    }

    for (let i = 0; i < s.length; i++) {
        if (count[s.charCodeAt(i) - 97] === 1) {
            return i;
        }
    }

    return -1;
};