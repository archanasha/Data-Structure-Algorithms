
// reverse given string
// EX: i/p - "Hi My Name Is Archana"
// o/p - "anahcrA sI emaN yM iH"

function reverseStringFirst(str) {
    // split the string 
    // EX: ["H", "i", " ", "M", "y", " ", "N", "a", "m", "e", " ", "I", "s", " ", "A", "r", "c", "h", "a", "n", "a"]
    // reverse the above char array and join them char to get the reversed string
    return str.split('').reverse().join('');
}

function reverseStringSecond(str) {
    const newArray = [];
    for(let i = str.length - 1; i >= 0; i--){
        newArray.push(str[i]);
    }
    return newArray.join('');
}

// ES6 syntax using ... or spread operator
const reverseThird = str => [...str].reverse().join('');

const str = "Hi My Name Is Archana";
console.log('input: ', str);
console.log('reverseStringFirst: ', reverseStringFirst(str));
console.log('reverseStringSecond: ', reverseStringSecond(str));
console.log('reverseThird: ', reverseThird(str));
