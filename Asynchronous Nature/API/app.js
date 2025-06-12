// ---------------------------------------------------------------------------------------
// ***************************************** API  ****************************************
// ---------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------

// Example 1 : JSON parse & stringify

// let jsonObj = 
//     '{"Name" : "Shrujal Doshi", "Age" : "18" }';
// let jsObj = JSON.parse(jsonObj);
// console.log(jsObj);


// let jsObj1 = {
//     Name : "Diya",
//     Age : 18
// };
// let jsonObj1 = JSON.stringify(jsObj);
// console.log(jsonObj1);

// ---------------------------------------------------------------------------------------

// Example 2 : First API Request

// let url = "https://v2.jokeapi.dev/joke/Any?safe-mode";

// fetch(url)
// .then((res) => {
//     return res.json();
// })
// .then((Data) => {
//     console.log("Data1:",Data.delivery);
//     return fetch(url);
// })
// .then((res) => {
//     return res.json();
// })
// .then((Data) => {
//     console.log("Data2:",Data.delivery);
// })
// .catch((err) => {
//     console.log(err);
// })

// ---------------------------------------------------------------------------------------

// Example 3 : API Request with async and await

// let url = "https://v2.jokeapi.dev/joke/Any?safe-mode";

// async function getFacts() {
//     try {
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.delivery);

//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log(data2.delivery);
//     } 
//     catch (err) {
//         console.log("error caught:",err);
//     }  
// }

// ---------------------------------------------------------------------------------------

// Example 4 : Using Axios

// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//     try {
//         let res = await axios.get(url);
//         console.log(res.data);
//     } 
//     catch (err) {
//         console.log("error caught:",err);
//     }  
// }

// ---------------------------------------------------------------------------------------

// Example 5 : Using Axios with html

// let btn = document.querySelector("button");

// btn.addEventListener("click",async () => {
//     console.log("Button was pressed");
//     let Fact = await getFacts();
//     console.log(Fact);
//     let p = document.querySelector("p");
//     p.innerText = Fact;
// });

// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//     try {
//         let res = await axios.get(url);
//         return res.data.fact;
//     } 
//     catch (err) {
//         console.log("error caught:",err);
//         return "No fact found";
//     }  
// }

// ---------------------------------------------------------------------------------------

// Example 6 : Sending Headers with API Request

// const url = "https://icanhazdadjoke.com/";

// async function getJokes() {
//     try {
//         const config = {headers: {Accept: "application/json"}};
//         let res = await axios.get(url,config);
//         console.log(res.data);
//     } 
//     catch (error) {
//         console.log(error);
//     }
// }

// ---------------------------------------------------------------------------------------

// Example 7 : Activity using query string

// let btn = document.querySelector("button");

//     btn.addEventListener("click", async () => {
//         let country = document.querySelector("input").value.trim();
//         let universities = await getClg(country);
        
//         let ul = document.querySelector("#result");
//         ul.innerHTML = ""; 

//         if (universities.length > 0) {
//             universities.forEach(uni => {
//                 let li = document.createElement("li");
//                 li.innerText = uni.name;
//                 ul.appendChild(li);
//             });
//         } else {
//             let li = document.createElement("li");
//             li.innerText = "No universities found.";
//             ul.appendChild(li);
//         }
//     });

//     let url = "http://universities.hipolabs.com/search?country=";

//     async function getClg(country) {
//         try {
//             let res = await axios.get(url + country);
//             return res.data;
//         } catch (error) {
//             console.log(error);
//             return [];
//         }
//     }