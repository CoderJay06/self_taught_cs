console.log("\nBubble sort:")
function bubble_sort(list) {
    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list.length; j++) {
            if (list[j] > list[j + 1]) {
                let temp = list[j];
                list[j] = list[j + 1];
                list[j + 1] = temp;
            }
        }
    }
    return list;
}

console.log(bubble_sort([12, 4, 8, 91, 1]))

function bubble_sort_optimized(list) {
    const len = list.length - 1;
    for (let i = 0; i < len; i++) {
        let noSwaps = true;
        for (let j = 0; j < len - i; j++) {
            if (list[j] > list[j + 1]) {
                let temp = list[j];
                list[j] = list[j + 1];
                list[j + 1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) {
            return list;
        }
    }
    return list;
}

console.log("\nOptimized Bubble sort");
console.log(bubble_sort_optimized([12, 4, 8, 91, 1]));

console.log("\nInsertion sort:");
function insertion_sort(list) {
    for (let i = 1; i < list.length; i++) {
        let value = list[i];
        // sort left half of list
        while (i > 0 && list[i - 1] > value) {
            list[i] = list[i - 1];
            i--;
        }
        // insert value in correct place
        list[i] = value;
    }
    return list;
}

console.log(insertion_sort([6, 5, 8, 2]));

console.log("\nMerge sort:");

function merge_sort(list) {
    if (list.length > 1) {
        const mid = Math.floor(list.length / 2);
        const leftHalf = list.slice(0, mid);
        const rightHalf = list.slice(mid);
        merge_sort(leftHalf);
        merge_sort(rightHalf);

        let leftInd = 0;
        let rightInd = 0;
        let listInd = 0;

        // sort
        while (leftInd < leftHalf.length && rightInd < rightHalf.length) {
            if (leftHalf[leftInd] <= rightHalf[rightInd]) {
                list[listInd] = leftHalf[leftInd];
                leftInd++;
            } else {
                list[listInd] = rightHalf[rightInd];
                rightInd++;
            }
            listInd++;
        }

        // merge
        while (leftInd < leftHalf.length) {
            list[listInd] = leftHalf[leftInd];
            leftInd++;
            listInd++;
        }

        while (rightInd < rightHalf.length) {
            list[listInd] = rightHalf[rightInd];
            rightInd++;
            listInd++;
        }
    }
    return list;
}


console.log(merge_sort([6, 3, 9, 2]));

