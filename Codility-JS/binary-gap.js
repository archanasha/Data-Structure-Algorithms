// A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

// For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

// Write a function:

// function solution(N);

// that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

// For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..2,147,483,647].



console.log('hello arch!');

// function convertDectoBin(numDecimal){
//     const numberArray = [];

//     while(numDecimal > 0) {
//         numberArray.push((numDecimal%2))
//         numDecimal = parseInt(numDecimal / 2);
//     }

//     return numberArray.reverse();
// }

function decimal2binary(dec){
    return (dec >>> 0).toString(2);
  }

function solution(N) {

    let max = 0;
    let counter = 0;


    if(N > 0) {
        // 1.convert int to binary
        // 2.put it to an array
        const binaryArr = decimal2binary(N).split('').map(el=>parseInt(el));
        console.log('binaryArr: ', binaryArr);
    
        // 3.find the first index of 1 and start the counter to count the no of 0 between current & next 1
        for (const digit of binaryArr) {
            // 4.iterate until next 1
            if (digit === 1) {
                if (counter > max){
                    max = counter;
                }
             // 5.if there is no next 1 then return 0
                counter = 0;    
            } else {
                // 6.if next 1 is found then set the counter value to max var also reset the counter to 0
                counter++;
            }
        }

    }
    // 7.if still elements left in the array continue else return max
    return max;
}

const test = solution(1041);
console.log(test);