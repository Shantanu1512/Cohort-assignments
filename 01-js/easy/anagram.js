/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let one = str1.toLowerCase().split('').sort().join();
  let two = str2.toLowerCase().split('').sort().join();

  console.log(one, two);
  if (one === two) {
    return true;
  }
  return false;
}

console.log(isAnagram('Shantanu', 'Shantanu'));
module.exports = isAnagram;
