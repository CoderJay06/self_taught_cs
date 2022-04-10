// Challenge: research and write a sort algorithm that's not bubble, insertion, merge

function swap(array, i, storeIndex) {
    let temp = array[i];
    array[i] = array[storeIndex];
    array[storeIndex] = temp;
}
/*
partition(array, leftmostIndex, rightmostIndex)
  set rightmostIndex as pivotIndex
  storeIndex <- leftmostIndex - 1
  for i <- leftmostIndex + 1 to rightmostIndex
  if element[i] < pivotElement
    swap element[i] and element[storeIndex]
    storeIndex++
  swap pivotElement and element[storeIndex+1]
return storeIndex + 1
*/

function partition(array, leftmostIndex, rightmostIndex) {
    // choose the rightmost element as pivot
    const pivot = array[rightmostIndex];

    // pointer for greater element
    let storeIndex = leftmostIndex - 1;

    // traverse through all elements
    // compare each element with pivot
    for (let i = leftmostIndex + 1; i < rightmostIndex; i++) {
        if (array[i] < pivot) {
            storeIndex++;
            swap(array, i, storeIndex);
        }
        swap(array, rightmostIndex, storeIndex + 1);
    }
    return storeIndex + 1;
}

/* 
quickSort(array, leftmostIndex, rightmostIndex)
  if (leftmostIndex < rightmostIndex)
    pivotIndex <- partition(array,leftmostIndex, rightmostIndex)
    quickSort(array, leftmostIndex, pivotIndex - 1)
    quickSort(array, pivotIndex, rightmostIndex)
*/
function quickSort(array, leftmostIndex, rightmostIndex) {
    if (leftmostIndex < rightmostIndex) {
        const pivotIndex = partition(array, leftmostIndex, rightmostIndex);
        quickSort(array, leftmostIndex, pivotIndex - 1);
        quickSort(array, pivotIndex + 1, rightmostIndex);
    }
    return array;
}
const data = [8, 7, 2, 1, 0, 9, 6];
const len = data.length;
console.log("\nQuick sort:")
console.log(quickSort(data, 0, len - 1));