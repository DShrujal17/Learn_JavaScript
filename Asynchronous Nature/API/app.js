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