/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let coinPointer = -1;
    let dpArray = new Array(amount + 1).fill(0);
    coins.sort((a, b) => a - b);
    dpArray[0] = 0;
    
    for (let i = 1; i <= amount; i++) {

        while (
            coinPointer + 1 < coins.length &&
            coins[coinPointer + 1] <= i
        ) {
            coinPointer++;
        }

        let temp = coinPointer;
        let mini = 100000;

        while (temp >= 0) {

            let tempVal = dpArray[i - coins[temp]];

            if (tempVal === -1) {
                temp--;
                continue;
            }

            mini = Math.min(mini, tempVal);
            temp--;
        }

        if (mini === 100000) {
            dpArray[i] = -1;
        } else {
            dpArray[i] = mini + 1;
        }
    }
    return dpArray[amount];
};