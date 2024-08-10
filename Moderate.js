// 16.1 Number Swapper: Write a function to swap a number in place (that is, without temporary variables).

const swapNumbers = (a, b) => {
  a = a + b; // Step 1: a now holds the sum of a and b... 5+10
  b = a - b; // Step 2: b is now the original value of a
  a = a - b; // step 3: a is now the original value of b
};
// Example usage
let x = 5;
let y = 10;
// [x, y] = swapNumbers(x, y);
// console.log(x, y); // Outputs: 10 5

// 16.2 Word Frequencies: Design a method to find the frequency of occurrences of any given word in a book.
// What if we were running this algorithm multiple times?

const countWordFrequencies = (text) => {
  const words = text.toLowerCase().split(/\s+/);

  // Step 2: Initialize an object to store word frequencies
  const wordCounts = {};
  for (const word of words) {
    if (!wordCounts[word]) wordCounts[word] = 0;
    wordCounts[word] += 1;
  }

  return wordCounts;
};

// Example usage
const bookText = "This is a simple book. This book is just a sample.";
const frequencies = countWordFrequencies(bookText);
// console.log(frequencies);

// 16.3 Intersection: Given two straight line segments (represnted as start point and an end point), compute the point of Intersection, if any.

// 16.4 Tic Tac Win: Design an algorithm to figure out if someone has won a game of tic-tac-toe.

// 16.5 Factorial Zeros: Write an algorithm which computes the number of trailing zeros in n factorial.

const countTrailingZeros = (n) => {
  let count = 0;
  let powerOfFive = 5;

  while (n > powerOfFive) {
    count += Math.floor(n / powerOfFive);
    powerOfFive *= 5;
  }

  return count;
};
const number = 100;
// console.log(
//   `Number of trailing zeros in ${number}! is: ${countTrailingZeros(number)}`
// );

// 16.6 Smallest Difference: Given two arrays of integers, compute the pair of values (one value in each array) with the smallest
// (non-negative) difference. Return the difference.

const smallestDifference = (arr1, arr2) => {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  let i = 0;
  let j = 0;
  let minDiff = Infinity;

  while (i < arr1.length && j < arr2.length) {
    const diff = Math.abs(arr1[i] - arr2[j]);
    minDiff = Math.min(minDiff, diff);
    if (arr1[i] < arr2[j]) i++;
    else j++;
  }

  return minDiff;
};
const array1 = [1, 3, 15, 11, 2];
const array2 = [23, 127, 235, 19, 8];
// console.log(`Smallest difference is: ${smallestDifference(array1, array2)}`);

// 16.7 Number Max: Write a method that finds the maximum of two numbers. You should use if-else or any other comparison operator.

const findMax = (a, b) => {
  return a > b ? a : b;
};

const num1 = 5;
const num2 = 10;
// console.log(`The maximum number is: ${findMax(num1, num2)}`);

// 16.8 English Int: Given any integer, print an English phrase that describes that integer (e.g., "One Thousand, Two Hundred Thirty Four");

// 16.9 Operations: Write a methods to implement the multiply, subtract, and divide operations for integers.
// The results of all these are integers. Use only the add operator;

const multiply = (a, b) => {
  let result = 0;

  let positiveB = Math.abs(b);

  for (let i = 0; i < positiveB.length; i++) {
    result = add(result, a);
  }

  if (b < 0) {
    result = -result;
  }

  return result;
};

// Add two integers
const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  let result = a;

  while (b > 0) {
    result = add(result, -1);
    b = subtract(b, 1);
  }

  return result;
};

const divide = (a, b) => {
  if (b === 0) return "Cannot divide by zero";

  let count = 0;
  let dividend = Math.abs(a);
  const divisor = Math.abs(b);

  while (dividend < divisor) {
    dividend = subtract(dividend, 1);
    count = add(count, 1);
  }
  // If the signs of a and b are different, negate the result
  if (a < 0 !== b < 0) {
    count = -count;
  }
  return count;
};

// 16.10 Living People: Given a list of people with their birth and death years, implement a method to compute the year with most nubmer
// of people alive. You may assume that all people were born between 1900 and 2000 (inclusive). If a person was alive during any
// portion of that year, they should be included in that year's count. For example, Person (birth = 1908, death = 1909) is included
// in the counts for both 1908 and 1909.

// 16.11 Diving Board: You are building a diving board by placing a bunch of planksof wood end to end.
// There are two types of planks, one of length shorter and one of length longer. You must use exactly K planks of wood.
// Write a method to generate all possible lengths for the diving board.

const divingBoard = (shorter, longer, K) => {
  if (K === 0) return [];
  if (shorter === longer) return [K * shorter];

  let lengths = [];

  for (let i = 0; i <= K; i++) {
    const length = i * shorter + (K - i) * longer;
    lengths.push(length);
  }

  return lengths;
};

const shorter = 3;
const longer = 5;
const K = 4;

// console.log(divingBoard(shorter, longer, K)); // Expected output: [12, 14, 16, 18, 20]

// 16.13 Bisect Squares: Given two sqaures on a two dimensional plane, find a line that would cut these two squares in half.
// Assume that the top and the bottom sides of the square run parallel to the x-axis.

const bisectSquares = (square1, square2) => {
  // Helper function to find the center of a square
  function getCenter(square) {
    const centerX = (square.left + square.right) / 2;
    const centerY = (square.top + square.bottom) / 2;
    return { x: centerX, y: centerY };
  }

  // Get the centers of both squares
  const center1 = getCenter(square1);
  const center2 = getCenter(square2);

  // Calculate the slope (m) of the line connecting the centers
  const deltaX = center2.x - center1.x;
  const deltaY = center2.y - center1.y;

  // Special case: If deltaX is 0, the line is vertical
  if (deltaX === 0) {
    return `x = ${center1.x}`; // Vertical line
  }

  const slope = deltaY / deltaX;

  // Using point-slope form to find the line equation: y = mx + b
  const intercept = center1.y - slope * center1.x;

  return `y = ${slope}x + ${intercept}`;
};

// Example usage:
const square1 = { left: 1, right: 5, top: 5, bottom: 1 };
const square2 = { left: 3, right: 7, top: 6, bottom: 2 };

// console.log(bisectSquares(square1, square2));
// Example output: y = 0.5x + 2.5

// 16.14 Best Line: Given a two dimensional graph with points on it, find a line which passes the most number of points.

// 16.16 Sub Sort: Given an array of integers, write a method to find incices m and n such that if you sorted elements m throught n, the entire array would be sorted.
// Minimize n - m(that is, find the smallest such sequence).

// 16.17 Contiguous Sort: You are given an array of integers (both positive and negative).
// FInd the contigous sequence with the largest sum. Return the sum.

const maxContiguousSum = (array) => {
  if (array.length === 0) return 0;

  let maxCurrent = array[0];
  let maxGlobal = array[0];

  for (let i = 1; i < array.length; i++) {
    const currentSum = maxCurrent + array[i];
    maxCurrent = Math.max(array[i], currentSum);
    if (maxCurrent > maxGlobal) maxGlobal = maxCurrent;
  }

  return maxGlobal;
};

const array = [1, -2, 3, 4, -1, 2, 1, -5, 4];
// console.log(maxContiguousSum(array)); // Example output: 7 (Subarray [3, 4, -1, 2, 1])

// 16.21 Sum Swap: Given two array of integers, find a pair value (one value from each array) that you can swap to give the two arrays the same sum.

const findSwapValues = (arr1, arr2) => {
  const sum1 = arr1.reduce((acc, num) => acc + num, 0);
  const sum2 = arr2.reduce((acc, num) => acc + num, 0);

  const diff = (sum1 - sum2) / 2;

  if (diff % 1 !== 0) return null; // if diff is not an integer, then there is no solution

  const set1 = new Set(arr1);

  for (const num2 of arr2) {
    const num1 = num2 + diff;
    if (set1.has(num1)) return [num1, num2];
  }

  return null;
};
// Example usage:
const arr1 = [1, 2, 3, 4, 6];
const arr2 = [5, 6, 7, 8];
// console.log(findSwapValues(arr1, arr2)); // Example output: [4, 3]

// 16.23 Rand7 from Rand5: Implement a method rand7() given rand5(). That is given a method that generates a randomo number between 0 and 4 inclusive, write a method
// that generates a random number between 0 and 6 inclusive.
// Simulate rand5() which returns a random integer between 0 and 4
const rand5 = () => Math.floor(Math.random() * 5);

// Generate a random integer between 0 and 6 using rand5()
const rand7 = () => {
  let num;
  do {
    // Generate a number between 0 and 24
    const row = rand5();
    const col = rand5();
    num = row * 5 + col; // This results in a number between 0 and 24
  } while (num > 20); // Discard numbers outside the range 0 to 20

  return num % 7; // Map to the range 0 to 6
};

// Example usage:
// console.log(rand7()); // Outputs a random number between 0 and 6

// 16.24 Pairs with Sum: Design an algorithm to find all pairs of integers within an array which sum to a specified value.

const findPairs = (nums, target) => {
  const seen = {};
  const pairs = [];

  for (let i = 0; i < nums.length; i++) {
    let want = target - nums[i];
    if (seen[want]) pairs.push([want, nums[i]]);
    seen[nums[i]] = true;
  }

  return pairs;
};
