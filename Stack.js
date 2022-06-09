// Stack is a data structure that stores a list of items in a stack. Here's how to create a stack class
const Stack = function() {
    this.count = 0;
    this.storage = {};

    // Add an item to the end of the stack
    this.push = (value) =>{
        this.storage[this.count] = value;
        this.count++;
    }

    // Remove and return the value at the end of the stack
    this.pop = () =>{
        if(this.count === 0){
            return (undefined)
        }

        this.count--;
        let result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    // Return the size of the stack
    this.size = () => this.count;

    // Return the value at the end of the stack
    this.peek = () =>{
        return (this.storage[this.count - 1])
    }
}

// Test the Stack
let myStack = new Stack();
myStack.push("Call");
myStack.push("me");
myStack.push("dady");
console.log(myStack.size());
console.log(myStack.pop());
console.log(myStack.size());