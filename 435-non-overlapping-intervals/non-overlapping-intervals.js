/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b)=> a[1] - b[1]);
    let count = 1;
    let minInterval = intervals[0][1];
    for(let i =1  ; i< intervals.length ; i++){
        if(intervals[i][0] >= minInterval){
            minInterval = intervals[i][1]
            count+=1;
        }
    }
    return intervals.length - count;
    
};