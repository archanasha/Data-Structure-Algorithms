

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
        return this.data;
    }

    get(key) {
        const hashCode = this._hash(key);
        const currentElement = this.data[hashCode];
        console.log('currentElement: ', currentElement);

        if (currentElement.length > 0){
            for(let i =0; i < currentElement.length; i++){
                if(currentElement[i][0] === key) {
                    return currentElement[i][1];
                }
            }
        } 
        return undefined;
    }
}

const hashTable = new CustomHashTable(2);
console.log('hash set fruits: ', hashTable.set('fruits', 1000));
console.log('hash set veg: ', hashTable.set('veg', 10));
console.log('hash:get ', hashTable.get('veg'));

