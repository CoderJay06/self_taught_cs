/*
    Challenge:
        1. modify your check_parentheses function to check wether both () and {} are balanced
        2. design a max stack that allows you to push, pop, and keep track of your
           stacks largest number in O(1) time
*/

function check_parentheses(aString) {
    const stack = [];
    for (const char of aString) {
        if (char === '(' || char === '{') {
            stack.push(char);
        }
        if (char === ')' || char === '}') {
            if (stack.length === 0) {
                return false;
            } else {
                stack.pop();
            }
        }
    }
    return stack.length === 0;
}


console.log(check_parentheses("(str(1))"));
console.log(check_parentheses("print(Hi!))"));

console.log(check_parentheses("{(str(1))}"));
console.log(check_parentheses("{print(Hi!))}}"));

class MaxStack {
    constructor() {
        this.main = [];
        this.max = [];
    }

    push(n) {
        if (this.main.length === 0) {
            this.max.push(n);
        } else if (n >= this.max[this.max.length - 1]) {
            this.max.push(n);
        } else {
            // keep max and main size same
            this.max.push(this.main[this.max.length - 1]);
        }
        this.main.push(n);
    }

    pop() {
        this.max.pop();
        return this.main.pop();
    }

    get_max() {
        return this.max[this.max.length - 1];
    }
}

const maxStack = new MaxStack();
maxStack.push(15);
maxStack.push(10);
maxStack.push(5);
maxStack.push(25);
maxStack.push(50);
console.log(maxStack.main);
console.log(maxStack.max);
console.log(maxStack.get_max());
maxStack.pop();
console.log(maxStack.main);
console.log(maxStack.max);
console.log(maxStack.get_max());
