// Binary Tree, Level Order Travesal: leet code #102
// Given a binary tree , return the level order travesal of its nodes' values. (fromt left to right, level by level)
// Breadth First Search (BFS) using Queues  First In First Out

var levelOrder = (root) => {
  if (!root) return [];
  let queue = [root];
  let levels = [];
  while (queue.length) {
    let size = queue.length;
    let currentLevel = [];

    while (size--) {
      let item = queue.shift();
      currentLevel.push(item.val);
      if (item.left) queue.push(item.left);
      if (item.right) queue.push(item.right);
    }
    levels.push(currentLevel);
  }

  return levels;
};

// Time and Space O(N)

// Depth of Binary Tree, LeetCode #104
// Maximum depth of a binary tree
// Given a binary tree, find its maximum depth.
// The maximum depth is the number of nodes along the longest path from the ROOT node down to the furthest LEAF node.
// Note: a LEAF node is a node without children.

// Depth First Search (DFS) "Deepist first", Last in first out.
// Stack Call

let maxDepth = (root) => {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

// Time Complexity O(n), Space COmplexity O(h) , height of a tree

// Bredth First Search (BFS), using Queues. First in First out

let maxDepthBFS = (root) => {
  if (!root) return 0;

  let queue = [root];
  let depth = 0;
  while (queue.length) {
    let size = queue.length;
    depth++;
    while (size--) {
      let item = queue.shift();
      if (item.left) queue.push(item.left);
      if (item.right) queue.push(item.right);
    }
    return depth;
  }
};

// Time Complexity O(n) linear, Space Complexity O(k) k is the level of the most nodes.

// Validate BST (Binary Search Tree)
// LEETCODE #98
// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

// Pre Order Traversal: Depth First Search.. using Stack.

let isValidBST = (
  root,
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER
) => {
  if (!root) return true;
  if (root.val <= min || root.val >= max) return false;
  return (
    isValidBST(root.left, min, root.val) &&
    isValidBST(root.right, root.val, max)
  );
};
// TIme Complexity O(n), Space COmplexity O(k) k is the height of the tree

// Balanced Binary Tree
// LEETCODE #110
// Given a binary tree, determine if it is height-balanced.

let isBalanced = (root) => {
  if (!root) return true;
  const leftDepth = getDepth(root.left);
  const rightDepth = getDepth(root.right);
  const balanced = Math.abs(leftDepth - rightDepth) <= 1;
  return balanced && isBalanced(root.left) && isBalanced(root.right);
};

let getDepth = (root) => {
  if (!root) return 0;
  return 1 + Math.max(getDepth(root.left), getDepth(root.right));
};
// Time COmplexity O(n^2), Space COmplexity O(n)

// ----------------------------------------------------------------
// Tree Sumarry:
// Level Order, Bredth First Search, by Queue.
// Pre Order Traversal, Depth First Search, by Stack. (Root, Left, Right)
// In Order Traversal, Depth First Search, by Stack.  (Left, Root, Right)
// Post Order Traversal, Depth First Search, by Stack. (Left, Right, Root)

// Cracking the Coding Interview

// 4.1 Route Between Nodes: GIven a directed graph, design an algorithm to find out whether there is a route between two nodes.
class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(source, destination) {
    if (this.adjacencyList.has(source)) {
      this.adjacencyList.get(source).push(destination);
    }
  }

  hasRouteBFS(start, end) {
    if (start === end) return true;

    const queue = [start];
    const visited = new Set();

    while (queue.length) {
      const node = queue.shift();

      if (node === end) return true;

      visited.add(node);

      const neighbors = this.adjacencyList.get(node) || [];
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
        }
      }
    }

    return false;
  }
}

// Example usage:
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");

console.log(graph.hasRouteBFS("A", "D")); // true
console.log(graph.hasRouteBFS("A", "E")); // false

// 4.2 Minimal Tree: Given a sorted (increasing order) array with unique integer elements, write an algorithm to create a binary search tree with minimal height.

// 4.3 List of Depths: Given a binary tree, design an algorithm which creates a linked list of all the nodes at each depth (e.g., if you have a tree with depth D, you'll
// have a D linked lists).

class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const sortedArrayToBST = (nums) => {
  if (nums.length === 0) return null;

  let mid = Math.floor(nums.length / 2);

  let root = new TreeNode(nums[mid]);

  // Recursively build the left and right subtrees

  root.left = sortedArrayToBST(nums.slice(0, mid));
  root.right = sortedArrayToBST(nums.slice(mid + 1));

  return root;
};

// Helper function to print the tree in order (for testing)
function printInOrder(root) {
  if (root === null) {
    return;
  }
  printInOrder(root.left);
  console.log(root.value);
  printInOrder(root.right);
}

// Example usage
const sortedArray = [-10, -3, 0, 5, 9];
const bstRoot = sortedArrayToBST(sortedArray);

// Print the BST to verify
printInOrder(bstRoot); // Output: -10, -3, 0, 5, 9

// 4.4 Check Balanced
const checkBalanced = (root) => {
  if (!root) return true;

  let left = depth(root.left);
  let right = depth(root.right);

  let balanced = Math.abs(left - right) <= 1;

  return balanced && checkBalanced(root.left) && checkBalanced(root.right);
};

// helper function to fetch the depth of a tree.
const depth = (root) => {
  if (!root) return 0;

  return 1 + Math.max(depth(root.left), depth(root.right));
};

// 4.5 Validate BST: Given a binary tree, design an algorithm to check whether it is a valid binary search tree (BST).

const validateBST = (
  root,
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER
) => {
  if (!root) return true;
  if (root.val <= min || root.val >= max) return false;

  return (
    validateBST(root.left, min, root.val) &&
    validateBST(root.right, root.val, max)
  );
};

// 4.6 Successor: Write an algorithm to find the "next" node (i.e., in-order successor) of a given node in a binary search tree. You may assume that each node has a link
// to its parent.

// 4.8 First Common Ancestor: Design an algorithm and write code to find the first common ancestor of two nodes in a binary tree. Avoid storing additional nodes
// in a data structure. NOTE: This is not necessarily a binary search tree.

const firstCommonAncestor = (root, q, p) => {
  if (!root || root === p || root === q) return root;

  let left = firstCommonAncestor(root.left, q, p);
  let right = firstCommonAncestor(root.right, q, p);

  if (left && right) return root;

  return left ? left : right;
};

// 4.9 BST Sequences: A binary search tree was created by traversing through an array from left to right and inserting each element. Given a binary search tree with
// distinct elements, print all possible arrays that could have led to this tree.

// 4.10 Check Subtree: T1 and T2 are two very large binary trees, with T1 much bigger than T2. Create an algorithm to determine if T2 is a subtree of T1.
// A tree T2 is a subtree of T1 if there exists a node n in T1 such that the subtree of n is identical to T2.
// That is, if you cut off the tree at node n, the two trees would be identical.

// A function to check if 2 trees are identical
const isIdentical = (tree1, tree2) => {
  if (!tree1 && !tree2) return true;
  if (!tree1 || !tree2) return false;

  return (
    tree1.value === tree2.value &&
    isIdentical(tree1.left, tree2.left) &&
    isIdentical(tree1.right, tree2.right)
  );
};

// Function to check if T2 is a subtree of T1

const isSubTree = (T1, T2) => {
  if (!T2) return true;
  if (!T1) return false;

  //   Helper function to Traverse T1 and check for subtree
  const checkSubTree = (root) => {
    if (!root) return false;
    if (isIdentical(root, T2)) return true;
    return checkSubTree(root.left) || checkSubTree(root.right);
  };

  return checkSubTree(T1);
};

// 4.11 Random Node: You are implementing a binary tree class from scratch which, in addition to insert, find and delete, has a method getRandomNode() which returns
// a random node from the tree. All nodes should be equally likely to be chosen. Design and implement an algorithm for getRandomNode, and explain how you would
// implement the rest of the methods.

// 4.12 Paths with Sums: You are given a binary tree in which each node contains an integer value (which might be positive or negative). Design an algorithm to count the
// number of paths that sum to a given value. The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes
// to childn nodes).
