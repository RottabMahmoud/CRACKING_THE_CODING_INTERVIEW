// 1.1 is Unique
// Implement an Algorithm to determine if a string has all unique characters. what if you cannot use additional data structures.

const isUnique = (str) => {
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (str.indexOf(char) !== str.lastIndexOf(char)) {
      return false;
    }
  }
  return true;
};

// Time O(n^2) and Space Complexity O(1)

const isUnique2 = (str) => {
  let charSet = new Set();
  for (let char of str) {
    if (charSet.has(char)) return false;
    charSet.add(char);
  }
  return true;
};

// console.log(isUnique2("Hello")); // false
// console.log(isUnique2("Helo")); // true

// Time and Space Complexity O(n)

// Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.

const arePermutations = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  let str1Sorted = str1.split("").sort().join("");
  let str2Sorted = str2.split("").sort().join("");

  return str1Sorted === str2Sorted;
};

// console.log(arePermutations("listen", "silent")); // true

// Time Complexity O(n log n) and Space Complexity O(n)

// 1.3 URLify: Write a method to replace all space in a string with "%20". You may assume that the strring has sufficient space at the end to
// hold the additional characters, and that you are given the "true" length of the string.

const URLifyManual = (str, trueLength) => {
  let charArray = str.split("");
  let spaceCount = 0;
  for (let i = 0; i < trueLength; i++) {
    if (charArray[i] === " ") {
      spaceCount++;
    }
  }

  let index = trueLength + spaceCount * 2;
  for (let i = trueLength - 1; i >= 0; i--) {
    if (charArray[i] === " ") {
      charArray[index - 1] = "0";
      charArray[index - 2] = "2";
      charArray[index - 3] = "%";
      index -= 3;
    } else {
      charArray[index - 1] = charArray[i];
      index--;
    }
  }

  return charArray.join("");
};

const URLify = (str, truelength) => {
  return str.trim().replace(/\s+/g, "%20");
};

// console.log(URLify("I am Rottab   ", 10));

// Time Complexity O(n) and Space Complexity O(n)

// 1.4 Palindrome Permutation: Given a string, write a method to check if it is a permutation of a palindrome.

const isPermutationOfPalindrome = (str) => {
  str = str.replace(/\s+/g, "").toLowerCase();

  let oddChars = new Set();

  for (let char of str) {
    if (oddChars.has(char)) {
      oddChars.delete(char);
    } else {
      oddChars.add(char);
    }
  }

  return oddChars.size <= 1;
};

// console.log(isPermutationOfPalindrome("Tact Coa"));
// console.log(isPermutationOfPalindrome("Hello"));

// Time Complexity O(n) and Space Complexity O(1)

// 1.5 One Array: There are three types of edits can be perormed on strings: insert a character, remove a character, or replace a character.
//  GIven two strings, write a function to check if they are one edit (or zero edits) away.

const oneEditAway = (s1, s2) => {
  if (Math.abs(s1.length - s2.length) > 1) return false;

  let editCount = 0;
  let i = 0;
  let j = 0;

  while (i < s1.length && j < s2.length) {
    if (s1[i] !== s2[j]) {
      editCount++;

      if (editCount > 1) return false;

      if (s1.length > s2.length) {
        i++;
      } else if (s2.length > s1.length) {
        j++;
      } else {
        i++;
        j++;
      }
    } else {
      i++;
      j++;
    }
  }

  return true;
};

// console.log(oneEditAway("pale", "ple")); // true (remove 'a')
// console.log(oneEditAway("pales", "pale")); // true (remove 's')
// console.log(oneEditAway("pale", "bale")); // true (replace 'p' with 'b')
// console.log(oneEditAway("pale", "bake")); // false (two replacements needed)
// console.log(oneEditAway("abc", "abcde")); // false (more than one insertion needed)

// Time Complexity O(n) and Space Complexity O(1)

// 1.6 String Comppression: Implement a method to perform basic string compression using the counts of repeated characters. For example, the string
// aabcccccaaa would become a2b1c5a3. If the "compressed" string would not become smaller than the original string, your method should return
// the original string. You can assume the string has only uppercase and lowercase letters.

const stringCompression = (str) => {
  let compressed = "";
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      compressed += str[i] + count;
      count = 1;
    }
  }

  return compressed.length < str.length ? compressed : str;
};

// Time Complexity O(n) and Space Complexity O(n)

// console.log(stringCompression("aabcccccaaa")); // Output: "a2b1c5a3"
// console.log(stringCompression("abcdef")); // Output: "abcdef" (no compression)
// console.log(stringCompression("aabbb")); // Output: "a2b3" (compressed)
// console.log(stringCompression("aabb")); // Output: "aabb" (no compression)

// 1.7 Rotate Matrix: Given a image represented by NxN matrix. where each pixel in the image is 4 bytes,
// write a method to rotate the image by 90 degrees. Can you do this in place?

const rotateMatrix = (matrix) => {
  const n = matrix.length;

  // Step 1: Transpose the matrix
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      // Swap elements across the diagonal
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // Step 2: Reverse each row
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
};

let mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
rotateMatrix(mat);
// console.log(mat);
// Time Complexity O(n^2) and Space Complexity O(1)

// 1.8 Zero Matrix: Write an Algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.

const zeroMatrix = (matrix) => {
  const m = matrix.length;
  const n = matrix[0].length;

  // Arrays to track which rows and columns need to be zeroed
  let zeroRows = new Array(m).fill(false);
  let zeroCols = new Array(n).fill(false);

  // Step 1: Identify rows and columns to be zeroed
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        zeroRows[i] = true;
        zeroCols[j] = true;
      }
    }
  }

  // Step 2: Zero out rows
  for (let i = 0; i < m; i++) {
    if (zeroRows[i]) {
      for (let j = 0; j < n; j++) {
        matrix[i][j] = 0;
      }
    }
  }

  // Step 3: Zero out columns
  for (let j = 0; j < n; j++) {
    if (zeroCols[j]) {
      for (let i = 0; i < m; i++) {
        matrix[i][j] = 0;
      }
    }
  }
};

// Time Complexity O(M * N) Space Complexity O(M + N)

// Example usage:
let matrix = [
  [1, 2, 3],
  [4, 0, 6],
  [7, 8, 9],
];

// console.log("Original Matrix:");
// console.log(matrix);

// zeroMatrix(matrix);

// console.log("Matrix after zeroing rows and columns:");
// console.log(matrix);

// 1.9 String Rotation: Assume you have a method isSubstring which checks if one word is a substring of another.
// Given two strings, s1 and s2, write code to check of s2 is rotation of s1 using one call to isSubString
// (eg. "waterbottle" is rotation of "erbottlewat").

const isRotation = (s1, s2) => {
  if (s1.length !== s2.length || s1.length === 0) return false;

  let s1s1 = s1 + s1;

  return isSubString(s1s1, s2);
};

const isSubString = (s1, s2) => {
  return s1.includes(s2);
};

// Example usage:
let s1 = "waterbottle";
let s2 = "erbottlewat";

// console.log(isRotation(s1, s2)); // Output: true

// Time Complexity O(n) and Space Complexity O(n)

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

var twoSum = (nums, target) => {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    let want = target - nums[i];
    if (want in obj) {
      return [obj[want], i];
    }
    obj[nums[i]] = i;
  }
};
var twoSum = (nums, target) => {};
// console.log(twoSum([1, 7, 2, 4, 6, 0], 7), " TWO SUM");
// ------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------
// Three Some
// Given an array of nums in Integers, is there is an a +b +c that equals to zero

function isPalindrome(x) {
  return x == x.toString().split("").reverse().join("");
}

// console.log(isPalindrome(abaa));

// ------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------
// Given a string find the first non-repeating character and return its index if it  doesn't exist return -1
// find a unique of triplets that sums up to 0
var threeSome = (nums) => {
  let output = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let total = nums[i] + nums[left] + nums[right];
      if (total === 0) {
        output.push([nums[i], nums[left], nums[right]]);
        right--;
        left++;
      } else if (total > 0) right--;
      else left++;
    }
  }
  return output;
};

// console.log(threeSome([1, 2, -2, 4, 0, -4]), "threeSome");

function firstUniqueChar(s) {
  const hashTabel = {};
  for (let char of s) {
    if (hashTabel[char]) hashTabel[char]++;
    else hashTabel[char] = 1;
  }
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (hashTabel[char] == 1) return i;
  }
  return -1;
}

// console.log(firstUniqueChar("aabc"));

const firstUniqueCharacter = (s) => {
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (s.indexOf(char) === s.lastIndexOf(char)) return i;
  }
  return -1;
};

// console.log(firstUniqueCharacter("aabc"), "First Unique Character");

// ------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------
// Given a group of strings, return the string grouped by anagram

var groupAnagrams = (strs) => {
  const ht = {};
  for (let str of strs) {
    const sorted = str.split("").sort().join("");
    if (ht[sorted]) ht[sorted].push(str);
    else ht[sorted] = [str];
  }
  return Object.values(ht);
};

// console.log(groupAnagrams(["aba", "aab", "acc", "dfg"]));

// ------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------

// Give a string determine whether it is a palindrome

var isPalindrome2 = (x) => {
  const palindrome = x.replace(/[^\w]/gi, "").toLowerCase();
  return palindrome === palindrome.split("").reverse().join("");
};

const isPalindrome3 = (str) => {
  const palindrome = str.replace(/[^\w]/gi, "").toLowerCase();
  var left = 0;
  var right = palindrome.length - 1;
  while (left < right) {
    if (palindrome[left] !== palindrome[right]) return false;
    left++;
    right--;
  }
  return true;
};

// console.log(isPalindrome2("ax  sa"));

// ------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------

// Valid parentheses

const isValid = (s) => {
  const stack = [];
  const pairs = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  for (let char of s) {
    if (char in pairs) stack.push(char);
    else {
      if (stack.length === 0) return false;
      const last = stack.pop();
      if (pairs[last] !== char) return false;
    }
  }
  if (stack.length) return false;
  else return true;
};

// console.log(isValid("[()"));

// ------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------
const searchInesrt = (nums, target) => {
  let lo = 0;
  let hi = nums.length - 1;
  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    let midVal = nums[mid];
    if (midVal === target) return mid;
    else if (target > midVal) lo = mid + 1;
    else hi = mid - 1;
  }
  return lo;
};
// console.log(searchInesrt([1, 2, 3, 4, 5, 7], 6));
