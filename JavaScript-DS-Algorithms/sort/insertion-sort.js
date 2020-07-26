
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) { // O(n^2)
    for (let i = 0; i < array.length; i++) {
        if (array[i] < array[0]) {
            // move number to the first position
            array.unshift(array.splice(i, 1)[0]);
        } else {
            // only sort numbers smaller than numbers on the left of it
            // this is the part of insertion sort that makes it fast if the
            // array is almost sorted
            if (array[i] < array[i - 1]) {
                //find where number should go on the left side
                for (let j = 1; j < i; j++) {
                    if (array[i] >= array[j - 1] && array[i] < array[j]) {
                        //move number to the right spot
                        array.splice(j, 0, array.splice(i, 1)[0]);
                    }
                }
            }
        }
    }
    return array;
}

console.log('insertionSort: ', insertionSort(numbers));