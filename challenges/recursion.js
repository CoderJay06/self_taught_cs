// Write a recursive algorithm that prints 1 to 10

function print_r(n) {
    if (n === 0) {
        return;
    }
    console.log(n);
    n -= 1;
    return print_r(n);
}

print_r(10);