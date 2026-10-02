/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    res = []
    var backtrack = function(path){
        if(path.length === nums.length){
            res.push([...path])
            return;
        }
        for(let i=0 ; i<nums.length ; i++){
            if(path.includes(nums[i])){
                continue;
            }
            path.push(nums[i]);
            backtrack(path)
            path.pop();
        }
        return;
    }
    backtrack([]);
    return res;
};