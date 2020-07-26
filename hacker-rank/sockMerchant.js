


function sockMerchant(n, ar) {
    let counter = 0;
    const sortedArray = ar.sort();
    console.log(sortedArray);

    for (let i = 0; i < sortedArray.length; i++) {
        if (sortedArray[i] === sortedArray[i + 1]) {
            counter++;
            i++;
        }

    }
    return counter;
}

const n = 9
const array = [10, 20, 20, 10, 10, 30, 50, 10, 20]
// output = 3 pairs
// 10-10,10-10,20-20
const pairedCount = sockMerchant(n, array);
console.log('pairedCount: ', pairedCount);


