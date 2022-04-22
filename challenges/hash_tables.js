// Challenge: Given a string, remove all duplicate words.
// ex: "I am a self taught programmer looking for a job as a programmer."
// result: "I am a self taught programmer looking for a job as a."

function removeDuplicates(aString) {
    // const wordsCount = {};
    // const strArray = aString.replace(/[.!,]/g, '').split(' ');
    // let result = "";
    // for (const word of strArray) {
    //     if (wordsCount[word]) {
    //         wordsCount[word] += 1;
    //     } else {
    //         result += word + ' ';
    //         wordsCount[word] = 1;
    //     }
    // }
    // return result.trim() + '.';
    const words = new Set();
    const strArray = aString.replace('.', '').split(' ');
    for (const word of strArray) {
        words.add(word);
    }
    return Array.from(words).join(' ') + '.';
}

console.log(removeDuplicates("I am a self taught programmer looking for a job as a programmer."));