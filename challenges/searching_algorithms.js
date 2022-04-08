// write binary search to find target number
console.log("Binary Search: ");

function bs(list, target) {
    let first = 0, last = list.length - 1;
    while (first <= last) {
        let mid = (Math.floor(first + last / 2));
        if (list[mid] === target) {
            return mid;
        } else {
            if (list[mid] < target) {
                // cut off lower half
                first = mid + 1;
            } else {
                // cut off upper half
                last = mid - 1;
            }
        }
        
    }
    return -1; // not found
}
console.log(bs([1, 2, 3, 4, 5, 6, 7, 8], 8));

// recursive binary search

console.log("\n--------------------\n");
console.log("Recursive binary search: ");

function recursive_bs(list, target, low, high) {
    if (low > high) {
        return -1;
    }
    const mid = Math.floor((low + high) / 2);
    if (list[mid] === target) {
        return mid;
    } else if (list[mid] < target) {
        // cut off lower half
        return recursive_bs(list, target, mid + 1, high);
    } else {
        // cut off upper half
        return recursive_bs(list, target, low, mid - 1);
    }
}


function bs_r(list, target) {
    return recursive_bs(list, target, 0, list.length - 1);
}

console.log(bs_r([1, 2, 3, 4, 5, 6, 7, 8], 8));

// Challenge: given a list of words in alphabetical order, write a bs that 
// returns weather a words in the list

console.log("\n--------------------\n");
console.log("Challenge: ");

function bs_words(words, word) {
    let first = 0, last = words.length - 1;

    while (first <= last) {
        const mid = Math.floor((first + last) / 2);
        const result = word.localeCompare(words[mid]);
        if (result === 0) {
            return true;
        } else {
            if (result > 0) {
                first = mid + 1; // cut off lower half
            } else {
                last = mid - 1; // cut off upper half
            }
        }
    }
    return false;
}

console.log(bs_words(["Amanda", "Bob", "Joe", "Yang", "Zoey"], "Zoey"));
