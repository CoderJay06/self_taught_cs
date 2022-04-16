// Challenge: given an array of non negative integers, return an array consisting of 
// all even elements followed by odd elements

function returnEvensBeforeOdds(array) {
    const evens = array.filter(num => num % 2 === 0);
    const odds = array.filter(num => num % 2 !== 0);
    return [...evens, ...odds];
}

const nums = [1, 4, 6, 2, 9, 7, 11, 12];

console.log(returnEvensBeforeOdds(nums));