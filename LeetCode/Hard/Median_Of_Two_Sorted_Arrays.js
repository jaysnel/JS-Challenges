var findMedianSortedArrays = function(nums1, nums2) {
    let arr = [...nums1, ...nums2].sort();
    let middleNumber = (arr.length / 2 + .5) - 1;
    let median = (arr[(arr.length / 2)] + arr[(arr.length / 2) - 1]) / 2;
    console.log(arr, middleNumber, median)

    if(arr.length % 2 == 1) return console.log(arr[middleNumber]);
    if(arr.length % 2 == 0) return console.log(median);
    
};

findMedianSortedArrays([3], [-2, -1]);
