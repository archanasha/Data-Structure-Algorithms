// Implement the following operations of a queue using stacks.

// push(x) -- Push element x to the back of queue.
// pop() -- Removes the element from in front of queue.
// peek() -- Get the front element.
// empty() -- Return whether the queue is empty.
// Example:

// MyQueue queue = new MyQueue();

// queue.push(1);
// queue.push(2);  
// queue.peek();  // returns 1
// queue.pop();   // returns 1
// queue.empty(); // returns false
// Notes:

// You must use only standard operations of a stack -- which means only push to top, peek/pop from top, size, and is empty operations are valid.
// Depending on your language, stack may not be supported natively. You may simulate a stack by using a list or deque (double-ended queue), as long as you use only standard operations of a stack.
// You may assume that all operations are valid (for example, no pop or peek operations will be called on an empty queue).

class QueueWithStacks {
    constructor() {
        this.first = [];
        this.last = [];
    }

    enqueue(value) {
        const length = this.first.length;
        for (let i = 0; i < length; i++) {
            this.last.push(this.first.pop());
        }
        this.last.push(value);
        return this;
    }

    dequeue() {
        const length = this.last.length;
        for (let i = 0; i < length; i++) {
            this.first.push(this.last.pop());
        }
        this.first.pop();
        return this;
    }
    peek() {
        if (this.last.length > 0) {
            return this.last[0];
        }
        return this.first[this.first.length - 1];
    }
}

const myQueue = new QueueWithStacks();
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
console.log('before: ', myQueue);

// console.log('peek: ', myQueue.peek());

// myQueue.dequeue();
// console.log('dequeue: ', myQueue.dequeue());



/**
 * Time: O(1) - amortized for pop/peek
 * Space: O(n)
 * n - # of elements
 */

/**
 * Initialize your data structure here.
 */
function MyQueue() {
    this.front = [];
    this.back = [];
}

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    return this.back.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    if (!this.front.length) {
        while (this.back.length) { // move back to front
            this.front.push(this.back.pop());
        }
    }
    return this.front.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    if (!this.front.length) {
        while (this.back.length) { // move back to front
            this.front.push(this.back.pop());
        }
    }
    return this.front[this.front.length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return !this.front.length && !this.back.length;
};

const queueTest = new MyQueue();
console.log('push 1: ', queueTest.push(1));
console.log('push 2: ', queueTest.push(2));
console.log('peek 1: ', queueTest.peek());
console.log('before: ', queueTest);
console.log('pop: ', queueTest.pop());
console.log('after: ', queueTest);
console.log('empty: ', queueTest.empty());

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = Object.create(MyQueue).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */