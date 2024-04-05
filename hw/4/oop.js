//implement your own prototype methods
// for array functions: filter and reduce.

// filter
const myCustomFilterFunction = function(callback) {
    console.log('My Custom Filter Function!');

    const newArray = [];

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            newArray.push(this[i]);
        }
    }

    return newArray;
}
// arr = [1, 2, 3]
// expected = [2, 3]
console.log(arr.filterFromScratch((element) =>  element > 1));




// reducer

const myCustomReduceFunction = function(callback) {
    console.log('My Custom Reduce Function!');
}
Array.prototype.reduceFromScratch = myCustomReduceFunction;

const arr = [1, 2, 3];

arr.reduceFromScratch();

// arr = [1, 2, 3]
// expected = 6
console.log(arr.reduceFromScratch((accumulator, element) => accumulator + element, 0));