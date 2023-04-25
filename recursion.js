/** product: calculate the product of an array of numbers. */

function product(nums, i=0) {
  if (i === nums.length) return 1;
  return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, longestSoFar=0, i=0) {
  if (i === words.length) return longestSoFar;
  longestSoFar = Math.max(words[i].length, longestSoFar);
  return longest(words, longestSoFar, i+1);
}
 
/** everyOther: return a string with every other letter. */

function everyOther(str, i=0, newStr='') {
  if (i >= str.length) return newStr;
  newStr = newStr + str[i]
  return everyOther(str, i+2, newStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i=0) {
  if (i === Math.floor(str.length/2)) return true;
  if (str[i] !== str[str.length-i-1]) return false;
  return isPalindrome(str, i+1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
  if (i === arr.length) return -1;
    if (arr[i] === val) return i;
  return findIndex(arr, val, i+1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, newStr='', i=str.length-1) {
 if (i === -1) return newStr;
 newStr += str[i]
 return revString(str, newStr, i-1)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") stringArr.push(obj[key]);
    if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
  if (left > right) {
    return -1;
  }
  let middle = Math.floor((right + left) / 2);
  if (arr[middle] === val) {
    return middle;
  }
  if (arr[middle] > val) {
    return binarySearch(arr, val, left, middle - 1);
  }
  return binarySearch(arr, val, middle + 1, right);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
