// Your task is based on the game Dominoes, write a prorgam to check whether a pool domino tiles can be aligned in a correct domino row,
// given a start and an end value, Each domino tile has two numbers on it. you can connect them by their ends if the number on the touhing
// halbes is the same. a tile can also be reversed to align it.
// Wite a function with the following signature, hasSolution(start, end, pool). it takes a start value, an end value, and a pool of tiles.
// It should return true if all tiles can be aligned in a correct domino row from start to end value. if there is no possible solution,
// it should return false. It is not allowed to leave out a tile.

const dominos = [
  { start: 6, end: 4 },
  { start: 4, end: 2 },
  { start: 2, end: 1 },
  { start: 1, end: 2 },
];

const hasSolution = (start, end, pool) => {
  // Base case: if there are no more tiles left, check if the current start equals the end
  if (pool.length === 0) {
    return start === end;
  }

  // Try each tile in the pool
  for (let i = 0; i < pool.length; i++) {
    const [left, right] = pool[i];

    // Try to connect the tile normally
    if (start === left) {
      const remainingTiles = pool.slice(0, i).concat(pool.slice(i + 1));
      if (hasSolution(right, end, remainingTiles)) {
        return true;
      }
    }

    // Try to connect the tile reversed
    if (start === right) {
      const remainingTiles = pool.slice(0, i).concat(pool.slice(i + 1));
      if (hasSolution(left, end, remainingTiles)) {
        return true;
      }
    }
  }

  // If no valid sequence is found, return false
  return false;
};

// Example usage:
const pool1 = [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
];
console.log(hasSolution(1, 5, pool1)); // Should return true

const pool2 = [
  [1, 3],
  [3, 2],
  [2, 4],
  [4, 5],
];
console.log(hasSolution(1, 5, pool2)); // Should return true

const pool3 = [
  [1, 2],
  [3, 4],
  [5, 6],
];
console.log(hasSolution(1, 6, pool3)); // Should return false
