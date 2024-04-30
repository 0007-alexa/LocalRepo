// // alert("Welcome Coder!");

// ////////////////* DOM --> document object model *///////////////////


// // dom manipulation
// let heading = document.getElementById("heading");
// console.dir(heading);

// let value = document.getElementsByClassName("headings");
// console.dir(value);

// // let para = document.getElementsByTagName("p");
// // console.dir(para);

// // queryselector

// let firstEl = document.querySelectorAll(".headings");
// console.dir(firstEl);

// let secEl = document.querySelector("#myid");
// console.dir(secEl);

// /*  properties --> get , set, change , update */

// // tagName --> return tags for element nodes

// console.dir(secEl.tagName);
// console.dir(ruby.tagName);

// //  innerText --> returns the text content of the element and all it's children

// let div = document.querySelector("div");

// console.dir(div);  /* div.innerText  --> pure text content */ 

// console.dir(div.innerText);

// //  innerHTML --> returns the plain text or HTML contents in the el

// console.dir(div.innerHTML);

// /* div.innerHTML  --> contains html tag also */

// // console.log(div.innerText = "Hello!")
// // console.log(div.innerHTML = "<div>Mello!</div>")
// let heading2 = document.querySelector("h3");

// console.dir(heading2);

// console.dir(heading2.innerText = "NewHeading");

// console.dir(heading2.innerHTML = "<i>NewHeading</i>");

// console.log(heading2);

// //  innerContent --> returns the textual content even for hidden el

// console.log(heading2.innerText);

// console.dir(heading2.textContent);




// H/w -- > MDN first child, last child and nodes


// practise set - 1

let output = document.querySelector("h2");

console.dir(output.innerText);

output.innerText = output.innerText + "from Apna college Students";

 // practise set - 2

let divs = document.querySelectorAll(".box");

// console.log(divs[0]);

// console.log(divs[1]);

// console.log(divs[2]);
// divs[0].innerText = "New Unique Value 1";

// divs[1].innerText = "New Unique Value 2";

// divs[2].innerText = "New Unique Value 3";

// using loop
 

let idx = 1;
for(div of divs){
   div.innerText = `New unique value ${idx}`;
   idx++;
}
 