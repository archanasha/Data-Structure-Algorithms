const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array, left, right) {
    const length = array.length;
    let pivot;
    let patitionIndex;
    // console.log('array: ', array);
    // console.log('left: ', left);
    // console.log('right: ', right);

    if (left < right) {
        pivot = right;
        patitionIndex = partition(array, pivot, left, right);

        //sort left and right
        quickSort(array, left, patitionIndex - 1);
        quickSort(array, patitionIndex + 1, right);
    }
    return array;
}

function partition(array, pivot, left, right) {
    let pivotValue = array[pivot];
    let partitionIndex = left;
    console.log('array: ', array);
    console.log('left: ', left);
    console.log('right: ', right);
    console.log('pivot: ', pivot);

    for (let i = left; i < right; i++) {
        if (array[i] < pivotValue) {
            swap(array, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(array, right, partitionIndex);
    return partitionIndex;
}

function swap(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

//Select first and last index as 2nd and 3rd parameters
console.log('quickSort: ', quickSort(numbers, 0, numbers.length - 1));
