// 8.1 Teiple Step: A child is running up a storage with n steps and can hop either 1 step, 2 steps, or 3 steps at a time,
// Implement a method to count how many possible ways the child can run up the stairs.

// 8.2 Robot in a Grid: Imagine a robot sitting on the upper left corner of grid with r rows and c columns.
// The robot can only move in two directions, right and down, but certain celss are "off limits" such that the robot cannot step on
// them. Design an algorithm to find a path for the robot from the top left to the bottom right.

// 8.3 Magic Index: A magic index in an array A[0...n-1] is defined to be an index such that A[i] = i. Given a sorted array of distinct integers, write a
// method to find a magic index, if one exists, in array A.
// FOLLOW UP
// What if the values are not distinct?

// 8.4 Power Set: Write a method to return all subsets of a set.

// 8.5 Recursive Multiply: Write a recursive function to multiply two positive integers without using the * operator.
// You can use addition, subtraction, and bit shifting, but you should minimize the number of those operations.

// 8.7 Permutations without Dups: Write a method to compute all permutations of a string of unique characaters.

// 8.8 Permutations with Dups: Write a method to compute all permutations of a string whose characters are not necessarily unique.
// The list of permutations should not have duplicates.

// 8.9 Parens: Implement an algorithm to print all valid (e.g., properly openend and closed) combinations of n pairs of parentheses.

// 8.10 Paint Fill: Implement the "paint fill" function that one might see on many image editing programs.

// 8.11 Coins: Given an infinite number of quarters (25 cents), dimes (10 cents), nickels (5 cents), and pennies (1 cent), write code to calculate
// number of ways of representing n cents.

// 8.12 Eight Queens: Write an algorithm to print all ways of arranging eight queens on an 8x8 chess board so that none of them share
// the same row, column, or diagnoal. In this case, "Diagnoal" means all diangonals, not just the two that bisect the board/

// 8.13 Stack of Boxes: You have a stack of n boxes, with widths w, heights h, and depths d. The boxes cannot be roated and can only be
// stacked on top of one another if each box in the stack is strictly
// larger than the box above it in width, height, and depth.
// Implement a method to compute the height of the tallest possible stack. The height of a stack is the sum of the heights of each box.

// 8.14 Boolean Evaluation: Given a boolean expression consisting of the symbols 0 (false), 1 (true), & (AND), | (OR), and ^ (XOR),
// and desired boolean result value result, Implement a function to count the number of ways of parenthesizing the expression such that it evaluates
// to result.

// LeetCode #121
// BUY AND SELL STOCK

const maxProfit = (prices) => {
  let lowestPrice = Number.MAX_SAFE_INTEGER;
  let maxProfit = 0;

  for (let price of prices) {
    if (price < lowestPrice) lowestPrice = price;
    let profit = price - lowestPrice;
    if (profit > maxProfit) maxProfit = profit;
  }

  return maxProfit;
};

// TIme O(n), space O(1)

console.log(maxProfit([7, 1, 5, 3, 6, 4, 10, 20, 4, 5, 6]));

// Leetcode #322 Coin Change

const coinChange = (coins, amount) => {
  const dp = Array(amount + 1).fill(Number.MAX_SAFE_INTEGER);
  dp[0] = 0;
  for (let i = 0; i < dp.length; i++) {
    for (let coin of coins) {
      if (coin <= i) dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }

  const minCoin = dp[amount];
  return minCoin === Number.MAX_SAFE_INTEGER ? -1 : minCoin;
};
// TIme O(n*k), space O(n)

// LEETCODE: #1143. Longest Common Subsequence

const longestCommonSubsequence = (text1, text2) => {
  const m = text1.length;
  const n = text2.length;
  const dp = Array(m + 1)
    .fill(null)
    .map(() => Array(n + 1).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (text1[i] === text2[j]) {
        dp[i + 1][j + 1] = dp[i][j] + 1;
      } else {
        dp[i + 1][j + 1] = Math.max(dp[i + 1][j], dp[i][j + 1]);
      }
    }
  }

  return dp[m][n];
};

// Example usage:
// console.log(longestCommonSubsequence("abcde", "ace")); // Output: 3 ("ace")
// console.log(longestCommonSubsequence("abc", "def")); // Output: 0

const subsets = (arr) => {
  const result = [[]];
  for (let num of arr) {
    const newSubsets = result.map((subset) => [...subset, num]);
    result.push(...newSubsets);
  }
  return queue;
};
