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
console.log(
  `Number of trailing zeros in ${number}! is: ${countTrailingZeros(number)}`
);

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


