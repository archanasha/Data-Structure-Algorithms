// An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

// Your goal is to find that missing element.

// Write a function:

// class Solution { public int solution(int[] A); }
// that, given an array A, returns the value of the missing element.

// For example, given array A such that:

//   A[0] = 2
//   A[1] = 3
//   A[2] = 1
//   A[3] = 5
// the function should return 4, as it is the missing element.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [0..100,000];
// the elements of A are all distinct;
// each element of array A is an integer within the range [1..(N + 1)].

function solution(A) {

    const sortedArray = A.sort();
    let missingElement = 0;
    let temp = 1;
    console.log(sortedArray);
    if (A.length === 0) {
        missingElement = 1;
    } else if (A.length > 0) {
        for (const x of sortedArray) {
            if (x === temp) {
                temp++;
            } else {
                missingElement = temp;
            }
        }
    }

    // if no missing elements inside the given array
    if (missingElement === 0) {
        missingElement = A[A.length - 1] + 1;
    }
    return missingElement;
}

function solution1(A) {
    let sum = 0;
    let missingElement = 0;

    if (A.length > 0) {

        let N = A.length + 1;
        for (let i = 0; i < A.length; ++i) {
            sum += A[i];
        }
        missingElement = (N - 1) * N / 2 - sum;
    } else if (A.length === 0) {
        missingElement = 1;
    }

    // if no missing elements inside the given array
    if (missingElement === 0) {
        console.log('hi');

        missingElement = A[A.length - 1] + 1;
    }
    return missingElement;
}
const A = [2, 3, 4, 5]
console.log(solution1(A));