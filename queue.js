class Queue {
    constructor() {
        this.items = [];
        this.front = 0;
        this.rear = 0;
    }

    enqueue(item) {
        this.items[this.rear] = item;
        this.rear++;
    }

    dequeue() {
        const item = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return item;
    }

    is_empty() {
        return this.rear - this.front === 0;
    }

    peek() {
        return this.is_empty() ? null : this.items[this.front];
    }

    size() {
        return this.rear - this.front;
    }
}

const queue = new Queue();

queue.enqueue("HTML");
queue.enqueue("CSS");
queue.enqueue("JS");
queue.enqueue("NODEJS");
queue.dequeue();
queue.dequeue();

console.log(queue.items);
// console.log(queue.peek());
// console.log(queue.is_empty());
// console.log(queue.size());