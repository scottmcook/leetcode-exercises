/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let lengthOfSubstring = 0;
  let chars = s.split('');
  let substringArray = [];
  if (s.length == 1) return 1;
  
  let counter = 1;
  for (let i = 0; i < s.length; i++) {
    if (!substringArray.includes(s[i])) {
      substringArray.push(s[i]);
      lengthOfSubstring = Math.max(lengthOfSubstring, substringArray.length);
    } else {
      // Remove characters from the beginning until the repeated character
      substringArray = substringArray.slice(substringArray.indexOf(s[i]) + 1);
      substringArray.push(s[i]);
    }
  }
  return lengthOfSubstring;
}