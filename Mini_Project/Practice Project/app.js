let btn = document.querySelector("button");
let inp = document.querySelector("#todo");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = inp.value;

    let b = document.createElement("button");
    b.innerText = "Delete";
    b.classList.add("delete");

    item.appendChild(b);
    ul.appendChild(item);
    inp.value = "";
});

ul.addEventListener("click",function(event) {
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("Deleted");
    }
});