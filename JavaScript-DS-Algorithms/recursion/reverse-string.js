//Implement a function that reverses a string using iteration...and
// then recursion!


function reverseStringIteration(str) {
    let arrayStr = str.split('');
    let reverseStr = [];

    function addToArray(array) {
        if (array.length > 0) {
            reverseStr.push(array.pop())
            addToArray(array);
        }
        return;
    }
    addToArray(arrayStr);
    return reverseStr.join('');
}

function reverseStringRecursive(str) {
    if (str === '') {
        return '';
    } else {
        return reverseStringRecursive(str.substr(1)) + str.charAt(0);
    }

}

console.log('reverseStringIteration: ', reverseStringIteration('yoyo mastery'));
console.log('reverseStringRecursive: ', reverseStringRecursive('yoyo mastery'));

//should return: 'yretsam oyoy'