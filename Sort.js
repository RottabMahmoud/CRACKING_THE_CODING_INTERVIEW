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

console.log(mergeSort(nums)); // [1, 1, 2, 5, 6, 6, 8]
