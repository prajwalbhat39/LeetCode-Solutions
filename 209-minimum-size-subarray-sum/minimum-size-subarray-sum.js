/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let right=0;
    let left = 0;
    let tempSum = 0 ;
    let minLen = 1000000 ;
    while( right <= nums.length){
        if(tempSum < target){
            tempSum += nums[right];
            right++;
        }else{
            minLen = Math.min(minLen, right - left)
            tempSum -= nums[left];
            left++;
        }
    }
   return minLen === 1000000 ? 0:minLen
   
};