// 3.1 Three in One: Descrive how you could use a single array to implement three stacks.

class ThreeStacks {
  constructor(size) {
    this.size = size;
    this.arr = new Array(size * 3); // Single array to hold all three stacks
    this.top1 = -1; // Top index for stack 1
    this.top2 = size - 1; // Top index for stack 2
    this.top3 = 2 * size - 1; // Top index for stack 3
  }

  push(stackNum, value) {
    if (stackNum === 1) {
      if (this.top1 + 1 >= this.size) throw new Error("Stack 1 Overflow");
      this.arr[++this.top1] = value;
    } else if (stackNum === 2) {
      if (this.top2 + 1 >= 2 * this.size) throw new Error("Stack 2 Overflow");
      this.arr[++this.top2] = value;
    } else if (stackNum === 3) {
      if (this.top3 + 1 >= 3 * this.size) throw new Error("Stack 3 Overflow");
      this.arr[++this.top3] = value;
    } else {
      throw new Error("Invalid Stack Number");
    }
  }

  pop(stackNum) {
    if (stackNum === 1) {
      if (this.top1 < 0) throw new Error("Stack 1 Underflow");
      return this.arr[this.top1--];
    } else if (stackNum === 2) {
      if (this.top2 < this.size) throw new Error("Stack 2 Underflow");
      return this.arr[this.top2--];
    } else if (stackNum === 3) {
      if (this.top3 < 2 * this.size) throw new Error("Stack 3 Underflow");
      return this.arr[this.top3--];
    } else {
      throw new Error("Invalid Stack Number");
    }
  }

  peek(stackNum) {
    if (stackNum === 1) {
      if (this.top1 < 0) throw new Error("Stack 1 Empty");
      return this.arr[this.top1];
    } else if (stackNum === 2) {
      if (this.top2 < this.size) throw new Error("Stack 2 Empty");
      return this.arr[this.top2];
    } else if (stackNum === 3) {
      if (this.top3 < 2 * this.size) throw new Error("Stack 3 Empty");
      return this.arr[this.top3];
    } else {
      throw new Error("Invalid Stack Number");
    }
  }
}

// Example Usage
const stacks = new ThreeStacks(10);
stacks.push(1, 1); // Push to Stack 1
stacks.push(2, 2); // Push to Stack 2
stacks.push(3, 3); // Push to Stack 3
console.log(stacks.pop(1)); // Pop from Stack 1
console.log(stacks.peek(2)); // Peek Stack 2

// 3.2 Stack Min: How would you design a stack which, in addition to push and pop, has a function min which returns the minimum
// element Push, pop and min should all operate in O(1) time.

class StackWithMin {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(value) {
    // Push the value onto the stack
    this.stack.push(value);

    // Update the minimum stack
    if (this.minStack.length === 0) {
      this.minStack.push(value);
    } else {
      this.minStack.push(
        Math.min(value, this.minStack[this.minStack.length - 1])
      );
    }
  }

  pop() {
    if (this.stack.length === 0) {
      throw new Error("Stack is empty");
    }

    // Pop value from both stacks
    this.minStack.pop();
    return this.stack.pop();
  }

  min() {
    if (this.stack.length === 0) {
      throw new Error("Stack is empty");
    }
    // THe top level of the min stack has the minimum value
    return this.minStack[this.minStack.length - 1];
  }
}

// 3.3 Stack of Plates: Imagine a (literal) stack of plates. If the stack gets too high, it might topple.
// therefore, in real life, we would likely start a new stack when the previous stack exceeds some threshold. Implement a data structure
// SetOfStacks that mimics this. SetOfStacks should be composed of several stacks and should create a new stack once the previous once
// exceeds capacity.
// SetOfStacks.push() and SetOfStacks.pop() should behave identically to a single stack (that is, pop() should return the same values
// as it would if there were just a single stack).
// Implement a function popAt(int index) which performs a pop operation on a specific sub-stack.

// 3.4 Queue via Stacks: Implement a MyQueue class which implements a queue using two stacks.

class MyQueue {
  constructor() {
    this.stack1 = []; // Stack for enqueue operations
    this.stack2 = []; // Stack for dequeue operations
  }

  // Enqueue

  enqueue(value) {
    this.stack1.push(value);
  }

  // Dequeue

  dequeue(value) {
    if (this.stack2.length === 0) {
      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop());
      }
    }

    if (this.stack2.length === 0) {
      throw new Error("Queue is empty");
    }

    return this.stack2.pop();
  }

  // Peek operation: Get the front element
  peek() {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }

    if (this.stack2.length === 0) {
      throw new Error("Queue is empty");
    }
    return this.stack2[this.stack2.length - 1];
  }

  //   Check if queue is empty

  isEmpty() {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }
}
// Usage Example
const myQueue = new MyQueue();
myQueue.enqueue(1);
myQueue.enqueue(2);
console.log(myQueue.peek()); // Output: 1
console.log(myQueue.dequeue()); // Output: 1
console.log(myQueue.isEmpty()); // Output: false

// 3.5 Sort Stack: Write a program to sort a stack such that the smallest items are on the top. You can use an additional temporary
// stack, but you may not copy the elements into any other data structure (such as an array). The stack supports the following operations
// push, pop, peek, and isEmpty.

class Stack {
  constructor() {
    this.stack = [];
  }

  push(value) {
    this.stack.push(value);
  }

  pop() {
    if (!this.stack.length) return "Array is empty";
    return this.stack.pop();
  }
  isEmpty() {
    return this.stack.length === 0;
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }
  size() {
    return this.stack.length;
  }
}

const sortStack = (stack) => {
  const tempStack = new Stack();

  while (!stack.isEmpty()) {
    // Pop the top element from the original stack
    let current = stack.pop();

    // While temporary stack is not empty and top of the temp stack is greater than current
    while (!tempStack.isEmpty() && tempStack.peek() > current) {
      stack.push(tempStack.pop());
    }
    // Push the current element onto the temporary stack
    tempStack.push(current);
  }
  // Transfer elements back to the original stack
  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop());
  }
};
// Usage Example
const stack = new Stack();
stack.push(3);
stack.push(1);
stack.push(4);
stack.push(2);

console.log("Original stack:");
console.log(stack.stack);

sortStack(stack);

console.log("Sorted stack:");
console.log(stack.stack); // Output: [1, 2, 3, 4]

// 3.6 Animal Shelter: An animal shelter, which holds only dogs and cats, operates on a strictly "first in, first out" basis.
// People must adopt either the "oldest" (based on arrival time) of all animals at the shelter, or they can select whether they would prefer
// a dog or a cat (and will receive the oldest animal of that type). They cannot select which specific animal they would like.
// Create the data structures to maintain this system and implement operations such as enqueue, deququeAny, dequeueDog, and
// dequeueCat. You may use the built in LinkedList data structure.

class Animal {
  constructor(type, order) {
    this.type = type;
    this.order = order; // For FIFO, keep track of the order
  }
}

class AnimalShelter {
  constructor() {
    this.animals = []; // This will be the main queue
    this.dogs = []; // Queue for dogs
    this.cats = []; // Queue for cats
    this.order = 0; // Order counter to maintain insertion order
  }

  // Enqueue an animal
  enqueue(type) {
    const animal = new Animal(type, this.order++);
    this.animals.push(animal);
    if (type === "dog") {
      this.dogs.push(animal);
    } else if (type === "cat") {
      this.cats.push(animal);
    }
  }

  // Dequeue any animal
  dequeueAny() {
    if (this.animals.length === 0) {
      throw new Error("No animals in the shelter");
    }

    const animal = this.animals.shift();
    if (animal.type === "dog") {
      this.dogs.shift();
    } else if (animal.type === "cat") {
      this.cats.shift();
    }

    return animal;
  }

  // Dequeue a dog
  dequeueDog() {
    if (this.dogs.length === 0) {
      throw new Error("No dogs in the shelter");
    }

    const dog = this.dogs.shift();
    this.animals = this.animals.filter((animal) => animal !== dog);
    return dog;
  }

  // Dequeue a cat
  dequeueCat() {
    if (this.cats.length === 0) {
      throw new Error("No cats in the shelter");
    }

    const cat = this.cats.shift();
    this.animals = this.animals.filter((animal) => animal !== cat);
    return cat;
  }
}

// Usage Example
const shelter = new AnimalShelter();
shelter.enqueue("dog");
shelter.enqueue("cat");
shelter.enqueue("dog");
shelter.enqueue("cat");

console.log(shelter.dequeueAny()); // Should return the oldest animal, 'dog'
console.log(shelter.dequeueDog()); // Should return the oldest dog
console.log(shelter.dequeueCat()); // Should return the oldest cat
console.log(shelter.dequeueAny()); // Should return the next oldest animal

const a = { name: "Dog" };
const b = { name: "Dog" };

console.log(a === b, "WHAT");
