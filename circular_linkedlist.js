class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    prepand(value) {
        let newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.tail.next = newNode;
        }else {
            newNode.next = this.head;
            this.head = newNode;
            this.tail.next = this.head;
        }
        this.size++;
    }

    remove() {
        if(this.size === 1) {
            this.head = null;
            this.tail = null;
        }else {
            let current = this.head;
            this.head = current.next;
            this.tail.next = current.next;
        }
        this.size--;
    }

    print() {
        let current = this.head;
        let str = '';
        if(!current){
            console.log('List is empty');;
        }else {
            do {
                str += current.value + ' ';
                // console.log(current.value);
                current = current.next;
            } while (current !== this.head);
        }
        console.log(str);
    }
}

const circularLinkedList = new CircularLinkedList();
circularLinkedList.prepand(1);
circularLinkedList.prepand(2);
circularLinkedList.prepand(3);
circularLinkedList.prepand(4);

circularLinkedList.remove();

circularLinkedList.print();