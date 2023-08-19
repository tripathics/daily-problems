function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  // merge the arrays first
  var merged: number[] = [];
  var nums1Pointer = 0,
    nums2Pointer = 0;
  while (nums1Pointer < nums1.length && nums2Pointer < nums2.length) {
    if (nums1[nums1Pointer] < nums2[nums2Pointer]) {
      merged.push(nums1[nums1Pointer++]);
    } else {
      merged.push(nums2[nums2Pointer++]);
    }
  }
  while (nums1[nums1Pointer] !== undefined) {
    merged.push(nums1[nums1Pointer++]);
  }
  while (nums2[nums2Pointer] !== undefined) {
    merged.push(nums2[nums2Pointer++]);
  }
  // calculate median and return
  if (merged.length % 2) {
    return merged[Math.floor(merged.length / 2)];
  } else {
    return (merged[merged.length / 2] + merged[merged.length / 2 - 1]) / 2;
  }
}
