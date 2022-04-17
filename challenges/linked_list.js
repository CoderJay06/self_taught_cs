/*
    Challenge:
        1. create a linked list that holds integers 1 - 100 than prints every node
        2. create two linked lists. one that contains a cycle and one that does not.
           make sure it has detect_cycle method. call detect_cycle on each list
*/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = new Node(data);
        return current.next;
    }

    search(target) {
        let node = this.head;
        while (node) {
            if (node.data === target) {
                return true;
            } else {
                node = node.next;
            }
        }
        return false;
    }

    remove(target) {
        if (this.head && this.head.data === target) {
            this.head = this.head.next;
        }
        let current = this.head;
        let previous = null;
        while (current) {
            if (current.data === target) {
                previous.next = current.next;
            }
            previous = current;
            current = current.next;
        }
    }

    create_list(n, createCycle = false) {
        let node = null;
        for (let i = 1; i <= n; i++) {
            node = this.append(i);
        }
        if (createCycle) {
            if (node) {
                node.next = this.head;
                return;
            }
        }
    }

    detect_cycle() {
        let slow = this.head;
        let fast = this.head;
        while (true) {
            try {
                slow = slow.next;
                fast = fast.next.next;
                if (slow === fast) {
                    return true;
                }
            } catch (err) {
                console.log(err.message);
                return false;
            }
        }
    }

    print() {
        let node = this.head;
        while (node) {
            console.log(node);
            node = node.next;

            // check if lists has cycle
            if (node === this.head) {
                break;
            }
        }
    }
}

// solution 1.
// const list = new LinkedList();

// // fill list with 1 - 100
// for (let i = 1; i <= 100; i++) {
//     list.append(i);
// }

// console.log(list);
// list.print();

// solution 2.

const listWithoutCycle = new LinkedList();
const listWithCycle = new LinkedList();
listWithoutCycle.create_list(4);
listWithCycle.create_list(4, true);

// console.log(listWithoutCycle);

console.log("\nwithout cycle:")
listWithoutCycle.print();

console.log(listWithoutCycle.detect_cycle());

// console.log(listWithCycle);

console.log("\nwith cycle:")
listWithCycle.print();

console.log(listWithCycle.detect_cycle());