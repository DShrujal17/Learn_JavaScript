// Exmple 1 : Creating Object

// const post = {
//     username : "@shrualDoshi",
//     content : "This is my first post",
//     likes : 150,
//     reposts : 5,
//     tags: ["@DiyaPatel","@Jimitdoshi"]
// };

// -----------------------------------------------------------

// Exmple 2 : Get and Post Value 

// student = {
//     name : "Shrujal",
//     age : 18,
//     marks : 97,
//     city : "Lunawada",
// };

// student.city = "Nadiad";
// console.log(student.city);
// student.gender = "Male";
// student.marks = "A";
// console.log(student);
// delete student.marks;
// console.log(student);

// -----------------------------------------------------------

// Exmple 3 : Nested Objects

// const classInfo = {
//     shrujal : {
//         grade : "A",
//         Rollno : 78,
//     },
//     Diya : {
//         grade : "A+",
//         Rollno : 90,
//     },
//     Vrund : {
//         grade : "B+",
//         Rollno : 135, 
//     }
// };

// -----------------------------------------------------------

// Exmple 4 : Arrays Of Objects

// const classInfo =[
//     {
//         name : "Shrujal",
//         grade : "A+",
//         city : "Lunawada"
//     },
//     {
//         name : "Diya",
//         grade : "A+",
//         city : "Nadiad"
//     },
//     {
//         name : "Vrund",
//         grade : "A+",
//         city : "Lunawada"
//     }
// ]

// -----------------------------------------------------------

// Exmple 5 : Genrate a random no. between 1 and 100

// let num = Math.floor(Math.random() *100) + 1;
// console.log(num);

// -----------------------------------------------------------

// Exmple 6 : Gusseing Game 

// const max = prompt("Enter a Maximum number : ");
// const num = Math.floor(Math.random() *max) + 1;

// let guess = prompt("Guess the numbr : ")

// while(true)
// {
//     if(guess == "quit")
//     {
//         console.log("User quit");
//         break;
//     }
//     if(guess == num)
//     {
//         console.log("You are right! congrats!! random number was", num);
//         break;
//     }
//     else if(guess < num)
//     {
//         guess = prompt("Hint : Your guess was too small. plese try again")
//     }
//     else
//     {
//         guess = prompt("Hint : Your guess was too large. plese try again")
//     }
// }

