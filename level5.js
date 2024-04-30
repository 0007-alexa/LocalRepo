// // functions --> perform specific task can be invoke
// // function functionName(){//do some work}

// function myFunction(){
//     console.log("Welcome to Apna College");
//     console.log("I'm learning JS :)");
// }
// console.log(myFunction());
// myFunction(); // function call

// function MyFunction(msg, n){ //parameter --> input
//     console.log(msg * n);
   
// }
// MyFunction("hello world!",100); //argument

// // NaN --> not a number

// // calculate sum
//  function sum(x , y){ // local variable -->scope
//     sum = x + y;
//     console.log("before retun");
//     return sum;
//     console.log("after retun");
// }
// let val = sum(3 ,8);

// console.log(val);
// // fun parameters ---> like local variable --> block scope
// // i.e they do not exsist after that block

// // Arrow func (=>)--> compact way

// function sum(a , b){
//     return a * b;
// }
// const arrowSum = (a,b) => {
//     console.log(a * b);
// };
// arrowSum(8,9);

// function sub(x ,y){
//     return x -y;
// }
// const arrowSub = (x ,y) =>{
//     console.log(x - y);
// };
// arrowSub(72, 50);

// // practise qsn
// function countVowels(str){
//      let count = 0;
//      for(let char of str){
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//             count++;
//         }     

//     }
//     return count;
// }


// const countVow = (str) => {
//     let count = 0;
//     for(let char of str){
//        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//            count++;
//        }     

//    }
//    return count;
// }
// //  for each function

// function abc() {
//     console.log("Hello");
// }
// abc();

// let arr = ["Delhi","pune","kolkata","lucknow","mumbai"];

// arr.forEach(function printVal(val) {
//     console.log(val);

// });

// arr.forEach((val , i, arr) => { //value + index + array
//     console.log(val.toUpperCase(), i,arr)
// });

// // practise qsn 
// let num = [21,22,23,24,25,26,27,28,29,30];

// // num.forEach(function printresult(result) {
// //     console.log(result*result);

// // });

// num.forEach((val) =>{
//     console.log(val**2)
// });

// // map funtion
// let newArr = num.map((val) =>{
//     return val*2;
// });
// console.log(newArr); // map function tabhi use hota hai jab value kisi new array create krna ho
// console.log(num);

// filter array method

// let newValue = num.filter((val) =>{
//     return val % 3 === 0;
// });
// console.log(newValue);


// let i = 0;
// num.forEach((val) =>{
//     i = val + i;
//     result = i/num.length;
// });
// console.log(result);

// reduce method || it returns the single val

// let array = [100,200,400];

// const output = array.reduce((prev ,curr) => {
//     return prev < curr? prev : curr;

// })
// console.log(output);

// let marks = [97,93,64,99,86];

// let newMarks = marks.filter((val) =>{
//     return val > 90;
// });

// console.log(newMarks);



let n = prompt("Enter any number:");

console.log("your answer = ",n);


let arr = [];

for(let i=1; i<=n;i++){
    arr[i-1] = i;
};
console.log(arr);

let sum = arr.reduce((prev,curr) =>{
    return prev + curr;
});

console.log("sum = ",sum);

let prod = arr.reduce((prev,curr) =>{
    return prev * curr;
});

console.log("factorial = ",prod);



