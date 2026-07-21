/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let start = 0;
    let end = height.length-1;
    let maxWater = 0;
    while(start < end){
        if(height[start] >= height[end]){
            maxWater = Math.max((height[end] * (end-start)) , maxWater)
            end--;

        }else{
            maxWater = Math.max((height[start] * (end-start)) , maxWater)
            start++;

        }
       
    }
     return maxWater



};