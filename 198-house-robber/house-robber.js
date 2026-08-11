/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length === 1){
        return nums[0];
    }
    let dpArray = new Array(nums.length);
    dpArray[0] = nums[0];
    dpArray[1] = Math.max(nums[0], nums[1])
    for (let i = 2; i<nums.length ; i++){
        dpArray[i] = Math.max(dpArray[i-1], nums[i]+dpArray[i-2])
    }
    return dpArray[nums.length-1]
};