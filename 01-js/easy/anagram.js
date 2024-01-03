/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
   if (str1.length !== str2.length) {
     return false;
   }
 
  let str1ToArr1 = str1.toLowerCase().split('');
  let str2ToArr2 = str2.toLowerCase().split('');

  for (let index = 0; index < str1ToArr1.length; index++) {
      if(str2ToArr2.includes(str1ToArr1[index])){
         str2ToArr2.splice(str2ToArr2.indexOf(str1ToArr1[index]),1);
      }  
  }

  return str2ToArr2.length === 0 ? true : false;
 }

module.exports = isAnagram;
