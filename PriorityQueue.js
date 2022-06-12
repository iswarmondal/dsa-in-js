// Priority queue is nothing but a queue with some extra features.
// It's like a queue, but it's first in first out, but it's also sorted.
// every single element in this queue will have a priority associatded with it.
// the less the priority number the more important the element is.
// Here just the enqueue and dequeue methods are a bit different than in the queue.
var PriorityQueue = function() {
    var collection = [];

    this.enqueue = function(element) {
        if (this.isEmpty()) {
            collection.push(element);
        } else {
            var added = false;
            for (var i = 0; i < collection.length; i++) {
                if (element[1] < collection[i][1]) {
                    collection.splice(i, 0, element);
                    added = true;
                    break;
                }
            }
            if (!added) {
                collection.push(element);
            }
        }
    }

    this.dequeue = function() {
        var value = collection.shift();
        return value[0];
    }

    this.front = function() {
        return collection[0];
    }

    this.size = function() {
        return collection.length;
    }

    this.isEmpty = function() {
        return (collection.length === 0);
    }
}

// test the priority queue
var pq = new PriorityQueue();
pq.enqueue(['a', 1]);
pq.enqueue(['b', 2]);
pq.enqueue(['c', 3]);
pq.enqueue(['d', 4]);
pq.enqueue(['e', 5]);
console.log(pq.front());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.isEmpty());
console.log(pq.size());
