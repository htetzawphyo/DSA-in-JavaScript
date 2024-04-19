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

// console.log(queue.items);


class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue2{
    constructor(value) {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0 ? true : false;
    }

    enqueue(data){
        let newNode = new Node(data);
        if(this.isEmpty()){
            this.front = newNode;
        }else{
            this.rear.next = newNode;
        }

        this.rear = newNode;
        this.size++;
    }

    dequeue(){
        if(this.isEmpty()) return;

        this.front = this.front.next;
        this.size--;

        if(this.isEmpty()){
            this.rear = null;
        }
    }

    print(){
        let current = this.front;
        let text = '';
        while(current){
            text += current.value + ' ';
            current = current.next;
        }
        console.log(text);
    }
}

let queue2 = new Queue2();
queue2.enqueue(1);
queue2.enqueue(2);
queue2.enqueue(3);
queue2.enqueue(4);
queue2.dequeue();
queue2.dequeue();
queue2.print();