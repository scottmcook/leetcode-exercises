/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;

  while (left < right) {
    const width = right - left;
    const minHeight = Math.min(height[left], height[right]);
    const water = width * minHeight;

    maxWater = Math.max(maxWater, water);

    while (left < right && height[left] <= minHeight) {
            left++;
        }

        while (left < right && height[right] <= minHeight) {
            right--;
        }
  }
  return maxWater;
};