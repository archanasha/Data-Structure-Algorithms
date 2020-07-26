// 1-->10-->5-->21

class Node {
    constructor(value, next, previous) {
        this.value = value;
        this.next = next;
        this.previous = previous
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = new Node(value, null, null)
        this.tail = this.head;
        this.length = 1;
    }

    prepend(value) {
        const newNode = new Node(value, this.head, null);
        const currentNode = this.head;
        currentNode.previous = newNode;
        this.head.previous = newNode;
        this.head = newNode
        this.length++;
        return this;
    }

    append(value) {
        const nextNode = new Node(value, null, this.tail);
        this.tail.next = nextNode;
        this.tail = nextNode;
        this.length++;
        return this;
    }

    printList() {
        const arr = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return arr;
    }

    insert(index, value) {
        if (index === 0) {
            this.prepend(value);
            this.length++;
            return this.printList();
        } else if (index >= this.length) {
            this.append(value);
            this.length++;
            return this.printList();
        } else {
            const newNode = new Node(value, null);
            const leader = this.traverseNode(index - 1);
            const follower = leader.next;
            leader.next = newNode;
            newNode.previous = leader;
            newNode.next = follower;
            follower.previous = newNode;
            this.length++;
            return this.printList();
        }
    }

    remove(index) {
        if (index === 0) {
            let removeNode = this.head;
            this.head = removeNode.next;
            this.length--;
            return this.printList();
        } else if (index <= this.length) {
            let previousNode = this.traverseNode(index - 1);
            let removeNode = previousNode.next;
            previousNode.next = removeNode.next;
            this.length--;
            return this.printList();
        }
        return undefined;
    }

    traverseNode(index) {
        let count = 0;
        let currentNode = this.head;
        while (count !== index) {
            currentNode = currentNode.next;
            count++;
        }
        return currentNode;
    }
}
const linkedList = new DoublyLinkedList(10);
linkedList.append(5);
linkedList.append(21);
linkedList.prepend(1);
linkedList.insert(2, 33);
linkedList.insert(12, 50);
console.log('before remove: ', linkedList.printList());
// // linkedList.remove(0);
// linkedList.remove(2);
// console.log('after remove: ', linkedList.printList());
console.log('before: ', linkedList);