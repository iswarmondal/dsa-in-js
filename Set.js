/*
*   It's a type of array,
*
*   Elements in the set don't have any duplicate element
*
*   The elements are not in any kind of order
*   
*   ES6 already have a Set class to create new sets, but here just to get more
*   functionality we are creating our own constructor
*
*   the add method elemenets the duplicates
*/



function mySet() {
    // the collection variable holds the values of the set elements
    var collection = [];

    // check the presence of an element in the set
    this.has = function(element){
        return (collection.indexOf(element) !== -1);
    }

    // return all the values of the set
    this.values = function(){
        return(collection);
    }

    // add an element to the set
    this.add = function(element){
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    }

    // remove an element
    this.delete = function(element){
        if(this.has(element)){
            let index = collection.indexOf(element);
            collection.splice(index, 1);
            return true;
        }
        
        return false;
    }

    // size of the set
    this.size = function(){
        return collection.length;
    }

    // union with another set
    this.union = function(otherSet){
        var unionSet = new mySet();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach((e)=>{
            unionSet.add(e);
        })

        secondSet.forEach(e =>{
            unionSet.add(e);
        })

        return unionSet;
    }

    // intersection with another set
    this.intersection = function(otherSet){
        var intersectionSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(e=>{
            if(otherSet.has(e)){
                intersectionSet.add(e);
            }
        })

        return intersectionSet;
    }

    // differences with anoter set
    this.difference = function(otherSet){
        var differeceSet = new mySet();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(e=>{
            if(!otherSet.has(e)){
                differeceSet.add(e);
            }
        })
        secondSet.forEach(e=>{
            if(!this.has(e)){
                differeceSet.add(e);
            }
        })
        return differeceSet;
    }
}

let s1 = new mySet();
let s2 = new mySet();
s1.add("a");
s1.add("b");
s1.add("c");
s2.add("b");
s2.add("d");
s2.add("e");
console.log(s1.values());
console.log(s2.values());
console.log(s1.intersection(s2).values());
console.log(s1.difference(s2).values());
console.log(s1.union(s2).values());
console.log(s1.has("a"));