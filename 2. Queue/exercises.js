/*
QUEUE
Abstract data type
FIFO - First in, first out
Collection of elements with enqueue and dequeue operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.
DO NOT use an array and the native push/shift method in your implementation. Use an object as the underlying data structure.

1. Implement Queue Data Structure using String
  Operations you need to add are
    * enqueue(value) - add a new value and returns the size of the storage
    * isEmpty() - returns true if the storage is empty
    * dequeue() - remove one element and returns the deleted element
    * peek() - displays the latest element in the storage
    * size() - the size of the storage
*/

// String implementation
// class Queue {
//   constructor(limit) {
//     this._storage = ""; // String Implementation
//     this.limit = limit;
//     this.count = 1;
//   }

//   isEmpty() {
//     if (this._storage.length === 0) {
//       return 'Queue is empty';
//    } else {
//       return 'Queue is not empty';
//    }
//   }

//   enqueue(value) {
//     if (this._storage.length >= this.limit) {
//       return 'Max capacity already reached!!';
//     } else {
//       this._storage += '*' + value;
//     }
//     return this.count++;
//   }

//   dequeue() {
//     let str = this._storage.split("*");
//     if(str[0].length==0)str.splice(0,1);
//     let poppedItem = str.slice(0, 1);
//     this._storage = str.join("*");
//     console.log(poppedItem);
//   }

//   peek() {
//     return this._storage.split('*').slice(1);
//   }

//   size() {
//     return this._storage.split('*').length;
//   }
// }

// Object Implementation
class Queue {
  constructor(limit) {
    this._storage = {}; // Object Implementation
    this.limit = limit;
    this.count = 1;
  }
  isEmpty() {
    if (Object.keys(this._storage).length === 0) {
      return 'Queue is empty';
    } else {
      return 'Queue is not empty';
    }
  }
  enqueue(value) {
    let key = Object.keys(this._storage);
    if (key.length >= this.limit) return 'Max capacity already reached!!';

    let lastKey;
    if (key.length) {
      lastKey = Number(key[key.length]) + 1
    } else {
      lastKey = 0;
    }
    this._storage[lastKey] = value;
    return this.count++;
  }
  dequeue() {
    let value = Object.values(this._storage);
    let obj = {};
    for (var i = 1; i < value.length - 1; i++) {
      obj[i - 1] = value[i];
    }
    this._storage = obj;
  }
  peek() {
    let key = Object.keys(this._storage);
    return this._storage[key[0]];
  }
  size() {
    let key = Object.keys(this._storage);
    return key.length;
  }
  contains(value) {
    if(Object.values(this._storage).includes(value)) {
      return true;
    }
    return false;
  }
}

/*
Implement all above methods using Object data type
  Additionals:
    1. Modify your queue to take max capacity as a parameter and once you exceed the size it should
    print message "Max capacity already reached"
    2. Make a method named 'contains' which will return true if any of the value matches the value of object.
    queue.contains('hello') - true or false
    3. Write a method named sort() which sorts by value
*/

// Use for testing
var myQueue = new Queue(3);
console.log(myQueue.enqueue('a'), 'should be 1');
console.log(myQueue.enqueue('b'), 'should be 2');
console.log(myQueue.enqueue('c'), 'should be 3');
console.log(myQueue.enqueue('d'), 'should be Max capacity reached');
console.log(myQueue.dequeue(), 'should be a');
console.log(myQueue.size(), 'should be 2');
console.log(myQueue.peek(), 'should be b');
console.log(myQueue.size(), 'should be 2');
console.log(myQueue.contains('b'), 'should be true');
console.log(myQueue.contains('d'), 'should be false');
console.log(myQueue._storage, myQueue._head);
console.log(myQueue.until('b'), 'should be 1');
console.log(myQueue.until('c'), 'should be 2');
console.log(myQueue.until('d'), 'should be null');
