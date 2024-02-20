class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = null;
    }

    prepand(data) {
        const newNode = new Node(data);

        if(!this.head){
            this.head = newNode;
            return;
        }
        newNode.next = this.head;
        this.head = newNode;
    }

    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
        // console.log(this.head); // object တွေက reference အနေနဲ့ အလုပ်,လုပ်လို့ မူရင်း object ကိုပါ ပြောင်းသွားတာ
    }

    insert(position, data) {
        if(position === 0) {
            return this.prepand(data);
        }
        
        let newNode = new Node(data);
        let current = this.head;
        let previous = null;
        let i = 0;

        while( i < position){
            previous = current;
            current = previous.next;
            i++;
        }

        newNode.next = current;
        previous.next = newNode;
        this.size++;
    }

    index_of(element) {
        let current = this.head;
        let i = 0;
        
        while(current) {
            if(current.data === element) {
                return i;
            }
            i++;
            current = current.next;
        }
        return -1;
    }

    delete_at(position) {
        if(position === 1) {
            this.head = this.head.next;
        }else {
            let previous = this.head;
            let i = 1;
            while( i < position - 1) {
                previous = previous.next;
                i++;
            }
            let current = previous.next;
            previous.next = current.next;
        }
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

// Example usage:
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);
linkedList.delete_at(3);


linkedList.print();