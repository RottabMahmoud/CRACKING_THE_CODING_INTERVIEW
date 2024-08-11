// 26. Remove Duplicates from Sorted Array
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears
// only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

var removeDuplicates = function (nums) {
  let k = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[k]) {
      k++;
      nums[k] = nums[i];
    }
  }

  return k + 1;
};

// 169. Majority Element
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always
// exists in the array.

var majorityElement = function (nums) {
  let obj = {};

  for (let num of nums) {
    if (obj[num]) obj[num]++;
    else obj[num] = 1;

    if (obj[num] > Math.floor(nums.length / 2)) return num;
  }

  return "error";
};
// Time O(n), Space O(1)

let array = [1, 1, 1, 1, 1, 5, 6, 7];

console.log(majorityElement(array)); // 5

// 121. Best Time to Buy and Sell Stock
// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to
// sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

const maxProfit = (prices) => {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let price of prices) {
    if (price < minPrice) minPrice = price;
    let profit = price - minPrice;
    if (profit > maxProfit) maxProfit = profit;
  }

  return maxProfit;
};

// 58. Length of Last Word
// Given a string s consisting of words and spaces, return the length of the last word in the string.

var lengthOfLastWord = function (s) {
  const arrayOfStrings = s.trim().split(" ");

  return arrayOfString[arrayOfStrings.length - 1].length;
};

// Time and Space O(n)

// 28. Find the Index of the First Occurrence in a String
// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack,
// or -1 if needle is not part of haystack.

var strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};

// Time O(n), Space O(1)

// 392. Is Subsequence
// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

var isSubsequence = function (s, t) {
  let index = 0;

  for (let char of t) {
    if (index < t.length && s[index] === char) index++;
  }

  return index === s.length;
};

// Time O(n), Space O(1)

// 167. Two Sum II - Input Array Is Sorted

var twoSum = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum === target) return [left + 1, right + 1];
    else if (sum < target) left++;
    else right--;
  }
  return null;
};
// Time O(n), Space O(1)

// 15. 3Sum
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

var threeSum = (nums) => {
  nums.sort((a, b) => a - b);
  let result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;

        while (left < right && nums[left] === nums[left - 1]) left++;
        while (left < right && nums[right] === nums[right + 1]) right--;
      } else if (sum < 0) left++;
      else right--;
    }
  }
  return result;
};

// 242. Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
var isAnagram = function (s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("");
};

// Time O(n log n), Space O(n)

// 202. Happy Number
// Write an algorithm to determine if a number n is happy.
// A happy number is a number defined by the following process:
// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

const isHappy = (n) => {
  let set = new Set();

  while (!set.has(n)) {
    set.add(n);
    let sum = 0;
    while (n > 0) {
      let digit = n % 10; // get the last digit
      sum += digit * digit; // accumlate the sum of the digits squared
      n = Math.floor(n / 10); // remove the last digit
    }
    n = sum;
  }

  return n === 1;
};
// Time O(log n), Space O(log n)

// 219. Contains Duplicate II
// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that
// nums[i] == nums[j] and abs(i - j) <= k.

const containsNearbyDuplicate = (nums, k) => {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (map.has(num) && i - map.get(num) <= k) return true;

    map.set(num, i);
  }

  return false;
};

// Time and Space: O(n)


