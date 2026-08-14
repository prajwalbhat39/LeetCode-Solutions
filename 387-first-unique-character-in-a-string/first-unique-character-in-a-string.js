/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = new Map();
    for(let string of s ){
        if(map.has(string)){
            let temp = map.get(string);
            temp+=1;
            map.set(string ,temp);
        }else{
            map.set(string, 1);
        }
    }
    for (let ele of map) {
        if (map.get(ele[0]) === 1) {
            return s.indexOf(ele[0]);
        }
    }

    return -1;
    
};