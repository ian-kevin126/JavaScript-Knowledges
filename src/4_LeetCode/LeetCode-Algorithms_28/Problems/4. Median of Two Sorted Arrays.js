var findMedianSortedArrays = function (nums1, nums2) {
    const joined = nums1.concat(nums2);
    joined.sort(function (a, b) {
        return a - b
    });
    const even = joined.length / 2, 
        isOdd = joined.length % 2;

    if (isOdd > 0) {
        return joined[Math.floor(joined.length / 2)];
    } else {
        return (joined[even] + joined[even - 1]) / 2;
    };
};