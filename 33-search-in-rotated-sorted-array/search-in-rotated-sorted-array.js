/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  var binarySearch = function(low , high , nums , target){
    while(low <= high){
        let mid = Math.floor((low + high) / 2);
        if(target > nums[mid]){
            low = mid+1 ;
        }
        else if (target < nums[mid]){
            high = mid-1;
        }
        else{
            return mid;
        }
     }
     return -1;
    }
    let n= nums.length;
    if( nums[0] <= nums[n-1]){
        let answer  = binarySearch(0, n-1 , nums , target);
        return answer ;
    }
    for(let i= n -1 ; i>= 0 ; i--){
        if(nums[i-1] > nums[i]){
            k=i;
        }
    }
    it1= -1;
    it2= -1;

    it1 = binarySearch(k , n-1 , nums , target)
    it2 = binarySearch(0 , k-1 , nums , target)
    if(it1 === -1 && it2 === -1){
        return -1;
    }
     return it1 === -1 ? it2 : it1
    
};