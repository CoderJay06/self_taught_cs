// Challenege: write a function to determine if a tree is a binary heap

const violatesMinHeap = (parentNode, leftChild, rightChild) => (
    leftChild < parentNode || rightChild < parentNode
);

function checkMinHeap(array) {
    const firstParentIdx = Math.floor((array.length - 2) / 2);
    for (let current = firstParentIdx; current >= 0; current--) {
        let leftChild = array[(current * 2) + 1];
        let rightChild = array[(current * 2) + 2];

        if (violatesMinHeap(array[current], leftChild, rightChild)) {
            return false;
        }
    }
    return true;
}

const minHeap = [0, 12, 15, 18, 22, 26, 32];
const minHeapInvalid = [5, 1, 0, 18, 2, 26, 32];
console.log(checkMinHeap(minHeap)); // true
console.log(checkMinHeap(minHeap)); // false