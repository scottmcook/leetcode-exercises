/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) { 
  let answer = [[],[]];
    
  const set1 = new Set(nums1.filter(Number.isInteger))
  const set2 = new Set(nums2.filter(Number.isInteger))

  for (let num of set1) {
    if (!set2.has(num)) {
      answer[0].push(num)
    }
  }

  for (let num of set2) {
    if (!set1.has(num)) {
      answer[1].push(num)
    }
  }
  
  return answer;
};