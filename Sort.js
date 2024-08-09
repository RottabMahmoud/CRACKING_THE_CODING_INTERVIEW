const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  left = mergeSort(left);
  right = mergeSort(right);

  let block = [];
  let l = 0;
  let r = 0;

  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      block.push(left[l]);
      l++;
    } else {
      block.push(right[r]);
      r++;
    }
  }

  // Concatenate remaining elements
  block = [...block, ...left.slice(l), ...right.slice(r)];

  return block;
};

// Time Complexity O(n log n),

let nums = [5, 2, 1, 6, 1, 6, 8];

// console.log(mergeSort(nums)); // [1, 1, 2, 5, 6, 6, 8]
console.log("SAP");

const findBestMatch = (nikkiStart, nikkiEnd, employees) => {
  let bestMatch = null; // To store the best matching employee
  let maxOverLap = 0; // To keep track of the max overlap time

  // Loop through each employee availability
  for (let employee of employees) {
    const { name, start, end } = employee;

    // Calculate overlap time between Nikki's time and this employee's time
    const overlapStart = Math.max(nikkiStart, start);
    const overlapEnd = Math.min(nikkiEnd, end);

    const overlapDuration = overlapEnd - overlapStart;

    // Check if the overlap is at least 30 mins
    if (overlapDuration >= 30) {
      // Check if this is the best match based on overlap duration and earliest start time
      if (
        overlapDuration > maxOverLap ||
        (overlapDuration === maxOverLap && start < bestMatch.start)
      ) {
        bestMatch = { name, start, overlapDuration };
        maxOverLap = overlapDuration;
      }
    }
  }

  // If a match is found, return the employee's name; otherwise, return "NO MATCH"
  return bestMatch ? bestMatch.name : "NO MATCH";
};

// Example usage with Nikki's availability
const nikkiStart = 180; // 12:00 PM
const nikkiEnd = 230; // 12:50 PM

const employees = [
  { name: "Dave", start: 150, end: 210 },
  { name: "Mahmoud Rottab", start: 190, end: 250 },
  { name: "Sarah", start: 200, end: 240 },
];

// console.log(findBestMatch(nikkiStart, nikkiEnd, employees), "is a match!"); // Output: Mahmoud Rottab

const optimalArraySplit = (arr) => {
  const l = arr.length;
  if (l < 2) return "Error";

  let totalSum = arr.reduce((a, b) => a + b, 0); // Calculate the total sum of the array
  let leftSum = 0; // Initialize the sum of the left sub-array
  let minDifference = Infinity; // Initialize the minimum as infinity
  let splitPostion = -1; // To keep track of the optimal split position

  for (let i = 0; i < l - 1; i++) {
    leftSum += arr[i]; // Add the current element to the left sub-array sum
    const rightSum = totalSum - leftSum; // Calculate the sum of the right sub-array
    const difference = Math.abs(leftSum - rightSum); // Calculate the absolute difference

    // Check if the current difference is smaller than the minimum difference
    if (difference < minDifference) {
      minDifference = difference;
      splitPostion = i; // Update the optimal split position
    }
  }

  return splitPostion + 1; // Return the optimal split position
};

// Example:
const arr = [17, 3, 5, 12, 0];
console.log(optimalArraySplit(arr)); // Output: 1 or 2
