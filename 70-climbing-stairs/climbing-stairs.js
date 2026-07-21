/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let dpArray = new Array(n+1).fill(0)
    dpArray[0]=1;
    dpArray[1]=1
    for(let i=2 ; i<=n ; i++){
        dpArray[i]=dpArray[i-1]+ dpArray[i-2]
    }
    return dpArray[n]
};