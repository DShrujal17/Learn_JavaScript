// ---------------------------------------------------------------------------------------
// ***********************************  DOM **********************************************
// ---------------------------------------------------------------------------------------


// ---------------------------------------------------------------------------------------

// Example 1 : Selecting Element by Id 

// It returns javascript object 

// let imgObj = document.getElementById("mainImg");
// console.dir(imgObj);

// ---------------------------------------------------------------------------------------

// Example 2 : Selecting Element by ClassName 

// It returns html collection

// let imgObj = document.getElementsByClassName("oldImg");
// for(let i=0;i<imgObj.length;i++)
// {
//     console.dir(imgObj[i]);
// }

// ---------------------------------------------------------------------------------------

// Example 3 : Selecting Element by TagName

// It returns html collection

// let tag = document.getElementsByTagName("div");
// console.dir(tag);

// ---------------------------------------------------------------------------------------

// Example 4 : QuerySelectors & QuerySelectorsAll

// It returns single object that match the argument of QuerySelector & QuerySelectorsAll returns nodelist

// let Ex = document.querySelector("div a");
// console.dir(Ex);

// let Ex1 = document.querySelectorAll("div a");
// console.dir(Ex1);

// ---------------------------------------------------------------------------------------

// Example 5 : Setting content in Object 

// let par = document.querySelector("h1");
// console.log(par.innerText);
// console.log(par.innerHTML);
// console.log(par.textContent);

// par.innerText = "I am shrujal doshi !";
// par.innerText  = `<u> ${par.innerText} </u>`;

// ---------------------------------------------------------------------------------------

// Example 6 : Manupilating Attribute 

// let img = document.querySelector("img");

// console.log(img.getAttribute('id'));
// console.log(img.setAttribute('id','spidermenImg'));  

// ---------------------------------------------------------------------------------------

// Example 7 : Manupilating Style 

// let h = document.querySelector("h1");
// h.style.color = 'white';
// h.style.backgroundColor = 'black';

// ---------------------------------------------------------------------------------------

// Example 7 :  Classlist Property 

// let h = document.querySelector("h1");

// h.classList.add('abc');
// h.classList.add('xyz');
// h.classList.remove('abc');
// console.log(h.classList);

// ---------------------------------------------------------------------------------------

// Example 8 : Navigation On Page 

// let div = document.querySelector('.box');
// console.log(div.children);
// console.log(div.parentElement);
// console.log(div.nextElementSibling);
// console.log(div.previousElementSibling);

// let img = document.querySelector('img');
// img.previousElementSibling.style.color = 'green';

// ---------------------------------------------------------------------------------------

// Example 9 : Adding Elements 

// let newp = document.createElement('h6');
// let h = document.querySelector("h1");

// newp.innerText = "Me hu makdimen !";

// h.appendChild(newp);
// newp.append('hii !');
// newp.prepend('hii !');

// ---------------------------------------------------------------------------------------

// Example 10 : Removing Elements

// let newp = document.createElement('h6');
// let h = document.querySelector("h1");

// newp.innerText = "Me hu makdimen !";

// h.removeChild(newp);
// newp.remove();
























  




