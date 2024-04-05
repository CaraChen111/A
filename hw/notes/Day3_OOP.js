
// OOP ---- Object Oriented Programming

// instance

// const student = new Person()

// class Person{
//     constructor(name){this.name = name}

//     name = "human"
//     sayHi = function(){ console.log("hi")}
// }
// Attributes, Methods 


// Abstraction
// Encapsulation
// Inheritance
// Polymorphism


// Abstraction
// class Person {
//     constructor(){
//         if(this.constructor == Person){
//             throw new error("You cannot create an instance of Abstract Class")
//         }
//     }
//     info(){
//         // this is the function to get the info of person   
//         throw new error("you need to implement the abstract class function")

//     }

//     getAge(){
//         console.log("the trainer's age is 20")
//     }
// }
// class Trainer extends Person {
//     info(){
//         // super.info();
//         console.log("I am a trainer")
//     }
// }
// const JR = new Trainer();
// JR.info();
// JR.getAge();

// Encapsulation
// class Person {
//     constructor(name, age) {
//         this._name = name;
//         this._age = age;
//     }

//     get name() {
//         console.log('Get Name');
//         return this._name;
//     }

//     set name(newName) {
//         console.log('Set name');
//         this._name = newName + " the teacher ";
//     }
// }

// let p = new Person('Bob', 18);
// console.log(p.name = "David") //setter

// let p2 = new Person('David',30)

// console.log(p.name)  //getter
// console.log(p.name = "David") //setter

// console.log(p._name)
// console.log(p.name)

// console.log(p.name);
// p.name = "Pat";
// console.log(p.name);



// scroing board
// class ScoringBoard {
//     constructor(score){
//         this._score = score
//     }

//     get currentScore(){
//         return this._score
//     }

//     set currentScore(newScore){
//         if (newScore > 0){
//             this._score = newScore;
//         }
        
//     }

//     increase(){
//         // this._score = this._score + 1;
//         this.currentScore =  this.currentScore + 1
//     }

//     decrease(){
//         // this._score = this._score - 1
//         this.currentScore =  this.currentScore - 1
//     }
// }

// const newBoard = new ScoringBoard(0)
// newBoard.increase()
// newBoard.increase()
// newBoard.increase()
// console.log(newBoard.currentScore)




// // inheritance
// class Person {
//     constructor(name, age) {
//         this._name = name;
//         this._age = age;
//         this.salary = 0;
//     }

//     get name() {
//         console.log('Get Name');
//         return this._name;
//     }

//     set name(newName) {
//         console.log('Set name');
//         this._name = newName;

//     }

//     getSalary() {
//         console.log('without param');
//         return this.salary;
//     }
// }

// class Employee extends Person {
//     constructor(name, age, company) {
//         super(name, age);
//         this.company = company
//     }

//     getSalary(baseSalary) {
//         // console.log('With param');
//         return this.salary + baseSalary; // 0 + undefined => NaN
//     }
//     greetings(){ 
//         // 
//     }
// }
//prototype vs. _proto_ ([[prototype]])

// const JR = new Employee("JR",30,"Antra")
// console.log(JR.getSalary(3000))
// console.dir(Array.apply())
// console.dir(Employee)
// console.dir(Employee.prototype)
// // console.dir(JR)
// // [[prototype]] = _proto_


//  const arr = new Array(3)
//  Array.prototype.map = () =>{
//     console.log("My map")
//  }

//  class subArr extends Array{
//     map(){
        
//     }
//  }
//  const newArr = new subArr(5)
//  newArr.map(()=>{})

//  console.dir(newArr)

//  const newFoo = () => {}
//  console.dir(newFoo)
//  arr.map(()=>{})
//  console.dir(arr)

//Polymorphism
//make class reusable
// class Shape{
//     draw(){
//         return "I am a generic shape."
//     }
// }
// class Circle extends Shape {
//     constructor(radius){
//         super();
//         this.radius = radius;
//     }
//     draw() {
//         return 'Drawing a circle'
//     }
//     area(){
//         return Math.PI * this.radius *this.radius;
//     }
// }
// class Square extends Shape {
//     constructor(side){
//         super();
//         this.side = side;
//     }
//     draw() {
//         return 'Drawing a square'
//     }
//     area(){
//         return this.side * this.side;
//     }
// }
// const shapes = [new Circle(5), new Square(10)];
// shapes.forEach((shape)=>{
//     console.log(shape.draw());
//     console.log(shape.area());
// })
///////////////////////////////////////////////////////
// prototype
// _proto_

// const trainer ={
//     name:"JR"
// }
// console.log(trainer)


// class Person{
//     constructor(){

//     }
// }
// console.log(Person.prototype)

// const trainer = new Person()
// console.log(trainer.__proto__)
// console.log(Object.getPrototypeOf())
// Object.setPrototypeOf()



// https://www.javascripttutorial.net/javascript-constructor-prototype/

// https://learnbatta.com/course/javascript/prototypes/


// function Trainer(){
//     this.name = "JR";
// }

// Trainer.prototype.name = "David"

// Trainer.prototype.getSalary = function(base){ return base}

// const trainer = new Trainer()
// console.log(trainer);
// console.log(trainer.getSalary(3000))

// portotype chain
// https://giamir.com/pseudoclasses-and-prototypal-inheritance-in-JS


// function Person(name){

//     this.name  = name
    
// }
// function Student(){
//     this.name = "student"
// }


// Student.prototype = Object.create(Person.prototype)
// const JR = new Student()

// console.log(JR)
// console.log(JR)

////////////////////////////////////////////////////////////////
// Object is the prototype of Array
// console.log(Array.prototype.__proto__ === Object.prototype); 

const arr = [1,2,3,4,5]
// console.log(arr.__proto__);

const timesTwo = function(number){
    return number*2
}
// const newArr = arr.map(timesTwo)


// console.log(newArr);

// Implement Array.myMap
Array.prototype.myMap = function(cb) {
    const newArr =[];
    for (let i = 0; i < this.length; i++){
        newArr.push(cb(this[i], i, this));
    }
    return newArr;
}
const newArr = arr.myMap(timesTwo)


console.log(newArr);

// Array functions
// map filter forEach reduce 
// Array.prototype.Mymap  MyReduce

