// /*********** ATTRIBUTES  **********/
// // getAttribute(attr)

// let div = document.querySelector("div")

// console.log(div);

// let id = div.getAttribute("id");

// console.log(id);

// let name = div.getAttribute("name");

// console.log(name);

// let para = document.querySelector("p");

// // console.log( para.gettAttribute("class"));

// // .setAttribute(attr , value)

// console.log( para.setAttribute("class" , "newClass")); // class="newClass"

// // /** style */  Node.style

// let divs = document.querySelector("div");

// console.log(divs.style); // 
                        // -->// backgroundColor
// : 
// "pink"

//or
// divs.style.backgroundColor = "green";
// divs.style.backgroundColor = "purple";

// divs.style.fontSize = "25px";

// divs.innerText = "~Hello~";

// divs.style.visibility = "hidden";


// INSERT ELEMENT
/* 1) create --> let el = document.createElement("div") 
   2) add --> 4 methods --> i) node.append(el) <-->  end-(INSIDE) 
   ii) node.prepend(el) <--> start--(INSIDE) 
   iii) node.before(el)  <--> before--(OUTSIDE) 
   iv) node.after(el  <--> ) after-->(OUTSIDE) 
*/


let btn = document.createElement("button");
btn.innerText = "Click me!";
console.log(btn);

let p = document.querySelector("p");
// p.append(btn);
// p.prepend(btn);
p.before(btn);
// p.after(btn);


let newHeading = document.createElement("h1");

newHeading.innerText = "Hi I'M  Learning JS";


document.querySelector("body").prepend(newHeading);

// DELETE Element --> node.remove()
 
let para = document.querySelector("p");

para.remove();

newHeading.remove();

/* h/w  --> append.child & remove.child */