
class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        // if (!this.top) {
        //     return null;
        // }
        return this.top.value;
    }

    push(value) {
        const newNode = new Node(value, null);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holder = this.top;
            this.top = newNode;
            this.top.next = holder;
        }
        this.length++;
        return this;
    }

    printStack() {
        const list = [];
        while (this.top) {
            list.push(this.top.value);
            this.top = this.top.next;
        }
        return list;
    }
    pop() {
        if (!this.top) {
            return null;
        }
        if (this.top === this.bottom) {
            this.bottom = null;
        }
        this.top = this.top.next;
        this.length--;
        return this
    }

}

const stack = new Stack();
stack.push('first');
stack.push('second');
stack.push('third');
console.log('stack peek: ', stack.peek());
console.log('stack: ', stack);
console.log('stack pop1: ', stack.pop());
console.log('stack pop2: ', stack.pop());
// console.log('stack pop3: ', stack.pop());


