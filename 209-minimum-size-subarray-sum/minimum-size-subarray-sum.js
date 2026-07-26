/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let right=0;
    let left = 0;
    tempSum = 0 ;
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
    if(minLen ===  1000000){
        return 0;
    }else{
        return minLen;
    }
};