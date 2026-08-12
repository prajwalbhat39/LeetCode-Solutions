/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let dp = new Array(nums.length).fill(0)
    dp[0] = 1 ;
    let maxi =1;
    for(let i = 1 ; i<nums.length ; i++){
         let j= i-1 ;
         let tempMax = 0;
         while(j >= 0){
            if(nums[j] < nums[i]){
                tempMax= Math.max(tempMax , dp[j])
            }
            j--;
         }
        dp[i]= tempMax+1
        maxi = Math.max(dp[i], maxi);
    }
    return maxi
};