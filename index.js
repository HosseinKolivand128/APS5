//!Selecting:
//*1) get element by(id,className,TagName):
// const title = document.getElementById("name");
// console.dir(title);


// const list = document.getElementById("teamA")
// console.dir(list)

// console.log(document.body);
// console.log(document);
// console.log(window);


//*2) query selector:
// const h1 = document.querySelector("#name")//id
// const h2 = document.querySelector("h2")//tagname
// const ul = document.querySelector(".teamA")//class
// const title = document.querySelectorAll("h1")
// console.log(title);


// const nameList = document.querySelectorAll("#teamA li");
// console.log(nameList);

//!Manupulate DOM

// const fatemeh = document.querySelector("#name");
// console.dir(fatemeh);
// fatemeh.innerHTML = "<script> Fatemeh is so genius! <script/>";
// fatemeh.textContent = "Fatemeh is so silent!";

//!PROJECT
const title = document.querySelector("h1");
console.dir(title);
title.classList.add("color")
if (title.classList.contains("green") === true) {
    title.classList.remove("color")
}


const username = document.querySelectorAll("input");
username.forEach(element => {
    element.style.border = "none";
    element.style.borderBottom = "1px solid black";
    element.style.backgroundColor = "yellow";
    element.style.borderRadius = '5px'
});

const image = document.querySelector(".cat");
image.setAttribute("src", "./cat.jpg")
image.setAttribute("alt", "this is a cat")
console.log(image.getAttribute("src"));

//they are the same
image.id = "image";
image.setAttribute("id", "image")


image.setAttribute("class", "image")
image.classList.add("image")

console.dir(image);