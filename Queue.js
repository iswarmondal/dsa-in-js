// It's like stacks, but it's first in first out
function Queue() {
    collection = [];

    // add an element to the queue
    this.enqueue = function(element) {
        collection.push(element);
    }

    // remove the next element from the queue
    this.dequeue = function(){
        return (collection.shift());
    }

    // size of the queue
    this.size = function(){
        return collection.length;
    }

    // show the next element from the queue without removing it
    this.front = function(){
        return collection[0];
    }

    // show if the element is empty or not
    this.isEmpty = function(){
        return (collection.length === 0);
    }

}

// test the queue
var q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q.front());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.isEmpty());
console.log(q.size());
