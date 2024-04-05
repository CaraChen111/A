// 1
// function reverseInterge(num){
//     let s = num.toString();
//     let listS = s.split(",");
//     let reverseS = listS.reverse().join('');
//     let res = parseInt(reverseS);
//     return res;
// }

// console.log(reverseInterge(32243))

//2
// function isPalindrome(s){
//     let newS = s.toLowerCase().replace(' ', '');
//     let reverseS = newS.split('').reverse().join('');
//     console.log(newS);
//     console.log(reverseS)
//     return newS == reverseS;
// }
// console.log(isPalindrome("ab"));
// console.log(isPalindrome("madam"));
// console.log(isPalindrome("nurses run"));

//3
// function combinations(s){
//     var res = []
//     for(let i = 0; i < s.length; i++){
//         for(let j = i; j < s.length; j++){
//             // console.log(s.slice(i,j+1))
//             res.push(s.slice(i,j+1));
//         }
//     }
//     return res;
// }

// console.log(combinations('dog'))

//4
// function sortString(s){
//     let array = s.split()
//     let res = array.sort().join('')
//     return res;
// }
// console.log(sortString('abeemrstw'))

//5
// function convertChara(s){
//     var words = s.split(' ');
//     for(let i = 0; i < words.length; i++){
//         words[i] = words[i][0].toUpperCase() + words[i].slice(1,words[i].length);
//     }
//     return words.join(' ')
// }
// console.log(convertChara('the quick brown fox'))

//6
// function countVowel(s){
//     const vowels = ['a','e','i','o','u'];
//     let lowerCaseS = s.toLowerCase();
//     let count = 0;
//     for(let i = 0; i < lowerCaseS.length; i++){
//         if(vowels.includes(lowerCaseS[i])){
//             count += 1;
//         }
//     }
//     return count;
// }

// console.log(countVowel('The quick brown fox'))

//7
// function findLongestWord(s){
//     let words = s.split(" ");
//     let maxLen = 0;
//     let res = ''
//     for(let i = 0; i < words.length; i++){
//         if(words[i].length > maxLen){
//             res = words[i];
//             maxLen = words[i].length;
//         }
//     }
//     return res;
// }
// console.log(findLongestWord('Web Development Tutorial'))

//8
// function isPrime(num){
//     if(num == 2){
//         return true;
//     }
//     for(let i = 2; i < num; i++){
//         if(num % i == 0){
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isPrime(2))
// console.log(isPrime(4))
// console.log(isPrime(5))

//9
// function findType(s){
//     return typeof(s);
// }

// console.log(findType(1))
// console.log(findType('a'))

//10
// function identityMatrix(n){
//     let matrix = [];
//     for(let i = 0; i < n; i++){
//         let row = [];
//         for(let j = 0; j < n; j++){
//             if(i==j){
//                 row.push(1);
//             }else{
//                 row.push(0);
//             }
//         }
//         matrix.push(row);
//     }
//     return matrix;
// }
// console.log(identityMatrix(3))

//11
// function findTwoNumber(arr){
//     let uniqueArr = [];
//     let l = 0;
//     uniqueArr.push(arr[l])
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] == arr[l]){
//             continue;
//         }else{
//             uniqueArr.push(arr[i]);
//             l += 1;
//         }
//     }
//     return [uniqueArr[1], uniqueArr[uniqueArr.length-2]]
// }
// console.log(findTwoNumber([1,2,3,4,5]))

//14
// function amountTocoins(amount, coins){
//     let res = [];
//     for(let i = 0; i < coins.length; i++){
//         if(amount > 0){
//             let d = parseInt(amount / coins[i]);
//             amount = amount - coins[i]*d
//         // console.log(d)
//             if( d>= 1){
//                 for(let j = 0; j<d; j++){
//                     res.push(coins[i]);
//                 }
//                 }
//         }else{
//             break;
//     }

//     }
//     return res;
// }

// console.log(amountTocoins(46, [25,10,5,2,1]))

//15 

// function exponent() {

//     const readline = require('readline');

//     const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });
//     rl.question("Please enter base: ",  (b) =>  {
//         rl.question("Please enter exponent: ", (n) => {
//             // Convert inputs to numbers
//             b = parseInt(b);
//             n = parseInt(n);

//             // Check if inputs are valid numbers
//             if (!isNaN(b) && !isNaN(n)) {
//                 console.log("Result:", b ** n);
//             } else {
//                 console.log("Invalid input. Please enter valid numbers.");
//             }

//             rl.close();
//         });
//     });
// }

// console.log(exponent())

//16
// function uniqueChara(s){
//     let res = new Set();
//     for(let i = 0; i < s.length; i++){
//         if(!res.has(s[i])){
//             res.add(s[i]);
//         }
//     }
//     return [...res].join('');
// }

// console.log(uniqueChara("thequickbrownfoxjumpsoverthelazydog"))

//17

// function countChara(s){
//     const counter = new Map();
//     for(let i = 0; i < s.length; i++){
//         if(counter.has(s[i])){
//             counter.set(s[i], counter.get(s[i]) + 1);
//         }else{
//             counter.set(s[i],1);
//         }
//     }
//     return counter;
// }

// console.log(countChara("abcdeeee"))

//20
// function generateId(n){
//     let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     let count = 0;
//     let res = '';
//     while(count < n){
//         res += characters.charAt(Math.floor(Math.random()*n));
//         count += 1;
//     }
//     return res
// }
// console.log(generateId(3))

//21
// function getSubset(arr, n){

//     const res = [];
//     function backtrack(index, path){
//         if(path.length == n){
//             res.push([...path]);
//             return;
//         }
//         for(let i = index; i < arr.length; i++){
//             path.push(arr[i])
//             backtrack(i+1, path);
//             path.pop();
//         }
//     }
//     backtrack(0,[]);
//     return res;
// }
// console.log(getSubset([1,2,3], 2))

//23
// function findCharac1(s){
//     const d = new Map();
//     for(let i = 0; i < s.length; i++){
//         if(d.has(s[i])){
//         d.set(s[i], d.get(s[i]) + 1);
//         }else{
//             d.set(s[i],1);
//         }
//     }
//     let result = null;
//     for (let [key, value] of d.entries()) {
//         if(value === 1){
//             console.log("here: " + key);
//             result = key;
//             break; // exit the loop early
//         }
//     }
//     return result;
// }
// console.log(findCharac1('abacddbec'))

//24
// function bubbleSort(arr){
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i+1; j < arr.length; j++){
//             if (arr[j] > arr[i]){
//                 temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     }
//     return arr;
// }
// console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]))

//26
// function longestSubstringNoRepeat(s){
//     const uniqueS = new Set();
//     let l = 0;
//     let start = 0;
//     let end = 0;
//     let maxLen = 0;
//     for(let r = 0; r < s.length; r++){
//         while(uniqueS.has(s[r])){
//             uniqueS.delete(s[l]);
//             l += 1;
//         }
//         uniqueS.add(s[r]);
//         if((r-l+1) > maxLen){
//             maxLen = r-l+1;
//             start = l;
//             end = r;
//         }
//     }
//     return s.slice(start,end+1);
// }
// console.log(longestSubstringNoRepeat('abcde'))

//27
// using dp
//const dp = Array.from({ length: n }, () => Array(n).fill(1));
// const n = 5; // Length of the 2D array
// const dp = [];
// for (let i = 0; i < n; i++) {
//     dp[i] = [];
//     for (let j = 0; j < n; j++) {
//         dp[i][j] = 0;
//     }
// }
// class Solution {
//     longestPalindrome(s) {
//         const n = s.length;
//         const dp = Array.from({ length: n }, () => Array(n).fill(1));
        
//         for (let i = n - 1; i >= 0; i--) {
//             for (let j = i; j < n; j++) {
//                 if (s[i] === s[j]) {
//                     if (i === j) {
//                         dp[i][j] = 1;
//                     } else {
//                         dp[i][j] = dp[i + 1][j - 1];
//                     }
//                 } else {
//                     dp[i][j] = 0;
//                 }
//             }
//         }
        
//         let start = 0;
//         let end = 0;
//         let maxLen = 0;
//         for (let i = n - 1; i >= 0; i--) {
//             for (let j = i; j < n; j++) {
//                 if (dp[i][j] === 1) {
//                     if ((j - i + 1) > maxLen) {
//                         start = i;
//                         end = j;
//                         maxLen = j - i + 1;
//                     }
//                 }
//             }
//         }
        
//         return s.substring(start, end + 1);
//     }
// }

// const solution = new Solution();
// console.log(solution.longestPalindrome('babad'));

//28
// function dog(n, animal1){
//     return animal1();
// }

// function animal(){
//     console.log('I am a cat')
// }

// dog(1,animal)

//29
//  function getName(){
//     console.log(arguments.callee.name)
//  }
//  getName()
