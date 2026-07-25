/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let mini = Number.MAX_SAFE_INTEGER
    let maxi = -1;
    let maxDiff= -1;
    for(const price of prices){
        if(price < mini){
            mini = price
            maxi = mini 
        }
        else{
            maxi = Math.max(price , maxi)
        }
        
    maxDiff = Math.max(maxi - mini, maxDiff)
        
    }
    return maxDiff

};