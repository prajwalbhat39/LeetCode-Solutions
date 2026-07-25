/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let mini = Number.MAX_SAFE_INTEGER
    let maxi = -1;
    let maxProfit = 0;
    for(const price of prices){
       mini = Math.min(mini , price)
       maxProfit = Math.max(maxProfit, price - mini);
        
    }
    return maxProfit

};