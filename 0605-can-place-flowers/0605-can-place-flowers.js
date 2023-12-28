/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  let i = 0;
  const flowerbedLength = flowerbed.length;
  while (i < flowerbedLength && n > 0) {
    let checkAdjacentRight = flowerbed[i + 1] ? flowerbed[i + 1] : 0;
    let checkAdjacentLeft = flowerbed[i - 1] ? flowerbed[i - 1] : 0;
    if (flowerbed[i] === 0 && checkAdjacentLeft === 0 && checkAdjacentRight === 0) {
      flowerbed[i] = 1;
      n--;
    }
    i++;
  }
  return n == 0 ? true : false;
};