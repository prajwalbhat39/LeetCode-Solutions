var findDifference = function(nums1, nums2) {

    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);

    let result = [[], []];

    let i = 0;
    let j = 0;

    while (i < nums1.length || j < nums2.length) {

        // nums2 exhausted
        if (j >= nums2.length) {
            result[0].push(nums1[i]);

            let value = nums1[i];
            while (i < nums1.length && nums1[i] === value) {
                i++;
            }
        }

        // nums1 exhausted
        else if (i >= nums1.length) {
            result[1].push(nums2[j]);

            let value = nums2[j];
            while (j < nums2.length && nums2[j] === value) {
                j++;
            }
        }

        // nums1 value is smaller
        else if (nums1[i] < nums2[j]) {
            result[0].push(nums1[i]);

            let value = nums1[i];
            while (i < nums1.length && nums1[i] === value) {
                i++;
            }
        }

        // nums2 value is smaller
        else if (nums2[j] < nums1[i]) {
            result[1].push(nums2[j]);

            let value = nums2[j];
            while (j < nums2.length && nums2[j] === value) {
                j++;
            }
        }

        // Equal
        else {
            let value = nums1[i];

            while (i < nums1.length && nums1[i] === value) {
                i++;
            }

            while (j < nums2.length && nums2[j] === value) {
                j++;
            }
        }
    }

    return result;
};