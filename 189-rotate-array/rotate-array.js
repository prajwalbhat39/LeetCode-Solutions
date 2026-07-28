/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let reserve = nums[0];
    let shift = nums.length
    let shiftPosition = 0;
    let visited = []
    while(shift > 0){
        if(visited[shiftPosition]){
            shiftPosition = (shiftPosition + 1) % nums.length;
            reserve = nums[shiftPosition]
        }else{
            visited[shiftPosition] = true;
            shiftPosition = (shiftPosition + k)% nums.length;
            let temp = reserve;
            reserve= nums[shiftPosition]
            nums[shiftPosition]= temp;
            shift--;
        }
    };
};