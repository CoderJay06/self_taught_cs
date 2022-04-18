
// class Stack {
//     constructor() {
//         this.items = [];
//     }

//     push(data) {
//         this.items.push(data);
//     }

//     pop() {
//         return this.items.pop();
//     }
    
//     peek() {
//         return this.items[this.items.length - 1];
//     }

//     size() {
//         return this.items.length;
//     }

//     is_empty() {
//         return this.size() === 0;
//     }
// }

// const stack = new Stack();

// for (let i = 1; i <= 3; i++) {
//     stack.push(i);
// }

// console.log(stack);

// for (let i = 0; i < 3; i++) {
//     console.log(stack.pop());
// }

// Stack with linked list

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.head = null;
    }

    push(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }

    pop() {
        if (!this.head) {
            throw new Error("Cant pop from empty stack..");
        } else {
            let poppedNode = this.head;
            this.head = poppedNode.next;
            return poppedNode.data;
        }
    }

    peek() {
        if (this.head) {
            return this.head.data;
        } else {
            throw new Error("Can't peek from empty stack..");
        }
    }

    size() {
        let len = 0;
        let node = this.head;
        while (node) {
            len++;
            node = node.next;
        }
        return len;
    }

    is_empty() {
        return !this.head;
    }
}

// const stack = new Stack();

// for (let i = 1; i <= 3; i++) {
//     stack.push(i);
// }

// console.log(stack);

// for (let i = 0; i < 3; i++) {
//     console.log(stack.pop());
// }

// console.log(stack.peek());
// console.log(stack.size());
// console.log(stack.is_empty());

// Stack with array
// const stack = [];
// stack.push("Kanye West");
// stack.push("Taylor Swift");
// stack.push("Chance the Rapper");
// console.log(stack.pop());


// Stack to reverse a string

function reverse_string(aString) {
    const stack = [];
    let reversedString = "";

    // push onto stack
    for (let i = 0; i < aString.length; i++) {
        stack.push(aString[i]);
    }

    // pop from stack
    for (let i = 0; i < aString.length; i++) {
        reversedString += stack.pop();
    }

    return reversedString;
}

// console.log(reverse_string("Bieber"));

// Min Stack

class MinStack {
    constructor() {
        this.main = [];
        this.min = [];
    }

    push(n) {
        if (this.min.length === 0) {
            this.min.push(n);
        } else if (n <= this.min[this.min.length - 1]) {
            this.min.push(n);
        } else {
            // keep the # of items in min same as min
            this.min.push(this.min[this.min.length - 1]);
        }
        this.main.push(n);
    }

    pop() {
        this.min.pop();
        return this.main.pop();
    }

    get_min() {
        return this.min[this.min.length - 1];
    }
}

// const minStack = new MinStack();

// minStack.push(10);
// minStack.push(15);
// console.log(minStack.main);
// console.log(minStack.min);
// console.log(minStack.get_min());
// minStack.pop();
// console.log(minStack.main);
// console.log(minStack.min);
// console.log(minStack.get_min());
// minStack.pop();
// console.log(minStack.main);
// console.log(minStack.min);



// Stacked Parentheses

function check_parentheses(aString) {
    const stack = [];
    for (const char of aString) {
        if (char === '(') {
            stack.push(char);
        }
        if (char === ')') {
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