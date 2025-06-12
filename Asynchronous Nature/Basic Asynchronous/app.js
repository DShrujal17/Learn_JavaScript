// ---------------------------------------------------------------------------------------
// ******************************** Asynchronous Nature  *********************************
// ---------------------------------------------------------------------------------------


// ---------------------------------------------------------------------------------------

// Example 1 : Call Stack with Breakpoint 

// function one() {
//     return 1;
// }

// function two()  {
//     return one() + one();
// }

// function three() {
//     let ans = two() + one();
//     console.log(ans);
// }

// three();

// ---------------------------------------------------------------------------------------

// Example 2 : CallBack Hell

// let h1 = document.querySelector("h1");

// function changeColor(color,delay,nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = color
//         if(nextColorChange) nextColorChange();
//     },delay);
// }

// changeColor("red",1000,() => {
//     changeColor("blue",1000,() => {
//         changeColor("green",1000,() => {
//             changeColor("Grey",1000);
//         });
//     });
// });

// ---------------------------------------------------------------------------------------

// Example 2 : Setting up Promises

// callBack Hell

// function savetoDb(Data,success,failuer) 
// {
//     let internetSpeed = Math.floor(Math.random() * 10) +1;
//     if(internetSpeed > 4)
//     {
//         success();
        
//     }
//     else {
//         failuer();
        
//     }
// }

// savetoDb("Shrujal Doshi",
//     () => {
//         console.log("success1 : Your data1 was saved:");

//         savetoDb("Hello World",
//             () => {
//                 console.log("success2 : Your data2 was saved:");

//                 savetoDb("Hii",
//                 () => {
//                     console.log("success3 : Your data3 was saved:");
//                 },
//                 () => {
//                     console.log("faliuer3 : Weak connection. data3 not saved");
//                 }
//         );
//             },
//             () => {
//                 console.log("faliuer2 : Weak connection. data2 not saved");
//             }
//         );
//     },
//     () =>{
//         console.log("faliuer1 : Weak connection. data not saved");
//     }
// );

// With Promises 

// Main Function for Ex3 and Ex4 :

// function savetoDb(Data,success,failuer) 
// {
//     return new Promise((resolve,reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) +1;
//         if(internetSpeed > 4)
//         {
//             resolve("Success: Data was saved");
//         }
//         else 
//         {
//             reject("Faliuer: Data wasn't save");
//         }
//     });
// }

// ---------------------------------------------------------------------------------------

// Example 3 : then and catch keyword

// savetoDb("Diya Patel")
//     .then( () => {
//         console.log("Promise was resolved");
//     })
//     .catch(() => {
//         console.log("Promise was rejected");
//     });

// ---------------------------------------------------------------------------------------

// Example 4 : Promise Chaining & Result and Error 

// savetoDb("Diya Patel")
//     .then( (result) => {
//         console.log("Data1 was resolved");
//         console.log(result);
//         return savetoDb("Shrujal Doshi");
//     })
//     .then((result) => {
//         console.log("Data2 was resolved");
//         console.log(result);
//         return savetoDb("Vrund Patel");
//     })
//     .then((result) => {
//         console.log("Data3 was resolved");
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log("Data was rejected");
//         console.log(error);
//     });

// ---------------------------------------------------------------------------------------

// Example 5 : Refactoring color changing code with then and catch

// let h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//     return new Promise((resolve, reject) => { 
//         setTimeout(() => {
//             h1.style.color = color;
//             resolve("color changed!");
//         }, delay);
//     });
// }

// changeColor("red", 1000)
//     .then(() => {
//         console.log("red color was completed");
//         return changeColor("orange", 1000);
//     })
//     .then(() => {
//         console.log("orange color was completed");
//         return changeColor("blue", 1000);
//     })
//     .then(() => {
//         console.log("blue color was completed");
//         return changeColor("grey", 1000);
//     })
//     .then(() => {
//         console.log("grey color was completed");
//     });

// ---------------------------------------------------------------------------------------

// Example 6 : Asynchronous Function(async & await function)

//-------------------------------- async -------------------------------------------------

// async function greet() {
//     return "Hello";
// }

// greet()
// .then((result) => {
//     console.log("Promise was resolved");
//     console.log("Result is: ",result);
// })
// .catch((err)=> {
//     console.log("Promise was reject");
//     console.log("Error is: ",err);
// })

// let demo = async () => {
//     return 13;
// };

// demo()
// .then((result) => {
//     console.log("Promise was resolved");
//     console.log("Result is: ",result);
// })
// .catch((err)=> {
//     console.log("Promise was reject");
//     console.log("Error is: ",err);
// })

//-------------------------------- await  -------------------------------------------------

// function getNum() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log(num);
//             resolve();
//         },1000);
//     });
// }

// async function demo() {
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     getNum();
// }

// ---------------------------------------------------------------------------------------

// Example 7 : Refactoring color changing code with async and await

// let h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//     return new Promise((resolve, reject) => { 
//         setTimeout(() => {
//             h1.style.color = color;
//             console.log(`color changed to ${color}!`);
//             resolve("color changed!");
//         }, delay);
//     });
// }

// async function demo() {
//     await changeColor("red",1000);
//     await changeColor("blue",1000);
//     await changeColor("purple",1000);
//     await changeColor("orange",1000);
//     changeColor("grey",1000);
// }

// Example 7 : Handling Rejections wiith await

// let h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//     return new Promise((resolve, reject) => { 
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) + 1;
//             if(num > 3)
//             {
//                 reject("Promise rejected");
//             }

//             h1.style.color = color;
//             console.log(`color changed to ${color}!`);
//             resolve("color changed!");
//         }, delay);
//     });
// }

// async function demo() {
//     try {
//         await changeColor("red",1000);
//         await changeColor("blue",1000);
//         await changeColor("purple",1000);
//         await changeColor("orange",1000);
//         await changeColor("grey",1000);
//     }
//     catch(err) {
//         console.log("error caught: ",err);
//     }

//     let a =  5;
//     console.log(a);
//     console.log("num is: ",a+3);
// }