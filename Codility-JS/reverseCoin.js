// Consider N coins aligned in a row. Each coin is showing either heads or tails.
// The adjacency of these coins is the number of adjacent pairs of coins with
// the same side facing up.

// int solution(const vector<int> &A);
// that, given a non-empty zero-indexed array A consisting of N integers 
// representing the coins, returns the maximum possible adjacency 
// that can be obtained by reversing exactly one coin (that is, one of the coins
// must be reversed). Consecutive elements of array A represent consecutive coins
// in the row. Array A contains only 0s and/or 1s:

// 0 represents a coin with heads facing up;
// 1 represents a coin with tails facing up.
// For example, given array A consisting of eight numbers, such that:

function solution(A) {
    // you can use console.log for debugging purposes, i.e.
    // console.log('this is debug message');
    // write your code in JavaScript (ECMA-262, 5th edition)
    if (A.length === 1) return 0;
    var len = A.length,
        result = 0;
  
    // how many pairs of coins we have now 
    for(var i = 0; i < len - 1; i++) {
      if (A[i] === A[i+1]) {
        result++;
      }
    }
    
    var revers = 0;
    for(var l = 0; l < len; l++) {
      var count = 0;    
      if (l > 0) {
        count = (A[l-1] !== A[l]) ? count + 1 : count -1 ;
      }			
      if (l < len-1) {
        count = (A[l] !== A[l+1]) ? count + 1 : count -1 ;
      }
      revers = Math.max(revers, count);
    }
    return result + revers;
  }
  console.log(solution([ 1, 1, 0, 1, 0, 0, 1, 1 ])); // 5
  console.log(solution([ 1, 1, 1, 1, 1, 0, 1, 1 ])); // 7
  console.log(solution([ 1, 0, 1])); // 2
  console.log(solution([ 0, 1, 0])); // 2
  console.log(solution([ 1, 1, 0, 0, 0])); // 3