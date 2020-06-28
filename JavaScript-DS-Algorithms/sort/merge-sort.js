const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
    if (array.length === 1) {
        return array;
    }

    //split array into individual elements
    const length = array.length;
    const mid = Math.floor(length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);
    // console.log('left: ', left);
    // console.log('right: ', right);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(leftArray, rightArray) {
    console.log('leftArray: ', leftArray);
    console.log('rightArray: ', rightArray);
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < leftArray.length &&
        rightIndex < rightArray.length) {
        if (leftArray[leftIndex] < rightArray[rightIndex]) {
            result.push(leftArray[leftIndex]);
            leftIndex++;
        } else {
            result.push(rightArray[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(leftArray.slice(leftIndex)).concat(
        rightArray.slice(rightIndex));

}

console.log('mergeSort: ', mergeSort(numbers));
