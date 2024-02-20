class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 1;
    }

    insert_at(position, value) {
        if(position >= 1 && position <= this.size) {
            let newNode = new Node(value);
            let current = this.head;
            let prev = null;
            if(position === 1){
                if(!this.head){
                    this.head = newNode;
                    this.tail = newNode;
                } else {
                    newNode.next = current;
                    current.prev = newNode;
                    this.head = newNode;
                }
            }else if(position === this.size) {
                current = this.tail;
                current.next = newNode;
                newNode.prev = current;
                this.tail = newNode;
            }else {
                let i = 1;
                while(i < position) {
                    prev = current;
                    current = current.next;
                    i++;
                }
                newNode.next = current;
                prev.next = newNode;
                current.prev = newNode;
                newNode.prev = prev;
            }
            this.size++;
            return true;
        }else {
            return false;
        }
    }

    remove_at(position) {
        if(position >= 1 && position <= this.size) {
            let current = this.head;
            let prev = null;
            if(position === 1) {
                if(this.size - 1 === 1) {
                    this.head = null;
                    this.tail = null;
                }else {
                    this.head = current.next;
                    current.prev = null;
                }
            } else if(position === this.size - 1) {
                current = this.tail;
                this.tail = current.prev;
                this.tail.next = null;
            } else {
                let i = 1;
                while(i < position) {
                    prev = current;
                    current = current.next;
                    i++;
                }
                prev.next = current.next;
                current.next.prev = prev;
            }
            this.size--;
        }else {
            return null;
        }
    }

    print() {
        let current = this.head;
        let str = '';
        while(current) {
            str += current.value + ' ';
            // console.log(current.value);
            current = current.next;
        }
        console.log(str);
    }
}

const doublyLL = new DoublyLinkedList();
doublyLL.insert_at(1,1);
doublyLL.insert_at(2,2);
doublyLL.insert_at(3,3);
doublyLL.insert_at(4,4);
doublyLL.remove_at(1);

doublyLL.print();   