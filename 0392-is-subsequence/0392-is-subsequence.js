/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  if (s === t || s.length === 0) return true;
  
  let sPointer = 0;
  let tPointer = 0;

  while (tPointer < t.length) {
    if (s[sPointer] === t[tPointer]) {
      sPointer++;
      if (sPointer === s.length) {
        return true;
      }
    } 
    tPointer++;
  }
  return false
};