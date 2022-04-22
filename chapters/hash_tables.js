// Characters in a string
function count(aString) {
    const hash = {};
    for (const char of aString) {
        if (char in hash) {
            hash[char] += 1;
        } else {
            hash[char] = 1;
        }
    }
    console.log(hash);
}

count("Hello");

// Two Sum

// O(n ** 2)
function two_sum_brute(list, target) {
    for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
            if (list[i] + list[j] === target) {
                return [i, j];
            }
        }
    }
}

console.log(two_sum_brute([-1, 2, 3, 4, 7], 5));

// O(n)
function two_sum(list, target) {
    const hash = {};
    for (let i = 0; i < list.length; i++) {
        const remainder = target - list[i];
        if (hash[remainder]) {
            return [hash[remainder], i];
        } else {
            hash[list[i]] = i;
        }
    }
}

console.log(two_sum([-1, 2, 3, 4, 7], 5));