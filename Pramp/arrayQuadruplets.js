function findArrayQuadruplet(arr, s) {
    // your code goes here
    let sum = 0;
    const sortedArray = arr.sort();
    for (let i = 0; i < sortedArray.length - 4; i++) {

        for (let j = i + 1; j < sortedArray.length - 1; j++) {
            sum = sortedArray[i] + sortedArray[j] + sortedArray[j + 1] + sortedArray[j + 2];
            if (sum === s) {
                return ([sortedArray[i], sortedArray[j], sortedArray[j + 1], sortedArray[j + 2]]).sort();
            }
        }
    }
}
const arr = [2, 7, 4, 0, 9, 5, 1, 3];
const s = 20;
console.log(findArrayQuadruplet(arr, s));

// output: [0, 4, 7, 9] 
// # The ordered quadruplet of (7, 4, 0, 9)
// # whose sum is 20. Notice that there
// # are two other quadruplets whose sum is 20:
// # (7, 9, 1, 3) and (2, 4, 9, 5), but again you’re
// # asked to return the just one quadruplet (in an
// # ascending order)