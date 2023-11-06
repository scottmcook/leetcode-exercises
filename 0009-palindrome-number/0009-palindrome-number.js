/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let reversedNumber = [...x.toString()];
    reversedNumber.reverse();
    let originalNumber = [...x.toString()];
  
    
    if (reversedNumber.join() === originalNumber.join()) {
      return true;
    } else {
      return false;
    }
};