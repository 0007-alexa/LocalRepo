// // Array --> collection of related items
// // let marks = [98, 45, 56, 89];
// // console.log(marks);
// // console.log(marks.length);

// // marks[3] = 99;
// // console.log(marks); // arrays are mutable


// let heroes = ["ironman", "thor", "Hulk", "spiderman", "Dr.strange", "Captain america", "antman", "blackpanther"];
// console.log(heroes);
// console.log(heroes[5]);
// console.log(heroes.length);

// // to print all the items --> using loops

// // for (let i=0; i< heroes.length; i++){
// //     console.log(heroes[i]);
// // }

// // **************** FOR OF LOOP ***********
// for(let hero of heroes){
//     console.log(hero);
// }

// let cities = ["kolkata", "hydrabad", "mumbai", "banglore", "pune", "delhi"];

// for(let city of cities) {
//     console.log(city.toUpperCase());
// }

// // practise qsn 
// let marks = [85, 97, 44, 37, 76, 60];

// let sum = 0;

// // for(let i=1; i<=marks ; i++){
// // //     sum = sum + i;
// // // } console.log("Average marks of std = ", sum);

// for (let mark of marks){
//    sum = sum + mark;
// }
// avg = sum/marks.length;
// console.log(`avg marks of stud  = ${avg}`);

// // practise qsn 2
// let items = [250, 645, 300, 900, 50];

// for (let item of items){
//    offer = item/10;
//    item = item - offer;
//    console.log(item);
// }
// // array methods
// // push() --> add to end , pop() --> dlt from end & return , toStrings() --> converts array to string

// let vegies = ["potato", "brinjal", "cabbage", "onion", "bitter gaurd"];

// // vegies.push("tomato");

// // console.log(vegies);

// // let deletedVege = vegies.pop("tomato");

// // console.log("deleted:",deletedVege);

// // console.log(vegies);

// // let deletedVegies = vegies.pop("bitter gaurd");

// // console.log("deleted:",deletedVegies);

// // console.log(vegies);

// // console.log(vegies.toString());

// // concat() --> joins multiple arrays & retuns result

// let fruit = ["Apple", "banana","litchi","jackfruit"];

// let fooditems = vegies.concat(fruit);

// console.log(fooditems);

// // unshift() --> add to start  (push)

// fruit.unshift("Avacado");

// console.log(fruit);

// let newVal = fruit.unshift("PineApple");

// console.log("added:",newVal);

// console.log(fruit.toString());
// // shift() --> dlt from start & return (pop)

// let value = fruit.shift("Pineapple");

// console.log("deleted:",value);

// console.log(fruit.toString());

// // slice() --> returns a piece of the array

// console.log(fruit.slice(2));

// console.log(fruit.slice(0,4));

// // splice() --> chnge O.A (add,remove,replace)

// let newValue = fruit.splice(2,0,"oranges","grapes");
// console.log(fruit.toString());

// let arr = [0, 1, 2, 33, 40];

// console.log(arr.splice(1,1,45)); //replace


// console.log(arr);


// console.log(arr.splice(2)); // all other items dlted

// console.log(arr);

// Practise Qsn
let array = ["Bloomberg", "Microsoft", "Uber","Google", "IBM", "Netflix"];

console.log(array.toString());

console.log("Deleted:",array.shift("Bloomberg"));

console.log(array.toString());

let newArray = array.splice(1,1,"Ola");

console.log("added:",newArray);

console.log(array.toString());

console.log("added:",array.push("Amazon"));

console.log(array.toString());