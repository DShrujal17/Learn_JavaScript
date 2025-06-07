// ---------------------------------------------------------------------------------------
// ******************************* Other Function ****************************************
// ---------------------------------------------------------------------------------------

// Exmaple 1 : This keyword

// let student = {
//     name : "Shrujal",
//     Age : 18,
//     Phy : 81,
//     Chem : 76,
//     Maths : 98,

//     getAvg(){
//         avg = (this.Phy + this.Chem + this.Maths)/3;
//         console.log(`${this.name}'s avg mark is ${avg}`);
//     }
// };

// ---------------------------------------------------------------------------------------

// Exmaple 2 : Try and catch keyword 

// console.log("Hello");
// console.log("Hello");
// console.log("Hello");

// try{
//     console.log(a);
// } catch {
//     console.log("Error is caught ... a is not define");
// }

// console.log("Hello");
// console.log("Hello");
// console.log("Hello");

// ---------------------------------------------------------------------------------------

// Exmaple 3 : Arrow Function

// let cube = (num) => {
//     return Math.pow(num,3);
// };

// cube(4);

// ---------------------------------------------------------------------------------------

// Exmaple 4 : setTimeout Function

// console.log("Hi i am Shrujal Doshi");

// setTimeout( () => {
//     console.log("Hii !");
// },5000);

// console.log("I am using setTimeout function");

// ---------------------------------------------------------------------------------------

// Exmaple 5 : setinterval Function

// console.log("Hi i am Shrujal Doshi");

// let id = setInterval( () => {
//     console.log("Hii !");
// },5000);
// console.log(id);
// console.log("I am using setInterval function");

// to stop the interval
// clearInterval(id); 

// ---------------------------------------------------------------------------------------

// Exmaple 6 : This with Arrow Function

// let student = {
//     name : "Shrujal",
//     marks :  95,
//     prop : this,

//     getName: function()
//     {
//         console.log(this);
//         console.log(this.name);
//     },

//     getMarks: () => {
//         console.log(this);
//         console.log(this.marks);
//     }
// };



// ---------------------------------------------------------------------------------------
// ******************************* Array Methods *****************************************
// ---------------------------------------------------------------------------------------



// ---------------------------------------------------------------------------------------

// Exmaple 1 : ForEach Method 

// let arr = [
//     {
//         name : "Shrujal",
//         age : 19,
//     },
//     {
//         name : "Diya",
//         age : 18,
//     },
//     {
//         name : "Jimit",
//         age : 23,
//     }
// ];

// console.log(arr);
// arr.forEach((el) => {
//     console.log(el.age);
// });


// ---------------------------------------------------------------------------------------

// Exmaple 2 : Map & filters

// let student = [
//     {
//         name : "Shrujal",
//         marks : 98,
//     },
//     {
//         name : "Diya",
//         marks : 87,
//     },
//     {
//         name : "Jimit",
//         marks : 89,
//     }
// ];
// let CGPA = student.map((el) => {
//     return el.marks/10;
// });


// let num = [1,2,3,4,5,6,7,8,9,10];

// let even = num.filter((el) => {
//     return el % 2 == 0;
// });

// ---------------------------------------------------------------------------------------

// Exmaple 3 : Reduce Method  

// let arr = [1,2,3,4,5,6,7,8,9,10];

// let result = arr.reduce((acc,el) => {
//     return acc + el;
// });

// ---------------------------------------------------------------------------------------

// Practice Que 1 : Find the min number in array

// let arr = [9,4,5,2,6,8,1,0];

// let min = arr.reduce((min,el) => {
//     if(min>el)
//         return el;
//     else 
//         return min;
// });

// console.log(min);

// ---------------------------------------------------------------------------------------

// Exmaple 4 : Spread Method 

// let str = "iamshrujaldoshi";

// let char = [...str];
// console.log(char);


// let student = {
//     name : "shrujal",
//     age : 19,
//     marks : 97,
// };

// let studentCopy = {...student, RollNo : "CE078"};

// console.log(studentCopy);

// ---------------------------------------------------------------------------------------

// Exmaple 5 : Rest Method 

// function min(...args){
//     let ans = args.reduce((min,el) => {
//         if(min > el)
//             return el;
//         else
//             return min;
//     });
//     console.log(ans);
// }
// min(3,4,5,2,8,9,4,5,1);

