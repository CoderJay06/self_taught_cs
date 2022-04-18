// Creating queues with Linked list

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class Queue {
//     constructor() {
//         this.front = null;
//         this.rear = null;
//         this._size = 0;
//     }

//     enqueue(item) {
//         this._size += 1;
//         const node = new Node(item);
//         if (!this.rear) {
//             this.front = node;
//             this.rear = node;
//         } else {
//             this.rear.next = node;
//             this.rear = node;
//         }
//     }

//     dequeue() {
//         if (!this.front) {
//             throw new Error("Can't dequeue from empty queue..");
//         }
//         this._size -= 1;
//         const temp = this.front;
//         this.front = this.front.next;
//         if (!this.front) {
//             // no more items
//             this.rear = null;
//         }
//         return temp.data;
//     }

//     size() {
//         return this._size;
//     }
// }

// Creating a Queue with two stacks

class Queue {
    constructor() {
        this.s1 = [];
        this.s2 = [];
    }
    // O(n)
    enqueue(item) {
        // pop all items from s1 and put in s2
        while (this.s1.length !== 0) {
            this.s2.push(this.s1.pop());
        }
        this.s1.push(item); // add item to bottom of s1

        // pop all items from s2 and put back into s1
        while (this.s2.length !== 0) {
            this.s1.push(this.s2.pop());
        }
    }
    // O(1)
    dequeue() {
        if (this.s1.length < 1) {
            throw new Error("Can't dequeue from empty queue..");
        }
        return this.s1.pop();
    }

    size() {
        return this.s1.length;
    }
}


const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue);

// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());

for (let i = 0; i < 3; i++) {
    console.log(queue.dequeue());

}

console.log(queue);