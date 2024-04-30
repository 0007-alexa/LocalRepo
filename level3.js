// loops
// for(let i=1;i<=5;i++){ //initialize -> stoping condition-> updation
//     console.log("hello world!");
// }

// sum of 1 to 5
// let sum = 0;
// let n = prompt("enter any number:");
// for(let i=1;i<=n;i++){
//     sum = sum + i;
// }
// console.log("sum of", n , "= ", sum);

// while

// // let i = 1; //initialization
// // while (i<=5){ //stoping condition
// //     console.log("i=", i);
// //     i++; //updation
// }
// let i = 0;
// do{
//     console.log("i = ", i);
//     i++;
// } while(i<=5);

// practise qsn 
// for(let i=0;i<=100;i++){
//   if(i % 2 !== 0){
//     console.log("i = ",i);
// }
// }
// let i = 0;
// do{
//     console.log("i = ",i)
//     i = i+2;
// }while(i<=100);


// game
// let gameNum = 75;
// let userNum = prompt("Guess the number(0-100):");

// while(userNum != gameNum){
//    userNum = prompt("You entered wrong number, Guess again:");
// }

// console.log("well done, you guess the number correct!");

/* strings */

// let str = "Hello duniya";
// let str2 = "hello duniya";
// console.log(str[0]);

// // template Literals
// let specialString = `This is a template literal`;
// console.log(typeof specialString);
// // example
// let object = {
//     item: "pen",
//     price: 10,
// };
// let output = `the cost of ${object.item} is ${object.price} rupees`;
// console.log(output);

// console.log("the cost of", object.item ,"is", object.price,"rupees");

// // strings are immutatable in JS

// let baby = "Baby\nShark"; //   len:10 \n --> single count 
// console.log(baby.length);

// console.log(baby.toUpperCase());

// console.log(baby.toLowerCase());

// let str3 = " HELLO ";

// console.log(str3.trim()); //remove whitespace

// let str4 = "abcdefghiabcj";

// console.log(str4.slice(0,1));

// let str5 = "world";

// let result = str3.concat(str5); // str1 + str2

// console.log(result);

// console.log(str4.replaceAll("abc","xyz"));

// let str10 = "IloveJS";
// let str100 = str10.replace("I","A");

// console.log(str100);

// // practise qsn
let Output = prompt("Enter Your Name:");
let Result = "@" + Output + Output.length;
console.log(Result);