/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const maxHeap = new MaxPriorityQueue();
    for(let element of nums){
        maxHeap.enqueue(element);
    }
    for(let i = 1 ; i< k ; i ++){
        maxHeap.dequeue()
    }
    let result = maxHeap.dequeue();
    return result;
};
