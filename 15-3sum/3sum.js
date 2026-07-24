/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b) => a-b)
    let result =[];
    for(let left = 0;  left < nums.length -2 ; left++ ){
        if(left >0 && nums[left] ===  nums[left-1] ){
            continue;
        }
        let middle = left + 1;
        let right = nums.length-1 ;
        while(middle < right){
            let sum = nums[left] + nums[middle] + nums[right];
            if(sum < 0){
                middle ++;
            }else if(sum > 0){
                right --;
            }
            else{
                let temp =[nums[left], nums[middle] , nums[right]]
                result.push(temp)
                middle++;
                right --;
                while(nums[middle] === nums[middle-1] && middle < right){
                middle++;
                }
                while(nums[right] === nums[right+1] && right >  middle){
                right--;
                }
            }
           

        }
    }
    return result;
};