// // let button = document.createElement("button");

// // button.style.color = "white";
// // button.style.backgroundColor = "red";

// // button.innerText = "click me";

// // let body = document.querySelector("body");

// // body.prepend(button);

// let paragraph = document.querySelector("p");

// // let p = para.getAttribute("class");

// // paragraph.setAttribute("class", "newclass");

// /* using setattribute we overwrite the class, i want both the classes for that i use class list*/

// // classList --> div.classList.remove()
// // classList --> div.classList.add() 

// // p.classList.add("newclass");
// console.log(paragraph.classList);

// paragraph.classList.add("newclass");

// paragraph.classList.remove("newclass");


/****** level 8 qsn ******/
// toggle button

// let modebtn = document.querySelector("#mode");

// let currMode = "light";

// let body = document.querySelector("body");

// modebtn.addEventListener("click",() =>{
//     if(currMode === "light"){
//         currMode = "dark";
//         body.classList.add("dark");
//         body.classList.remove("light");
//     }else {
//         currMode = "light";
//         body.classList.add("light");
//         body.classList.remove("dark");
        
//     }

//     console.log(currMode);
// });

/***** mine code via userInput */

let currMode = "light";

let body = document.querySelector("body");

let userInput = prompt("choose mode(dark/light):");

if(userInput === "dark"){
    currMode = "dark";
    body.classList.add("dark");
    }else {
    currMode = "light";
    body.classList.add("light");
    }
        
console.log(`You choosed: ${currMode}`);

// practise qsn 2]

// let div = document.querySelector("#box");

// div.addEventListener("mouseover", (evt) =>{
//     div.classList.add("love");
//     console.log("I Love You 2");
//     console.log(evt);

// });

