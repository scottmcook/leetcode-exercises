/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const greatestCandy = Math.max(...candies);

    return candies.map(candy => {
      if (candy + extraCandies >= greatestCandy) {
        return true
      }
      else {
        return false
      }
    })
};