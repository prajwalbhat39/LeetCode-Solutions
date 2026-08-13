/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    // let map1 = new Map();
    // let map2 = new Map();

    // for (let element of nums1) {
    //     if (map1.has(element)) {
    //         map1.set(element, map1.get(element) + 1);
    //     } else {
    //         map1.set(element, 1);
    //     }
    // }

    // for (let element of nums2) {
    //     if (map2.has(element)) {
    //         map2.set(element, map2.get(element) + 1);
    //     } else {
    //         map2.set(element, 1);
    //     }
    // }

    let result = [[], []];
    // for (let element of nums1) {
    //     if (!map2.has(element) && !result[0].includes(element)) {
    //         result[0].push(element);
    //     }
    // }

    // for (let element of nums2) {
    //     if (!map1.has(element) && !result[1].includes(element)) {
    //         result[1].push(element);
    //     }
    // }

    // for(let element of nums1){
    //     if(!nums2.includes(element) && !result[0].includes(element)){
    //         result[0].push(element)
    //     }
    // }
    // for(let element of nums2){
    //     if(!nums1.includes(element) && !result[1].includes(element)){
    //         result[1].push(element)
    //     }
    // }

    let set1 =  new Set(nums1);
    let set2 = new Set(nums2);

    for(let element of set1){
        if(!set2.has(element)){
            result[0].push(element);
        }
    }
    
    for(let element of set2){
        if(!set1.has(element)){
            result[1].push(element);
        }
    }
    
    

    return result;
};