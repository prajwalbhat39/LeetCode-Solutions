/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let i=0;
    let temp =[]
    tempSum = 0 ;
    let minLen = 1000000 ;
    while( i <= nums.length){
        if(tempSum < target){
            tempSum += nums[i];
            temp.push(nums[i])
            i+=1
        }else{
            minLen = Math.min(minLen, temp.length)
            let popped = temp.shift()
            tempSum -= popped;
        }
       
    }
    if(minLen ===  1000000){
        return 0;
    }else{
        return minLen;
    }
};