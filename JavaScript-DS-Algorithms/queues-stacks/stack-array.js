
class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next
    }
}

class StackArray {
    constructor() {
        this.array = [];
    }

    peek() {
        return this.array[this.array.length - 1];
    }

    push(value) {
        this.array.push(value)
        return this;
    }

    pop() {
        // this.array.splice(this.array.length - 1, 1);
        this.array.pop();
        return this;
    }

}

const stack = new StackArray();
stack.push('first');
stack.push('second');
stack.push('third');
console.log('stack peek: ', stack.peek());
console.log('stack before: ', stack);
stack.pop()
stack.pop()
console.log('stack after: ', stack);

// console.log('stack pop2: ', stack.pop());

// console.log('stack pop3: ', stack.pop());


