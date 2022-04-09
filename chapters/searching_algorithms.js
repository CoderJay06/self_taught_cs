// binary search

function binary_search(a_list, n) {
    let first = 0, last = a_list.length - 1;
    while (first <= last) {
        const mid = Math.floor((first + last) / 2);
        if (a_list[mid] === n) {
            return mid;
        } else {
            if (a_list[mid] < n) {
                first = mid + 1;
            } else {
                last = mid - 1;
            }
        }
    }
    return -1;
}