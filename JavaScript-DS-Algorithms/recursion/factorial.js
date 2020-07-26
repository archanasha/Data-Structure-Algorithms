// Write two functions that finds the factorial of any number.
// One should use recursive, the other should just use a for loop

// 5! = 5 * 4 * 3 * 2 * 1 = 120

// time complexity: linear - O(n)or O(n-2)
function findFactorialIterative(number) {
    let factorialResult = 1;
    for (let i = number; i > 1; i--) {
        factorialResult = factorialResult * i;
    }
    //code here
    return factorialResult;
}

// time complexity: factorial - O(n!)
function findFactorialRecursive(number) {
    // debugger
    if (number === 2) {
        return 2;
    }
    return number * findFactorialRecursive(number - 1);
}

console.log('findFactorialIterative: ', findFactorialIterative(5));

console.log('findFactorialRecursive: ', findFactorialRecursive(5));
