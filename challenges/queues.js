// Challenge: Implement a queue using two stacks but make enqueing O(1)

class Queue {
    constructor() {
        this.s1 = [];
        this.s2 = [];
    }

    enqueue(item) {
        this.s1.push(item);
    }

    dequeue() {
        if (this.s1.length === 0) {
            throw new Error("Can't pop from empty queue");
        }
        while (this.s1.length !== 0) {
            this.s2.push(this.s1.pop());
        }
        const item = this.s2.pop();
        while (this.s2.length !== 0) {
            this.s1.push(this.s2.pop());
        }
        return item;
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue);

for (let i = 0; i < 3; i++) {
    console.log(queue.dequeue());

}

console.log(queue);