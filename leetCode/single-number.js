// 1. XOR 
// If we take XOR of zero and some bit, it will return that bit : a xor 0 = a;
// If we take XOR of two same bits, it will return 0; a xor a = 0;
// a⊕b⊕a=(a⊕a)⊕b=0⊕b=b
// Complexity Analysis

// Time complexity : O(n)O(n). We only iterate through \text{nums}nums, so the time complexity is the number of elements in \text{nums}nums.

// Space complexity : O(1)O(1).

// 2. Maths
// 2∗(a+b+c)−(a+a+b+b+c)=c
// time : O(n)
// space : O(n)

// 3. List operation
// Iterate over all the elements in \text{nums}nums
// If some number in \text{nums}nums is new to array, append it
// If some number is already in the array, remove it
// Time complexity : O(n^2)
// Space complexity : O(n)

function singleNumber(A) {
    let result;
    for (let i = 0; i < A.length; i++) {
        result ^= A[i]; // 2 xor 2 = 0; 3 xor 7 = 1
    }
    return result;
}
A = [9, 3, 9, 3, 7, 7, 9];
// A=[1,1]
console.log(singleNumber(A));