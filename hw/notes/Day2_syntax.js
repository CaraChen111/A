// loops

// for(let i = 0 ; i< arr.length; i++){
//     arr[i]
// }

// for of

// const array1 = [{name:"a"},{name:"b"},{name:"c"}]
// let counter = 0;
// for(let item of array1){
//     counter ++
//     console.log(counter)
//     console.log(item)   
// }

// for (let [index, value] of array1.entries()) {
//     console.log(index)
//     console.log(value)
// }



// const arr2 = [1,8,7,6,5]
// for (let ele in arr2) {
//     console.log(ele);
//     // ele === array[i]
// }

// for in
// obj1 = {
//     name:"JR",
//     age:30
// }
// for (let key in obj1) {
//     // console.log(key)
//     // console.log(key + ": " + obj[key]);
// }

//argument
// function foo() {
//     for (let index = 0 ; index < arguments.length; index++) {
//         console.log(arguments[index]);
//     }
// }
// foo(1, 2, 3, 4, 5, 6);

// rest parameter vs spread operator 
// ...

// rest parameter
// function foo2(a,b,c,...args) {
//     console.log(args)

// }

// function foo2(a,b,...param,c){

// }

// foo2(1, 2, 3, 4, 5, 6);

// spread operator
// const student = {
//     name:"JR",
//     age:30
// }

// const studentNew = { ...student,  name:"daivd"}

// console.log(studentNew)

// const arr1 = [1,2,3,4,5]
// const arr2 = [...arr1]
// arr2.push(6)
// console.log(arr2);
// console.log(arr1)

// const studentArr = [{name:"JR"},{name:"David"}]
// console.log([...studentArr,{name:"miranda"}])

// console.log(studentNew)

// function sum(x, y, z) {
//     return x + y + z;
// }
// const numbers = [1, 2, 3]
// console.log(sum(...numbers));


// const student1 = {
//     name:"JR",
//     company:{
//         year:2019,
//         name:"Antra"
//     }
// }

// const student2 = {...student1}

// // console.log(student2)

// student2.company.year = 2021

// console.log(student1)


// const arr1 = [1, 2, 3];
// const arr2 = [...arr1];
// // console.log(arr2)

// // console.log(arr1 === arr2);
// console.log(arr1 == arr2);



// let obj1 = { name: "Bob" }
// let obj2 = { name: "Bob" }
// console.log(JSON.stringify(obj1))
// console.log(JSON.stringify(obj1) == JSON.stringify(obj2));
//compare the value in the stack


// const a = {
//     content:{
//         name:"JR"
//     }
// }

// a's address  ===> in heap (content's address)

// c's address => {...a.content} content's address

// shallow copy and deep copy

// USE Spread Operator
// const obj1 = {   // outer
//     info :   // inner
//     {
//         name : "JR"
//     },
//     age : 30
// }

// const obj2 = {
//     ...obj1
// }

// obj2.age = 40
// console.log(obj1)

/////////////////Use Object.assign


// let student1 = {
//     name: "Manish",
//     company: "Gfg"
// }
// let student2 = Object.assign({}, student1);
// console.log(student2)


// USE JSON METHODS


// let student1 = {
//     name: "Manish",
//     company: "Gfg"
// }
// // // const b = {...a}
// console.log(JSON.stringify(student1))
// JSON.parse()

// "{'name':JR}"

// const c = {...a, age:30}
// // console.log(c)
// c.content.name = "David";
// console.log(a);
// ...

// "use strict"

// ES - EcmaScript
// ES6 new features
// let const
// destucturing
// arrow functions

// ES7 Array.includes()
// ES8 Object.entries, Object.values, Async Await 
// ES9 rest/spread operator with Objects
// ES10 bigInt
// ES2022  , release in June, .at()   .at(-1)  === arr[arr.length-1]
// arr[0] = arr.at(0)
// arr[arr.length-1]. arr.at(-1)

// caniuse.com
///////////////////////////////////////////////////////////////

// Destructure Array
// let a = 1
// let b = 2
// let c = 3

// let [a, b, c] = [1, 2, 3]


// let [a, b] = [1, 2, 3]
// let [a, b, c, d] = [1, 2, 3]
// let [a, b, c = 33, d = 44] = [1, 2, 3]

// let [a, , b] = [1, 2, 3]
// let [ , b ] = [1, 2, 3]


// Desturcture Objects

// let obj = { x: {name:"JR"}, y: 2 }

// let { x, y } = obj
// x.name = "David"
// console.log(obj)

// let { a, b } = obj

// console.log([a,b])
// let { a, ...x } = { a: 1,  c: 3 }
// console.log(x)

// let { a:x, b:y } = { a: 2, b: 3 }
// console.log("a = ", a)
// console.log("b = ", b)
// console.log("x = ", x)
// console.log("y = ", y)

datasource = {
    id:1,
    name:"JR",
    occup:"developer"
}

let {id , name} = datasource
console.log(id + name)

///////////////////////////////////
// const obj2 = {name:"JR", id:1}
// let obj1 = {...obj2};
// obj1.name = "Moe"
// // console.log(obj2.name)
// const {name} = obj2

// console.log(name)
// obj1 = { age:30, name:name}
// console.log(obj1)
// clone only part of Obj2 into Obj1


/////////////////////////////////////////////////////////////
