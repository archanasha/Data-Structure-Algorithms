
class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first.value;
    }

    enqueue(value) {
        const newNode = new Node(value, null);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last = newNode;
            this.last.next = newNode;
        }
        this.length++;
        return this;
    }

    dequeue() {
        if (!this.first) {
            return null;
        }
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.length--;
        return this
    }

}

const stack = new Stack();
stack.enqueue('first');
stack.enqueue('second');
stack.enqueue('third');
// console.log('stack peek: ', stack.peek());
// console.log('stack before: ', stack);
// stack.dequeue()
console.log('stack after pop: ', stack);




