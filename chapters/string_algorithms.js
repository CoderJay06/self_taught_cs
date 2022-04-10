
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