function move_zeros(aList) {
    let zeroIdx = 0;
    for (let idx = 0; idx < aList.length; idx++) {
        if (aList[idx] !== 0) {
            aList[zeroIdx] = aList[idx];
            if (zeroIdx !== idx) {
                aList[idx] = 0;
            }
            zeroIdx++;
        }
    }
    return aList;
}

console.log(move_zeros([8, 0, 3, 0, 12]));

// combining two lists

const movies = ['Interstellar', 'Inception', 'The Prestige', 'Insomnia', 'Batman Begins'];
const ratings = [1, 10, 10, 8, 6];

function combine(list1, list2) {
    return list1.map((item, idx) => {
        return [item, list2[idx]];
    });
}

console.log(combine(movies, ratings));

function return_dups(anIterable) {
    const dups = [];
    const aSet = new Set();
    for (const item of anIterable) {
        const l1 = aSet.size;
        aSet.add(item);
        const l2 = aSet.size;
        if (l1 === l2) {
            dups.push(item);
        }
    }
    return dups;
}

const list = [
    "Susan Adams",
    "Kwame Goodall",
    "Jill Hampton",
    "Susan Adams"
];

console.log(return_dups(list));

// finding the intersection of two lists
// function return_inner(list1, list2) {
//     return list1.filter(item => list2.includes(item));
// }

function return_inner(list1, list2) {
    const setA = new Set(list1);
    const setB = new Set(list2);
    const intersection = new Set(
        [...setA].filter(item => setB.has(item))
    );
    return Array.from(intersection);
}

const thisWeeksWinners = [2, 43, 48, 62, 64, 28, 3];
const mostCommonWinners = [1, 28, 42, 70, 2, 10, 62, 31, 4, 14];

console.log(return_inner(thisWeeksWinners, mostCommonWinners));