/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    if(wordDict.includes(s)){
        return true;
    }
    let setWordDict = new Set(wordDict)    
    dpArray = new Array(s.length+1).fill(false);
    dpArray[0] =true;

    for(let i = 0; i<s.length ; i++){
        for(let j= 0 ; j<= i ; j++){
            if(setWordDict.has(s.substring(j, i+1)) && dpArray[j] === true){
                dpArray[i+1] = true;
            }

        }
    }
    return dpArray[s.length]

};