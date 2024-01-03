/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const punctuationMarks = /[^a-zA-Z0-9\s]/g;
 
  // For cleaning the string so that it does not contains punctuations
  let modifiedString = str.replace(punctuationMarks,'').toLowerCase().split(' ').join('');

  let stringTobeCompared = [];
  for(let i = modifiedString.length; i>0;i--){
    stringTobeCompared.push(modifiedString[i-1]);
  }

  stringTobeCompared = stringTobeCompared.join('').toLowerCase();

  return (stringTobeCompared === modifiedString);
}

module.exports = isPalindrome;
