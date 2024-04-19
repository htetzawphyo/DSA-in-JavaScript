class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.length = 0;
    }

    isEmpty() {
        return this.length === 0 ? true : false;
    }

    push(data) {
        let node = new Node(data);
        node.next = this.top;
        this.top = node;
        this.length++;
    }

    pop() {
        if(this.isEmpty()) return;

        this.top = this.top.next;
        this.length--;
    }

    peek() {
        return this.isEmpty() ? null : this.top.value;
    }

    print() {
        let current = this.top;
        let text = '';
        while(current) {
            console.log(current);
            text += current.value + ' ';
            current = current.next;
        }
        console.log(text);;
    }
}

const stack = new Stack();
stack.push(1); // value: 1 , next: null
stack.push(2); // value: 2 , next: {value:1, next: null}
stack.push(3);
stack.push(4);
stack.print();
stack.push(5);
stack.pop();
stack.pop();
stack.push(5);
// stack.print();
// console.log(stack.peek());