/*
STACK
Abstract data type
LIFO - Last in, first out
Collection of elements with push and pop operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.
DO NOT use an array and the native push/pop method in your implementation. That's too easy, yeah? =P
Use an object as the underlying data structure.

1. Implement Stack Data Structure using string data type
Operations you need to add are
  isEmpty() - returns true if the storage is empty
  push(value) - add a new value and returns the size of the storage
  pop() - remove one element and returns the deleted element
  peek() - displays the last pushed element in the storage
  size() - the size of the storage
*/

// String Implementation
class Stack {
  constructor(limit) {
    this._storage = "";
    this.limit = limit;
  }
  isEmpty() {
    if (this._storage.length === 0) return "Stack is Empty";
    else return "Stack is not empty"
  }
  push(value) {
    if (this._storage.length >= this.limit) return 'Max capacity already reached';
    else {
      this._storage += "*" + value;
    }
    return value;
  }
  pop() {
    let str = this._storage.split("*");
    let popedItem = str.splice(this._storage.length - 1, 1);
    this._storage =  str.join("*");
    console.log(popedItem);
  }
  peek() {
    return this._storage.split("*").slice(-1);
  }
  size() {
    return this._storage.split("*").length;
  }
}

// Object Implementation

class Stack {
  constructor() {
    this._storage = {};
  }
  isEmpty() {
    if (Object.keys(this._storage).length === 0) {
      return "Stack is empty"
    }
    else {
      return "Stack is not empty";
    }
  }
  push(value) {
    let key = Object.keys(this._storage);
    let lastKey;
    if (key.length) {
      lastKey = Number(key[key.length - 1]) + 1
    } else {
      lastKey = 0;
    }
    this._storage[lastKey] = value;
  }
  pop() {
    let key = Object.keys(this._storage);
    let value = Object.values(this._storage);

    var newObj = {};
    for (let i = 0; i < key.length - 1; i++) {
      newObj[key[i]] = value[i];
      console.log(newObj);
    }
    console.log(newObj);
    this._storage = newObj;
  }
  peek() {
    let key = Object.keys(this._storage);
    let lastKey = key[key.length - 1];
    return `${key[key.length - 1]} : ${this._storage[lastKey]}`
  }
  size() {
    let key = Object.keys(this._storage);
    return key.length;
  }
}


// 2. Implement every method given above using the 'object' data type.
// Additionals:
// Modify your stack to take max capacity as a parameter and once you exceed the size it should print message
// "Max capacity already reached"

// Make a method named 'contains' which will return true if any of the value matches the value of object.
// stack.contains('hello') - true or false

// Use This For Testing

var myStack = new Stack(3);
console.log(myStack.isEmpty()) // true
console.log(myStack.push('a'), 'should be 1');
console.log(myStack.push('b'), 'should be 2');
console.log(myStack.push('c'), 'should be 3');
console.log(myStack.push('d'), 'Max capacity already reached');
console.log(myStack.pop(), 'should be c');
console.log(myStack.size(), 'should be 2');
console.log(myStack.peek(), 'should be b');
console.log(myStack.size(), 'should be 2');
