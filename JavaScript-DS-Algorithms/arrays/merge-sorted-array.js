// merge 2 arrays and then sort the arrays
// I/P : [0,3,4,31] [4,6,30]
// O/P: [0,3,4,4,6,30,31]


function mergeSortedArray1(arr1, arr2) {
    // let mergedArray = [];

    if (arr1.length === 0) {
        return arr2;
    }

    if (arr2.length === 0) {
        return arr1;
    }

    // mergedArray = arr1.concat(arr2);
    // mergedArray = [...arr1,...arr2]
    // return mergedArray.sort((a,b) => a-b);
    
    arr1.push(...arr2)
    return arr1.sort((a,b) => a-b);
}

function mergeSortedArray2(array1, array2){
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;
    
    //We should actually move these 2 if statements to line 2 so that we do the checks before we do assignments in line 3 and 4!
    if(array1.length === 0) {
      return array2;
    }
    if(array2.length === 0) {
      return array1;
    }
  
    while (array1Item || array2Item){
     if(array2Item === undefined || array1Item < array2Item){
       mergedArray.push(array1Item);
       array1Item = array1[i];
       i++;
     }   
     else {
       mergedArray.push(array2Item);
       array2Item = array2[j];
       j++;
     }
    }
    return mergedArray;
  }
  const arr1 = [0,3,4,31];
  const arr2 = [4,6,30]; 
console.log('mergeSortedArray1: ', mergeSortedArray1(arr1, arr2));
console.log('mergeSortedArray2: ', mergeSortedArray2([0,3,4,31], [3,4,6,30]));

