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
    }

    search(target) {
        let current = this.head;
        while (current) {
            if (current.data === target) {
                return true;
            } else {
                current = current.next;
            }
        }
        return false;
    }

    remove(target) {
        if (this.head && this.head.data === target) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        let previous = null;
        while (current) {
            if (current.data === target) {
                // remove node
                previous.next = current.next;
            }
            previous = current;
            current = current.next;
        }
    }

    reverse() {
        let current = this.head;
        let previous = null;
        while (current) {
            // change pointers
            let next = current.next;
            current.next = previous;

            // keep iterating
            previous = current;
            current = next;
        }
        this.head = previous;
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
            console.log(node.data);
            node = node.next;
        }
    }
}

const aList = new LinkedList();

aList.append("Tuesday");
aList.append("Wednesday");
aList.append("Thursday");
aList.append("Friday");
console.log(aList);
aList.print();

// for (let i = 0; i < 30; i++) {
//     const randomNum = Math.floor((Math.random() * 30) + 1);
//     console.log(randomNum)
//     aList.append(randomNum);
// }

// console.log(aList.search(0));

// aList.remove("Wednesday");
// console.log(aList);
// aList.print();


// aList.reverse();
// console.log(aList);
// aList.print();

aList.detect_cycle();