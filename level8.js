/* EVENTS  --> The change in the state of an object is known as an event.
           --> Events are fired to notify code of  "intresting changes" that may affect code execution
           e.g : ~ Mouse event(click,double click) 
                 ~Keyboard events,form events,print event and many more
*/

/* node.event = () =>{ //handle here } */
// event handling methods --> i)inline [bulky code coz written in html] ii)JS node.event[but we can write only one func within it]
// let btn1 = document.querySelector("#btn1"); //to access that div/btn

// // btn1.onclick = (evt) => {
// //       console.log(evt);
// //       console.log(evt.type);
// //       console.log(evt.target);
// //       console.log(evt.clientX, evt.clientY);
  
//       // let a = 25;
//       // a--;
//       // console.log(a); //24

// };

let box = document.querySelector("#box");

box.onmouseover = (evt) =>{        //  EVENT OBJECT -->(special object that has details about the event)
      console.log("you are inside the div");
      console.log(evt);
      console.log(evt.type);
      console.log(evt.target);
      console.log(evt.clientX, evt.clientY);
  
};

//  EVENT Listeners --> node.addEventListener(event,callback) and node.removeEventListener(event,callback)

let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click",(event) =>{
      console.log("btn1 was clicked -handler1");
      console.log(event);
      console.log(event.target);
      console.log(event.type);

      

});

btn1.addEventListener("click",() =>{
      console.log("btn1 was clicked - handler2");

});

let handler3 = () =>{
      console.log("btn1 was clicked - handler3");

};

btn1.addEventListener("click",handler3);

btn1.addEventListener("click",() =>{
      console.log("btn1 was clicked - handler4");

});


btn1.removeEventListener("click",handler3);

/* Practise qsn */