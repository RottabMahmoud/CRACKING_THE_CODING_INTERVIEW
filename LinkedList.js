class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// function ListNode(value) {
//   this.value = value;
//   this.next = null;
// }

const node = new ListNode(7);

// console.log(node);

// 2.1 Remove Dups: Write code to remove duplicates from an unsorted linked list.

const removeDups = (head) => {
  if (!head) return head;

  let current = head;
  let seenValues = new Set();
  let prev = null;

  while (current) {
    if (seenValues.has(current.value)) {
      prev.next = current.next;
    } else {
      seenValues.add(current.value);
      prev = current;
    }

    current = current.next;
  }

  return head;
};

const printList = (head) => {
  let current = head;
  let result = [];

  while (current) {
    result.push(current.value);
    current = current.next;
  }
  return result.join(" -> ");
};
// Time Complexity: O(n) Space Complexity: O(n)

// Example usage:
// const node1 = new ListNode(7);
// const node2 = new ListNode(3);
// const node3 = new ListNode(7);
// const node4 = new ListNode(2);
// const node5 = new ListNode(3);

// node1.next = node2;
// node2.next = node3;
// node3.next = node4;
// node4.next = node5;

// console.log("Original list:");
// console.log(printList(node1));

// removeDups(node1);

// console.log("List after removing duplicates:");
// console.log(printList(node1));

// 2.2 Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.

const findKthToLast = (head, k) => {
  if (!head || k <= 0) return null;

  let p1 = head;
  let p2 = head;

  for (let i = 0; i < k; i++) {
    if (!p1) return null;
    p1 = p1.next;
  }

  while (p1) {
    p1 = p1.next;
    p2 = p2.next;
  }

  return p2;
};

// Example usage:
// const node1 = new ListNode(1);
// const node2 = new ListNode(2);
// const node3 = new ListNode(3);
// const node4 = new ListNode(4);
// const node5 = new ListNode(5);

// node1.next = node2;
// node2.next = node3;
// node3.next = node4;
// node4.next = node5;

// const k = 2;
// const kthNode = findKthToLast(node1, k);
// if (kthNode) {
//   console.log(`The ${k}th to last element is ${kthNode.value}`);
// } else {
//   console.log(`The list is shorter than ${k} elements`);
// }

// Time Complexity: O(n) Space Complexity: O(1)

// 2.3 Delete Middle Node: Implement an algorithm to delete a node in the middle of a singly linked list, given only access to that node.

const deleteMiddleNode = (node) => {
  if (!node || !node.next) return false;

  let nextNode = node.next;
  node.value = nextNode.value;
  node.next = nextNode.next;
  return true;
};
// const node1 = new ListNode(1);
// const node2 = new ListNode(2);
// const node3 = new ListNode(3);
// const node4 = new ListNode(4);
// const node5 = new ListNode(5);

// node1.next = node2;
// node2.next = node3;
// node3.next = node4;
// node4.next = node5;

// // Assuming we want to delete node3
// deleteMiddleNode(node3);
// console.log(printList(node1)); // Output: 1 -> 2 -> 4 -> 5

// 2.4 Parition: write code to parition a linked list around a value x, such that all nodes less than x come
// before all nodes greater than or equal to x. If x is container within the list, the values of x only need to be
// after the elements less than x. The Partition element x can appear anywhere in the "right partition"; it
// does not need to appear between the left and right partitions;

// Example
// input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1
// Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8

const partition = (head, x) => {
  if (!head || !head.next) {
    return head; // If the list is empty or has only one node
  }

  let beforeList = new ListNode(0); // Dummy node for nodes < x
  let afterList = new ListNode(0); // Dummy node for nodes >= x
  let beforeTail = beforeList;
  let afterTail = afterList;

  let current = head;

  while (current) {
    if (current.value < x) {
      beforeTail.next = current;
      beforeTail = beforeTail.next;
    } else {
      afterTail.next = current;
      afterTail = afterTail.next;
    }
    current = current.next;
  }

  // Connect the two lists
  afterTail.next = null; // Ensure the end of afterList is null-terminated
  beforeTail.next = afterList.next; // Connect beforeList to afterList

  return beforeList.next; // Skip the dummy node for beforeList
};

// Time Complexity: O(n) Space Complexity: O(1)

//  Example usage:
// const list = new ListNode(3);
// list.next = new ListNode(5);
// list.next.next = new ListNode(8);
// list.next.next.next = new ListNode(5);
// list.next.next.next.next = new ListNode(10);
// list.next.next.next.next.next = new ListNode(2);
// list.next.next.next.next.next.next = new ListNode(1);

// const x = 5;
// console.log("Input:");
// console.log(printList(list));

// const partitionedList = partition(list, x);

// console.log("Output:");
// console.log(printList(partitionedList));

// 2.5 Sum Lists: You are given two non-negative linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

const addTwoNumbers = (l1, l2) => {
  let dummyHead = new ListNode(0);
  let current = dummyHead;
  let p1 = l1,
    p2 = l2;
  let carry = 0;

  while (p1 !== null || p2 !== null) {
    let x = p1 !== null ? p1.val : 0;
    let y = p2 !== null ? p2.val : 0;
    let sum = carry + x + y;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
    if (p1 !== null) p1 = p1.next;
    if (p2 !== null) p2 = p2.next;
  }

  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  return dummyHead.next;
};

// Example usage:
// Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 8 -> 0 -> 7
// let l1 = new ListNode(7);
// l1.next = new ListNode(2);
// l1.next.next = new ListNode(4);
// l1.next.next.next = new ListNode(3);

// let l2 = new ListNode(5);
// l2.next = new ListNode(6);
// l2.next.next = new ListNode(4);

// let sumList = addTwoNumbers(l1, l2);

// console.log("Sum of lists:", printList(sumList)); // Output: 7 -> 8 -> 0 -> 7

// Remove nth node from end of list

const removeNthFromEnd = (head, n) => {
  // 1. measure length
  let length = 1;
  let on = head;

  while (on) {
    length++;
    on = on.next;
  }

  const leftIndex = length - n - 1;
  if (leftIndex === 0) return head.next;
  on = head;
  // 2. point around to delete node
  while (leftIndex-- > 1) {
    on = on.next;
  }
  on.next = on.next.next;
  return head;

  // 3. handle head deleted, if leftIndex is pointing at the head, so we have to remove the head node
};

console.log("Hi, I'm Rottab, a Frontend Software Engineer...");

// 2.8 Loop Detection: Detect Linked List Cycle

const hasCycle = (head) => {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = head.next;
    fast = head.next.next;
    if (slow === fast) return true;
  }
  return false;
};

// Time Complexity O(N), Space Complexity O(1)

// 2.6 Palindrome: Implement a function to check if a linked list is a palindrome.

const isPalindrome = (head) => {
  if (!head || !head.next) return true;

  // Find the middle element of the Linekd List
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = head.next;
    fast = head.next.next;
  }

  // Reverse the second half of the List

  let prev = null;
  while (slow) {
    let next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }

  // Compare the first half with the reversed second half

  let left = head;
  let right = prev;
  while (right) {
    if (left.value !== right.value) return false;
    left = left.next;
    right = right.next;
  }

  return true;
};

// 2. Add Two Numbers
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

var addTwoNumbers = function (l1, l2) {
  let on1 = l1;
  let arr1 = [];
  let on2 = l2;
  let arr2 = [];

  // Traverse the first linked list and store its values in arr1
  while (on1) {
    arr1.push(on1.val);
    on1 = on1.next;
  }

  // Traverse the second linked list and store its values in arr2
  while (on2) {
    arr2.push(on2.val);
    on2 = on2.next;
  }

  // Reverse the arrays to match the correct number format
  arr1 = arr1.reverse();
  arr2 = arr2.reverse();

  // Convert the arrays to strings, then to numbers, and add them
  let number1 = BigInt(arr1.join(""));
  let number2 = BigInt(arr2.join(""));
  let resultNumber = number1 + number2;

  // Convert the result back to an array of digits (in reverse order)
  let resultArray = resultNumber.toString().split("").reverse();

  // Create the resulting linked list
  let newLinkedList = new ListNode(parseInt(resultArray[0]));
  let currentNode = newLinkedList;

  for (let i = 1; i < resultArray.length; i++) {
    currentNode.next = new ListNode(parseInt(resultArray[i]));
    currentNode = currentNode.next;
  }

  return newLinkedList;
};
