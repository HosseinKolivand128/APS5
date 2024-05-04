const input = document.querySelector("#input-task")
const addTaskBtn = document.querySelector("#add-task-btn")
const takeList = document.querySelector("#task-list")

const names = [];
let counter = 0;
// addTaskBtn.addEventListener("click", () => {
//     //check if the name is exists or not
//     if (input.value !== "" && input.value !== " ") {
//         if (!names.includes(input.value)) {
//             const task = document.createElement("li");//create element

//             //double click event
//             task.addEventListener("dblclick", () => {
//                 task.style.color = "red";
//                 task.style.textDecoration = "line-through"
//             })


//             task.textContent = input.value//assign value 
//             task.setAttribute("id", `item${counter++}`)
//             takeList.append(task);//add to parent
//             names.push(input.value)
//             input.value = ""
//         } else {
//             alert("name is duplicated")
//         }
//     }
// });

//***************************************** */

const plane = document.querySelector("#plane");
// plane.addEventListener("mouseover", () => {
//     const square = document.createElement("div")
//     // square.setAttribute("class", "square")
//     square.classList.add("square")

//     plane.append(square)
// })
// plane.addEventListener("mouseleave", () => {
//     plane.style.backgroundColor = "red"
// })
plane.addEventListener("mousemove", () => {
    const square = document.createElement("div")
    // square.setAttribute("class", "square")
    square.classList.add("square")

    setInterval(() => {
        square.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
        plane.append(square)
    }, 2000)
})


// plane.addEventListener("mouseenter", () => {
//     plane.style.backgroundColor = "purple"
// })
// plane.addEventListener("mouseout", () => {
//     plane.style.backgroundColor = "brown"
// })

const h2 = document.createElement("h2");
h2.textContent = "Beshin Reyhane"
// plane.insertAdjacentElement("beforeend", h2)
// plane.insertAdjacentElement("afterbegin", h2)
// plane.insertAdjacentElement("afterend", h2)
plane.insertAdjacentElement("beforebegin", h2);

//!Remove
// h2.remove()
h2.parentElement.removeChild(h2)//safe


//!Printing
// const printBtn = document.querySelector("#print-btn");

// window.addEventListener("beforeprint", () => {
//     alert("printing");
//     window.addEventListener("afterprint", () => {
//         document.body.style.backgroundColor = "yellow"
//     })
// })

const printBtn = document.querySelector("#print-btn");

// printBtn.addEventListener("click", (e) => {
//     console.log(e);
// })

const partyList = document.querySelector("#task-manager");

// partyList.addEventListener("click", (e) => {
//     console.log(this);//point to window ,not target
//     console.log(e.target);

// })

// partyList.addEventListener("click", function (e) {
//     console.log(this);//point to target
//     console.log(e.target);

// })


//******************************************** */

// document.querySelector("#bubble-btn").addEventListener("click", (e) => {
//     alert("btn")
//     // e.stopImmediatePropagation();
// })
// document.querySelector("html").addEventListener("click", (e) => {
//     alert("html")
//     // e.stopPropagation();
// })

// document.querySelector("html").addEventListener("click", (e) => {
//     alert("html1")
//     // e.stopPropagation();//? it won't stop immediate and continue the chain( so we use this in bubbling)

//     e.stopImmediatePropagation();//?when you have some same event listeners on an html tag, we use this to stop chain immediate 
// })
// document.querySelector("html").addEventListener("click", (e) => {
//     alert("html2")
//     // e.stopPropagation();
// })
// document.querySelector("#container").addEventListener("click", (e) => {
//     alert("container")
//     // e.stopPropagation();
// })
// document.body.addEventListener("click", (e) => {
//     alert("body");
//     // e.stopPropagation();
// })

//********************************* */
let topOne = 250;
let rightOne = 250;
const circle = document.querySelector("#circle")
circle.addEventListener("keydown", (e) => {
    console.dir(e);
    switch (e.key) {
        case "w":
            console.log(e);
            e.target.style.top = `${topOne += 25}px`
            break;
        case "s":
            e.target.style.top = `${topOne -= 25}px`
            break;
        case "d":
            e.target.style.left = `${rightOne += 25}px`
            break;
        case "a":
            e.target.style.left = `${rightOne -= 25}px`;
            break;
        default:
            break;
    }
})
// input.addEventListener("keydown", (e) => {
//     console.log(e);
// })
// input.addEventListener("keydown", (e) => {
//     console.log(e);
// })
// input.addEventListener("keydown", (e) => {
//     console.log(e);
// })