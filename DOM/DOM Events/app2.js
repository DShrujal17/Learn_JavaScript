// ---------------------------------------------------------------------------------------
// ***********************************  DOM Event ****************************************
// ---------------------------------------------------------------------------------------


// ---------------------------------------------------------------------------------------

// Example 1 : Mouse/Pointer Event

// let btns = document.querySelectorAll("button");

// for (let btn of btns) {
//     btn.onclick = sayHello;
//     btn.onmouseenter = (event) => {
//         event.target.style.color = 'red';
//     };
// }


// function sayHello(){
//     alert("Hello ! This is Shrujal Doshi");
// }

// ---------------------------------------------------------------------------------------

// Example 2 : Event Listener

// let btns = document.querySelectorAll("button");

// for (let btn of btns) {
//     btn.addEventListener("click",sayHello);
// }

// function sayHello(){
//     alert("Hello ! This is Shrujal Doshi");
// }

// ---------------------------------------------------------------------------------------

// Practice Que 1 : Activity Solution 

// let btn = document.querySelector("button"); 

// btn.addEventListener("click", () => {
//     let h2 = document.querySelector("h2"); 
//     let randomColor = getRandomColor();    

//     h2.innerText = randomColor;

//     let div = document.querySelector(".color-box");
//     div.style.backgroundColor = randomColor;

//     console.log("Color changed to:", randomColor);
// });

// function getRandomColor() {
//     let red = Math.floor(Math.random() * 256);   
//     let green = Math.floor(Math.random() * 256);
//     let blue = Math.floor(Math.random() * 256);

//     return `rgb(${red}, ${green}, ${blue})`;
// }


