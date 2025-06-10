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

// ---------------------------------------------------------------------------------------

// Example 3 : This in Event Listener

// let btn = document.querySelector("#btn");

// btn.addEventListener("click", function () {
//     console.dir(this);           
//     this.style.color = "red";    
// });

// ---------------------------------------------------------------------------------------

// Example 4 : Keyboard Event 

// let inp = document.querySelector("input");

// inp.addEventListener("keypress",(event) => {
//     console.log("key = ",event.key);
//     console.log("code = ",event.code);
//     console.log("Key was pressed");
// });

// ---------------------------------------------------------------------------------------

// Example 5 : Forms Event 

// let form = document.querySelector("form");

// form.addEventListener("submit",(event) => {
//     event.preventDefault();
//     alert("Form submitted");
// });

// ---------------------------------------------------------------------------------------

// Example 6 : Extracting data from Forms 

// let form = document.querySelector("form");

// form.addEventListener("submit",(event) => {
//     event.preventDefault();
    
//     console.dir(form);
//     let user = form.elements[0];
//     console.log("User is",user.value);

//     let pass = form.elements[1];
//     console.log("User's password is",pass.value);

//     alert(`Hi ${user.value} Your password is ${pass.value}`);
// });

// ---------------------------------------------------------------------------------------

// Example 7: More Forms Event 

// let form = document.querySelector("form");

// form.addEventListener("submit",(event) => {
//     event.preventDefault();
// });

// let inp = document.querySelector("input");

// inp.addEventListener("change",(event) => {
//     console.log("Change event");
//     console.log("Input is",inp.value);
// });

// inp.addEventListener("input",(event) => {
//     console.log("Change event");
//     console.log("Input is",inp.value);
// });