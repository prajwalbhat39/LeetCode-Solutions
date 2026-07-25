/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let mini = 100000
    let maxProfit = 0;
    for(const price of prices){
       mini = Math.min(mini , price)
       maxProfit = Math.max(maxProfit, price - mini);
    }
    return maxProfit

};