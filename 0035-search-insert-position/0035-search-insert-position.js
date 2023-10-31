/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let min = 0;
  let max = nums.length - 1;

  let index;
  let element;

  while (min <= max) {
    index = Math.floor((max + min ) / 2);
    element = nums[index];

    if (element < target) {
      min = index + 1; 
    } else if (element > target) {
      max = index - 1;
    } else {
      return index
    } 
  }
  // Return where it should be.
  if (target > nums[index]) {
    return index + 1;
  } else if (target < nums[index]) {
    return index
  }
};