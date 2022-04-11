
function fizz_buzz(n) {
    for (let i = 1; i < n + 1; i++) {
        if ( (i % 3 === 0) && (i % 5 === 0) ) {
            console.log("Fizz Buzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

// fizz_buzz(100);

// greatest common factor O(n)
// function get_gcf(i1, i2) {
//     let gcf = null;
//     let smaller = i1;
//     if (i2 < i1) {
//         smaller = i2;
//     }
//     for (let i = 1; i < smaller + 1; i++) {
//         if (i1 % i === 0 && i2 % i === 0) {
//             gcf = i;
//         }
//     }
//     return gcf;
// }

// greatest common factor revised
// function get_gcf(i1, i2) {
//     // check for negative inputs
//     if (i1 < 0 || i2 < 0) {
//         throw new Error("Numbers must be positive");
//     }

//     // one of the inputs are 0 than return other
//     if (i1 === 0) {
//         return i2;
//     }
//     if (i2 === 0) {
//         return i1;
//     }

//     let gcf = null;
//     let smaller = i1;
//     if (i2 < i1) {
//         smaller = i2;
//     }
//     for (let i = 1; i < smaller + 1; i++) {
//         if (i1 % i === 0 && i2 % i === 0) {
//             gcf = i;
//         }
//     }
//     return gcf;
// }

// elucids algorithm O(log n)
function get_gcf(x, y) {
    let r;
    while ((x % y) > 0) {
        r = x % y;
        x = y;
        y = r;
    }
    return y;
}

function get_gcf_recursive(x, y) {
    if (y === 0) {
        return x;
    }
    return get_gcf_recursive(y, (x % y));
}

console.log(get_gcf(20, 12));
console.log(get_gcf_recursive(20, 12));


// Prime number: number that is positive number divisible by only one and itself
// O(n)
// function is_prime(n) {
//     for (let i = 2; i < n; i++) {
//         if (n % i=== 0) return false;
//     }
//     return true;
// }

// optimized is_prime
function is_prime(n) {
    for (let i = 2; i < Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function find_primes(n) {
    const primes = [];
    for (let i = 2; i < n; i++) {
        if (is_prime(i)) primes.push(i);
    }
    return primes;
}

console.log(is_prime(9));
console.log(find_primes(10));

