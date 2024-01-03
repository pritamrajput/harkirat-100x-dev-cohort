/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let numOfVowels = 0;
    for (let index = 0; index < str.length; index++) {
        if(vowels.includes(str[index].toLowerCase())) numOfVowels+=1;
    }

    return numOfVowels;
}

module.exports = countVowels;