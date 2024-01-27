/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  let reversedWord = [];
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  const wordArray = Array.from(s);
  let result = '';

  let vowelsInWord = wordArray.filter(letter => vowels.includes(letter));
  vowelsInWord.reverse();

  let vowelIndex = 0;
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {

      result += vowelsInWord[vowelIndex];
      vowelIndex++;
    }
    else {
      result += s[i]
    }
  }
  return result;
};