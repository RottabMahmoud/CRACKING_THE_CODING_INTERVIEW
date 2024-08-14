// 1. HTTP Status Code 200
// Question: What is HTTP status code 200?
// Answer: HTTP status code 200 means "OK." It indicates that the request was successful and the server responded with the requested data.
// 2. Data Structure for LIFO
// Question: Which data structure is suitable for a LIFO (Last In First Out) process?
// Answer: The data structure suitable for LIFO is a stack.
// 3. Nikki's Networking Lunch Matching Program
// Question: Write a program to match Nikki for a 1-1 networking lunch based on availability.
// Answer: Provided a Python solution for matching Nikki with the best available lunch time based on overlap duration and other criteria.
// 4. JavaScript Solution for Nikki's Problem
// Question: Solve the Nikki matching problem in JavaScript, making it look human-written, and optimize it.
// Answer: Provided a JavaScript solution with comments and optimized logic for finding the best match based on availability.
// Problem Description:
// You need to match Nikki for a 1-1 networking lunch based on her availability and the availability of other employees. Each employee’s availability is given as a start and end time in minutes since 9 AM. You need to:

// Find the best match for Nikki based on the overlap between her lunch time and the employees’ lunch times.
// Ensure the overlap is at least 30 minutes.
// If multiple employees have the same overlap duration, select the one who starts their lunch first.
// If multiple employees have the same start time and end time, select the one who sent the invitation first.
// Input:
// Nikki’s availability: Start and end time in minutes since 9 AM.
// An array of employees with their availability: Each entry contains an employee's name, start time, and end time in minutes since 9 AM.
// Output:
// The name of the employee who matches Nikki best for a networking lunch, or "NO MATCH" if no suitable match is found.
// // 5. Use Case for Nikki's Problem
// // Question: Ask for a use case related to the Nikki problem.
// // Answer: Provided a simple use case for Nikki’s problem to illustrate how it could be applied in practice.
// // 6. Structure of the employees Array
// // Question: Clarify the structure of the employees array in the Nikki problem.
// // Answer: The employees array should be an array of objects, where each object contains details such as name, start, and end.
// // 7. Comment on Destructuring Line
// // Question: Comment on the line const [name, start, end] = employee;.
// // Answer: Explained that this line is used to destructure an array (or tuple) into individual variables (name, start, end).

function findBestMatch(nikkiStart, nikkiEnd, employees) {
  let bestMatch = null; // To store the best matching employee
  let maxOverlap = 0; // To keep track of the maximum overlap duration

  // Loop through each employee's availability
  for (const employee of employees) {
    const { name, start, end } = employee;

    // Calculate the overlap between Nikki's time and this employee's time
    const overlapStart = Math.max(nikkiStart, start);
    const overlapEnd = Math.min(nikkiEnd, end);
    const overlapDuration = overlapEnd - overlapStart;

    // Check if the overlap duration is at least 30 minutes
    if (overlapDuration >= 30) {
      // Determine if this employee is a better match
      if (
        overlapDuration > maxOverlap ||
        (overlapDuration === maxOverlap && start < bestMatch.start)
      ) {
        bestMatch = { name, start, overlapDuration };
        maxOverlap = overlapDuration;
      }
    }
  }

  // Return the best match if found, otherwise "NO MATCH"
  return bestMatch ? bestMatch.name : "NO MATCH";
}

// Example usage:
const nikkiStart = 180; // 12:00 PM
const nikkiEnd = 230; // 12:50 PM

const employees = [
  { name: "John", start: 150, end: 210 },
  { name: "Dave", start: 190, end: 250 },
  { name: "Sarah", start: 200, end: 240 },
];

console.log(findBestMatch(nikkiStart, nikkiEnd, employees)); // Output: Dave

// Explanation:
// Initialization: bestMatch keeps track of the best match found so far. maxOverlap tracks the maximum overlap duration.
// Loop through Employees: For each employee, calculate the overlap between Nikki’s and the employee’s lunch times.
// Check Overlap Duration: Ensure the overlap is at least 30 minutes.
// Update Best Match: If the current employee has a larger overlap duration or starts earlier than the previous best match with the same overlap, update bestMatch.
// Return Result: If a suitable match is found, return the employee's name; otherwise, return "NO MATCH".

// 8. Error in Destructuring
// Question: Address the error (TypeError: employee is not iterable) in the code and provide a fix.
// Answer: Corrected the code by ensuring the employees array is an array of objects and updated destructuring accordingly.
// 9. Time Calculation Explanation
// Question: Explain how the time in minutes is calculated from integers like 180 and 230.
// Answer: Explained that integers represent minutes since 9 AM, so 180 minutes is 12:00 PM and 230 minutes is 12:50 PM.
// 10. Time Assumptions in the Problem
// Question: Inquire if the time assumptions were explained in the original problem statement.
// Answer: Confirmed that the time assumptions were not explicitly detailed in the problem but were inferred from the given integers.
// 11. Time Assumption Comment
// Question: Request a comment to add regarding time assumptions for the Nikki problem solution.
// Answer: Provided a comment to explain how times are calculated from minutes since 9 AM.
// 12. Simplify Overlap Duration Check
// Question: Simplify the code snippet checking overlap duration in the Nikki problem.
// Answer: Provided a simplified version of the overlap duration check logic.
// 13. JavaScript Solution for Array Splitting
// Question: Write a JavaScript function to determine where an array should be split so that the difference between the sums of the left and right sub-arrays is minimal.
// Answer: Provided a JavaScript function using a prefix sum approach to find the optimal split point in the array.
// Question:
// Write a JavaScript function to determine where an array should be split so that the difference between the sums of the left and right sub-arrays is minimal. Each sub-array needs to have at least one element.

// Problem Description:
// Given an array of integers, you need to find the position at which the array should be split so that the difference between the sums of the left and right sub-arrays is minimal. Each sub-array (left and right) must contain at least one element.

// Example:
// For the array [17, 3, 5, 12, 0]:

// Splitting at position 1: Left sum = 17, Right sum = 3 + 5 + 12 + 0 = 20, Difference = |17 - 20| = 3
// Splitting at position 2: Left sum = 17 + 3 = 20, Right sum = 5 + 12 + 0 = 17, Difference = |20 - 17| = 3
// Splitting at position 3: Left sum = 17 + 3 + 5 = 25, Right sum = 12 + 0 = 12, Difference = |25 - 12| = 13
// Splitting at position 4: Left sum = 17 + 3 + 5 + 12 = 37, Right sum = 0, Difference = |37 - 0| = 37
// In this example, splitting at positions 1 or 2 yields the smallest difference of 3.

function findOptimalSplit(arr) {
  const n = arr.length;
  if (n < 2) return -1; // Ensure array has at least two elements

  let totalSum = 0;
  let leftSum = 0;
  let minDifference = Infinity;
  let splitIndex = -1;

  // Calculate total sum of the array
  for (const num of arr) {
    totalSum += num;
  }

  // Find the optimal split point
  for (let i = 0; i < n - 1; i++) {
    leftSum += arr[i];
    const rightSum = totalSum - leftSum;
    const difference = Math.abs(leftSum - rightSum);

    if (difference < minDifference) {
      minDifference = difference;
      splitIndex = i;
    }
  }

  return splitIndex + 1; // Return position (1-based index) where the split should occur
}

// Example usage:
const array = [17, 3, 5, 12, 0];
console.log(findOptimalSplit(array)); // Output: 2

// Explanation:
// Initialization: Calculate the total sum of the array. Initialize leftSum to track the sum of elements to the left of the current split point.
// Iterate Over Array: For each possible split point (up to the second-to-last element to ensure both sides have at least one element), update leftSum and calculate the right sum by subtracting leftSum from totalSum.
// Calculate Difference: Compute the absolute difference between the leftSum and rightSum. Track the minimum difference and update the split index accordingly.
// Return Result: The optimal split index is returned as a 1-based index (i.e., the position where the array should be split).

// 14. Relational Database Design Issues
// Question: Identify problems with a relational database design involving customers and orders tables and suggest improvements.
// Answer: Listed issues such as missing primary keys and foreign key constraints, and suggested improvements like adding customer_id and order_id as primary keys and foreign key references.
// 15. Primary Key for Orders Table
// Question: What would be the appropriate primary key for the orders table?
// Answer: Suggested using order_id as the primary key for the orders table.
// 16. Simplify Sentence about Foreign Key Constraints
// Question: Simplify the sentence about adding foreign key constraints to ensure referential integrity.
// Answer: Provided a simplified version of the sentence to explain the need for foreign key constraints.
// 17. Code Snippet Analysis
// Question: What is the output of the provided C++ code snippet, and is it Java? Explain the line cout << ans << endl;.
// Answer: The code snippet is C++ (not Java). The output of the code is the integer value of the largest integer whose square is less than or equal to n. The cout << ans << endl; line prints the result followed by a newline.
