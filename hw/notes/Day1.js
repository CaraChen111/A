//What is Javascript ?
//ECMA --- European Computer Manufacturers Association

// Transiplie  ===> Compile

// ------- Primitive data types
// number, boolean, string, undefined, null, bigInt, symbol
// null and undefined
// console.log(typeof (undefined));
// console.log(typeof (null));

// command + /
// Ctrl + /

// object/ reference Type

// console.log(typeof [])

// function foo() {

// }
// console.log(typeof foo)

// const a = new Array()
// console.log( typeof a)
// console.log(a)


// ------- heap stack
// https://blog.devgenius.io/mutable-and-immutable-in-javascript-78a3cbc6187c

// ------- Mutable(changeable) / Immutable (unChangeable)
// let a = 123
// a = 234;
// const c = 222;
// c = 444;
// console.log(c)

// const obja = {name:"JR"}
// obja.name = "David"
// console.log(obja)

// const dataSource = [1,2,3,4,5]
// const copy = [...dataSource]
// copy.push(6)
// console.log(copy);

// Object.freeze(dataSource)

// dataSource.push(6)

// console.log(dataSource);

// let b = {name:"JR"}

// ------- Pass by reference / Pass by value

// let a = 10;
// let b = a;
// console.log(b)
// b = 12
// console.log(a)

// const education = {
//     school: "antra"
// }

// const a = {
//     number : 10,
//     education,
    
// };

// a.education = {
//     school:"ABC"
// }

// console.log(a)
// const b = a;

// const c = b;

// b.number = 12

// console.log(b.number)
// console.log(a.number)
// console.log(c.number)


// const dataSource = [1,2,3] // immutable
// const newList = [...dataSource] 
// newList.push(4)

// ------ Coercion
// let a = 12
// let b = "text"
// let c = a + b
// let c = b + String(a)
// let c = a + Number(b)
// console.log(c)

// implicit vs explicit coercion(type casting)
// https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/


// Primitive types to Primitive types
// to String

// "+" with a string in the calculation

// let a = 12
// let b = "text"
// console.log(a+b)
// statement ? c : d

//unary , binary ,ternary operators

// to Number : Math Operators. unary +
// let a;
// let b = "abc"

// console.log(typeof(NaN))

// console.log(NaN === NaN)
// typeof(NaN)

// let c = a+b
// console.log(c)


// to Boolean: Logic operator, if/while
// const a = {}
// const b = 0
// const c = ""
// if(a){
//     console.log("here a")
// }
// if(b){
//     console.log("here b")
// }
// if(c){
//     console.log("here c")
// }


// examples
// let res = 1 + "1";    // "11"
// let res = 6  + 5  + "20";   // "1120"
// let res = null + "5";  // "null5"
// let res = null + 5;  // 5
// let res = + "abc";  // NaN
let res = "40" * 2;
// let res = 12 / "2";
// let res = +"123";
// let res = + false;
// let res = + true;
// let res = true + false;
// let res = "1" + true + 1;
// let res = true + 1 + "1";

console.log(res);

// Object to primitive types
// const a = {name : "JR"}
// console.log("this is the datasource ===>")
// console.log(a)



// ------ == (lose equility)/ === (strict equility)
// console.log('1' == 1);

// const a  = {
//     content:{
//         name:"JR"
//     }
// }
// const b = {
//     content:a.content
// }
// console.log( a.content === b.content)
// console.log( a === b)

//   a's address ====> content------> same object
//   b's address ====> content------>


// console.log(NaN === NaN)
// console.log(+"asdas" === +"123sada")
// console.log(typeof NaN)


// ------ Truthy and falsy

//falsy 
// console.log(Boolean(''))           // false
// console.log(Boolean(0))          // false     
// console.log(Boolean(-0))           // false
// console.log(Boolean(NaN))          // false
// console.log(Boolean(null))         // false
// console.log(Boolean(undefined))    // false
// console.log(Boolean(false))        // false

// serverArr = [1,2,3]
// if(serverArr){
//     alert()
//     for(let i = 0 ; i < arr.length; i++){
//     }
// }


//truthy
// console.log(Boolean({}))           // true
// console.log(Boolean([]))             // true
// console.log(Boolean(function() {}))  // true

// console.log(Boolean(Symbol()))       // true
// console.log(!!Symbol())              // true
 


// ------ Object

// ------ Create an Object
// let obj = {
//     name: ""
// }
// console.log(obj);

// let obj2 = Object.create({name:"JR"});
// console.log(obj2);

// let obj3 = new Object({});

// console.log(obj3);

// console.log(Function)

// Object.constructor = (a,b) => {console.log(a+b)}

// const obj1 = new Object(1,2)

// const newObj = new Object(1,2)
// console.log(newObj.c)


// ------ access Object Property
// const personInfo = {
//     name : "JR"
// }

// console.log(personInfo.name)
// console.log(personInfo["name"])

// const arr = []
// arr[0] = 123
// console.log(arr)



// const property = "name"
// console.log(personInfo[property])

// Object common used static methods
// let objectSample = { name : "JR",
//                      gender:"male",
//                      Occupation:"trainer"
//                     }

// console.log(Object.keys(objectSample))
// console.log(Object.values(objectSample))
// console.log(Object.entries(objectSample))
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object


// const a = {
//     content:{
//         name:"JR"
//     }
// }

// Object.freeze(a);
// a.age = 30;
// Object.assign(a,{"age":30});


// Other types of Object
// Class
// class Person {
     
//     constructor(name,age) {
//         this.name = name ? name : "JR"
//         this.age = age;
//     }
//     isHumanBeing = true;

//     firstCharofName(){
//         return this.name.charAt(1)
//     }
// }
// const person1 = new Person()
// console.log(person1)

//how to write placeholder for input parameters

// const trainer = new Person("David",40,)
// console.log(trainer.name)

// function createPerson(name, name2,name3,age){

//     const newPerson = {}
//     newPerson.name = name;
//     newPerson.age = age;
//     newPerson.firstCharofName = () => {
//         console.log("hello i am from function");
//         return name.charAt(1)
//     }
//     console.log(newPerson.name);
//     console.log(newPerson.age);

//     return newPerson
// }

// createPerson([,30])  // createPerson(undefined,undefined,undefined,30)

// console.log(...Array(3))
// intentional leave empty input parameter 
// createPerson(...Array(2),30)

//syntax sugar


// const createPersonwithArrow = (name,age) => { 
//     console.log(name);
//     console.log(age)
// }

// function createPersonwithArrow(name,age){
//     console.log(name);
//     console.log(age)
// }


// ------ Declaring Variables in Javascript
// Var vs let vs const : scopes : global / function /block



// function foo() {
//     if (true) {
        
//         if(true){
//             console.log(a);
//         }  
//         var a = 3;
//         console.log(a)
//     }
// }
// foo();


// let a = 100
// a = 105
// console.log(a)

// const b = 200
// b = 205
// console.log(b);

// ------ scopes
// global scope, function scope, block scope


//------ When to use const / let
// const obj = { name: 'Anna' };
// obj.name = "bob";
// obj.address = '123 tst ST'
// obj = {};
// console.log(obj);

// null vs. undefined vs. not defined 
// return obj1.name
// cannot get property "name" of null/ cannot of property "name" of undefined



// variable & hoisting: works on declarations/name, not about initialization

// console.log(hoist);
// let hoist = 12;

// ------ function hoisting

// named();

// function named() {
//     console.log('hello');
// }
