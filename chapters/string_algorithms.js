
const sorted = s => [...s].sort((a, b) => a.localeCompare(b)).join('');

function is_anagram(s1, s2) {
    // remove whitespaces
    s1 = s1.replace(/[\s]/g, '').toLowerCase();
    s2 = s2.replace(/[\s]/g, '').toLowerCase();

    // check if anagram
    if (sorted(s1) === sorted(s2)) {
        return true;
    }
    return false;
}

const s1 = "Emperor Octavian";
const s2 = "Captain over Rome";

console.log(is_anagram(s1, s2));

const reverse = s => [...s].reverse().join('');

function is_palindrome(s1) {
    if(s1.toLowerCase() === reverse(s1).toLowerCase()) {
        return true;
    }
    return false;
}

console.log(is_palindrome("Anna"));

function get_last_digit(s) {
    const numbers = [...s].filter(elem => Number(elem));

    return numbers.length > 0 ? numbers[numbers.length - 1] : -1;
}

console.log(get_last_digit("Buy 1 get 2 free"));

// caesar cipher
// O(n)
function cipher(aString, key) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = alphabet.toUpperCase();
    const lowercase = alphabet.toLowerCase();
    let encrypt = "";
    for (const c of aString) {
        if (uppercase.includes(c)) {
            const newIdx = (uppercase.indexOf(c) + key) % 26;
            encrypt += uppercase[newIdx];
        } else if (lowercase.includes(c)) {
            const newIdx = (lowercase.indexOf(c) + key) % 26;
            encrypt += lowercase[newIdx];
        } else {
            encrypt += c; // special character
        }
    }
    return encrypt;
}

console.log(cipher("hello", 3));