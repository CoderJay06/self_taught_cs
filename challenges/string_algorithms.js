// Challenege: use a list comprehension to return a list of all words w/ more than four chars
//             in the following list:
//  ["selftaught", "code", "sit", "eat", "programming", "dinner", "one", "two", "coding", "a", "tech"]

function getAllWordsWithFourOrMore(list) {
    return list.filter(word => word.length >= 4);
}


const list = ["selftaught", "code", "sit", "eat", "programming", "dinner", "one", "two", "coding", "a", "tech"];

console.log(getAllWordsWithFourOrMore(list));