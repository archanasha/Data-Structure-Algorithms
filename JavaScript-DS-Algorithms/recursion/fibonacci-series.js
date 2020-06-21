// Given a number N return the index value of the Fibonacci sequence,
// where the sequence is:
// 0, 1, 2, 3, 4, 5, 6, 7,  8,  9,  10, 11, 12
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values,
// that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

// time complexity: linear - O(n)or O(n-2)
function fibonacciIterative(n) {
    let arr = [0, 1];
    for (let i = 2; i <= n; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr[n];
}

// time complexity: exponential - O(2^n)
function fibonacciRecursive(n) {
    // at index 0 the value is 0, and at index 1 the value is 1
    if (n < 2) {
        return n;
    }
    // from index 2 the value is always the sum of 2 previous values
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log('fibonacciIterative: ', fibonacciIterative(11));

console.log('fibonacciRecursive: ', fibonacciRecursive(11));
