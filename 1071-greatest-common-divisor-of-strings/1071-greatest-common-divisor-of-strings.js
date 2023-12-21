/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
  let gcdString = "";
  if (str1.length === 0 || str2.length === 0) return gcdString;
  if (str1 === str2) return str1;
  for (let i = 1; i <= Math.max(str1.length, str2.length); i++) {
    if (str1.length % i === 0 && str2.length % i === 0) {
      const divisor = str1.substring(0, i);
      if (isValidDivisor(str1, divisor) && isValidDivisor(str2, divisor)) {
        gcdString = divisor;
      }
    }
  }
  return gcdString;
};

function isValidDivisor(str, divisor) {
  const repetitions = str.length / divisor.length;
  const repeatedString = divisor.repeat(repetitions);
  return str === repeatedString;
}