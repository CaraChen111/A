
/////////////////////////////////////////////////////////////////

// Javascript is single threaded, non-blocking 

// Synchronous/ Asynchronous

// Synchronous code runs in sequence. 
// This means that each operation must wait for the previous one to complete before executing.
// Asynchronous code runs in parallel. 
// This means that an operation can occur while another one is still being processed.
// console.log('--------- work synchronously -------------');
// console.log('Finish Cooking');
// console.log('Finish Washing Clothes');
// console.log('Finish Eating');

// console.log('--------- work asynchronously ------------');
// setTimeout(() => console.log('Finish Washing Clothes'), 0);
// console.log('Finish Cooking');
// console.log('Finish Eating');


// Event Loop
// image : https://medium.com/@Rahulx1/understanding-event-loop-call-stack-event-job-queue-in-javascript-63dcd2c71ecd
// heap/ call stack/ callback queue(event queue)/ Web Api
// https://nodejs.dev/en/learn/the-nodejs-event-loop

// function foo1(){
//     console.log("first")
// }
// function foo2(){
//    setTimeout(() => {
//     console.log("Second")
//    }, 1000); 
// }
// function foo3(){
//   console.log("Third")
//     for(let i = 0; i < 100000000; i++){
//     }
// }

// foo1();
// foo2();
// foo3();

// function sync(ms) {
//     let start = Date.now(),
//         now = start;
//     while (now - start < ms) {
//       now = Date.now();
//     }
//     console.log("Sync: finish main stack in " + ms/1000 + " seconds")
// }

// // sync(2000)
// // sync(3000)
// // sync(1000)


// function async(ms){
//     setTimeout(() => {
//         console.log("Async: used " + ms/1000 + " seconds to finish")
//     }, ms);
// }

// // async(4000)
// // async(7000)
// // async(1000)

// // sync(2000)
// // async(7000)
// // sync(3000)

// async(2000)
// async(1000)
// sync(3000)


// const cb = (x) => {
//     console.log(x)
// }
// function main(){
//     async(cb)
// }

// function async(func){
//     setTimeout(() => {
        
//         let str = "JR"
//         cb(str)
//     }, 1000);
// }


// main()


////////////////////////////////////////////////////////////////////
// callback hell
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing
// doStep1 => use result for doStep2 => use result for doStep3

// cb1=>{
//     cb2=>{
//         cb3=>{
//             cb4=>{}
//         }
//     }
// }

// let resA = ''
// let resB = ''
// let resC = ''

// const AuthA = () => {
//     setTimeout(()=>{ resA = 'A is true'; return resA}
//         , 1000)
// }
// const AuthB = (resA) => {
//     setTimeout(()=>{resB = resA + "B is true"; return resB}
//         , 500)
// }

// const AuthC = () => {
//     setTimeout(()=>{return "C is true"}
//         , 400)
// }

// const AuthAll = () => {
 
//    setTimeout(()=>{
//     resA = 'A is true';
//     console.log(resA)
//       setTimeout(()=>{
//         resB = resA + "B is true"; 
//         console.log(resB)

//     } , 500)
//    }

//    , 1000)

// } 
// AuthAll()
// is there anyway that we can chain them as AsyncA.then(AsyncB).then(AsyncC)

//////////////////////////////////////////////////////////////////////////
// Promise

// promise
// 3 states

// pending
// fullfilled
// reject
// const userInfo = []
// const resolve = (data) =>{
//     userInfo = data;
//     console.log(data)
// }
// const reject = (error) => {
//     console.log(error)
// }
// const returnPromise = new Promise(
//     (res)=>{console.log(res)}
// )

// const newPromise = Promise.resolve("this is the message")

  
// newPromise.then(
//     (res)=> {
//         console.log(res+"no error"); 
//         return "this is for the next stage";
//     }).then(res=> console.log(res + " respond"))
//     .catch(err=> console.log(err, "we found an error"))

// .then() : consume data
// .catch(): handle errors
////////////////////////////////////////////////////////////////////
//https://medium.com/@armando_amador/how-to-make-http-requests-using-fetch-api-and-promises-b0ca7370a444

// fetch(url).then(res=> console.log(res)).catch()

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: "POST",
//   body: JSON.stringify(_data),
// })

// fetch("https://jsonplaceholder.typicode.com/posts/4")
//  .then((response) => {
//    if (!response.ok) {
//      throw new Error("Request failed");
//    }
//    return response.json();
//  })
//  .then((data) => {
//    console.log("Fetched data:", data);
//  })
//  .catch((error) => {
//    console.error("Error fetching data:", error);
//  });



////////////////////////////////////



// returnPromise.then(
//    res =>{
//       console.log("resolve" + res)
//       this.data = res;
//       // console.log(this.data)
//    }).catch(error=> console.log(error))

// Promise chaining

// returnPromise.then(
//    res=> {
//       if(res){
//       return true
//    }else return false
//    }, 
//    error=>{
//       console.log(error)
//    }
//    ).then(res=>{
//       // console.log(res)
//       return "you pass validation"
//    },
//    error=>{}).then(res=>console.log(res)

//    ).catch()


// console.log(1)
// const p = new Promise((resolve, reject) => {
//     console.log(2)
//     resolve("resolved");
//     console.log(3)
//     })
//     p.then(item => console.log(item, 5))
// console.log(4)



// .then(
//     (res) => { console.log(res += res)},
//     (error) => console.log(error))

// Promise.then(a,b)  === Promise.then(a).catch(b)

///////////////////////////////////////////////////////
// promise.all()

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 300, 'foo 300');
// });
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 200, 'foo 200');
// });
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(reject, 100, 'error foo 100');
// });


// Promise.all([promise1, promise2, promise3]).then((values) => {
//     console.log(values);
// }).catch((err)=>{console.log(err)});
// expected output: Array [3, 42, "foo"]

//Micro Task / Macro Task
//job queue

// console.log('Message no. 1: Sync');

// setTimeout(function() {
//    console.log('Message no. 2: setTimeout');
// }, 0);

// var promise = new Promise(function(resolve, reject) {
//    resolve();
// });

// promise.then(function(resolve) {
//    console.log('Message no. 3: 1st Promise');
// })
// .then(function(resolve) {
//    console.log('Message no. 4: 2nd Promise');
// });

// console.log('Message no. 5: Sync');






// Async Await

// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve('resolved first');
//       }, 2000);
//     });
//   }

// //  resolveAfter2Seconds().then(res=>console.log(res))
// //  resolveAfter2Seconds().then(res2=>console.log(res2))

 
//   console.log(1)
//  async function asyncCall() {

//     console.log("inside async")
//     const result = await resolveAfter2Seconds();

//     console.log(result)
//     console.log("runs next")
//     // console.log(result)
//     // const result2 = await resolveAfter2Seconds().then().catch();
//     // console.log(result2)
//    }
  
// asyncCall();
// console.log("runs outside")
// console.log("here")
  
  

