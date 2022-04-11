// Challenge: research and try another way to find prime numbers

// Step 1: First find the factors of the given number.
// Step 2: Check the number of factors of that number.
// Step 3: If the number of factors is more than two, it is not a prime number.

function find_factors(n) {
    const factors = [];
    for (i = 2; i < n; i++) {
        if (n % i === 0) factors.push(i);
    }
    return factors;
}

function is_prime(n) {
    const factors = find_factors(n);
    // console.log(factors);

    return factors.length < 2 ? true : false;
}

console.log(is_prime(6));