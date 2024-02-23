class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item, priority) {
        let element = {item, priority};
        let added = false;

        for (let i = 0; i < this.items.length; i++) {
            if(element.priority < this.items[i].priority){
                this.items.splice(i,0,element);
                added = true;
                break;
            }
        }

        if(!added){
            this.items.push(element);
        }
    }

    print() {
        for (let i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    }
}

const queue = new Queue()

queue.enqueue("David", 1)
queue.enqueue("Rose", 2)
queue.enqueue("Tom", 3)
queue.enqueue("Grandfather", 0)
queue.enqueue("Pregnant woman", 0)
queue.enqueue("Lily",2)
queue.print()