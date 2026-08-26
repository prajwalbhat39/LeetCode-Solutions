/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let minHeap = new MinPriorityQueue();
    for(let element of nums){
        minHeap.enqueue(element);
        if(minHeap.size() > k){
            minHeap.dequeue();
        }
    }
    return minHeap.dequeue();
};