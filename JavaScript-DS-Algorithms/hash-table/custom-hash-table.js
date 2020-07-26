

class CustomHashTable {

    constructor(size) {
        this.data = new Array(size)
    }

    _hash(key){
        let hash = 0;
        for (let i=0; i< key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % 
            this.data.length;
        }
        console.log('hash: ', hash);
        return hash;
    }

    set(key, value) {
        const hashCode = this._hash(key);
        if(!this.data[hashCode]){
            this.data[hashCode] = [];
        }
        this.data[hashCode].push([key, value]);
        // return this.data;
    }

    get(key) {
        const hashCode = this._hash(key);
        const currentElement = this.data[hashCode];
        // console.log('currentElement: ', currentElement);

        if (currentElement.length > 0){
            for(let i =0; i < currentElement.length; i++){
                if(currentElement[i][0] === key) {
                    return currentElement[i][1];
                }
            }
        } 
        return undefined;
    }

    getElements(index){
        const keysArray = [];
        for (const element of this.data) {
            if(element) {
                if(element.length > 0) {
                    for(const innerArr of element) {
                        keysArray.push(innerArr[index]);
                    }
                } else {
                    keysArray.push(element[index]);
                }
            }
        }
        return keysArray;
    }

    keys() {
        return this.getElements(0);
    }

    values() {
        return this.getElements(1);
    }
}

const hashTable = new CustomHashTable(50);
hashTable.set('Apple', 100);
hashTable.set('Orange', 10);
hashTable.set('Grapes', 200);
hashTable.set('Banana', 300);
hashTable.set('Mangoes', 50);

console.log('get Grapes Value: ', hashTable.get('Grapes'));
console.log('keys: ', hashTable.keys());
console.log('values: ', hashTable.values());


