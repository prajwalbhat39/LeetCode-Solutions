/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {

    intervals.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

    let i = intervals.length-1;

    while (i > 0) {
        if (
            intervals[i][0] <= intervals[i - 1][1] &&
            intervals[i][0] >= intervals[i - 1][0]
        ) {

            intervals[i] = [intervals[i - 1][0], intervals[i][1]];
            intervals.splice(i - 1, 1);
            i--;

        }
        else if (
            intervals[i][0] <= intervals[i - 1][1] &&
            intervals[i][0] <= intervals[i - 1][0]
        ) {

            intervals.splice(i - 1, 1);
            i--

        }
        else {

            i--;
        }
    }

    return intervals;
};