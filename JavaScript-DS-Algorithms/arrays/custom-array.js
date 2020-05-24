
// create a array class
class CustomArray {

    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    getAll() {
        return this.data;
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop() {
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }
    
    removeAt(index) {
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }

    shiftItems(index) {
        for (let i = index; i < this.length-1; i++) {
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
    }


}

const customArray = new CustomArray();

console.log('custom push1', customArray.push('hi'));
console.log('custom push2', customArray.push('arch'));
console.log('custom push2', customArray.push('Guten Morgen!'));

// console.log('custom get', customArray.get(0));
// console.log('custom getAll before', customArray.getAll());
// console.log('custom pop', customArray.pop());
console.log('removeAt', customArray.removeAt(0));
console.log('custom getAll after', customArray);


// console.log('custom get', customArray.push('hi', 'arch'));


