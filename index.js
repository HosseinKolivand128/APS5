// function One() {
//     console.log("One");
//     return 1
// }
// function Two() {
//     console.log("Two");
//     console.log(One());
//     return 2
// }
// function Three() {
//     console.log("Three");
//     console.log(Two());
//     return 3
// }
// console.log(Three());

// console.log("hhakjshdkja");

//!---------------*******---------------//
//!CALL BACK

// setTimeout(() => {
//     document.body.style.backgroundColor = "purple"
// }, 1000);

// setTimeout(() => {
//     document.body.style.backgroundColor = "blue"
// }, 1000);

// setTimeout(() => {
//     document.body.style.backgroundColor = "orange"
// }, 1000);


// setTimeout(() => {
//     document.body.style.backgroundColor = "purple";
//     setTimeout(() => {
//         document.body.style.backgroundColor = "blue";
//         setTimeout(() => {
//             document.body.style.backgroundColor = "orange";
//         },1000)
//     }, 1000);
// }, 1000)

function randomColor() {
    return `rgb(${Math.floor(Math.random() * 256)} ${Math.floor(Math.random() * 256)} ${Math.floor(Math.random() * 256)})`
}

function delayColor(color, delay, next) {
    setTimeout(() => {
        document.body.style.backgroundColor = color
        if (next) {
            next()
        }
    }, delay);
}

// delayColor("purple",5000,()=>{})

// delayColor("orange", 2000, () => {
//     delayColor(randomColor(), 2000, () => {
//         delayColor(randomColor(), 2000)
//     })
// })

//!---------------------******----//
//!Promise =Pending|FULLFIL|REJECTED



function changeBody() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                document.body.innerHTML = "<h1>ReviewClass B</h1>";
                document.body.style.backgroundColor = "yellow";
                resolve("Changing home screen was successful!")
            } catch (error) {
                console.log(error);
                reject("Data not found")
            }

        }, 2000)
    });

    return promise;
}



// function getData() {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             try {
//                 const data = fetch("www.google.com")
//                 resolve(data);
//             } catch (error) {
//                 console.log(error);
//                 reject("Data not found")
//             }

//         }, 2000)
//     });

//     return promise;
// }
console.log(changeBody());


//!--------*******---------------/

function getData() {
    return new Promise((resolve, reject) => {
        try {
            const data = fetch("https://fakestoreapi.com/products/1");
            resolve(data)
        } catch (error) {
            console.log(error);
            reject("data not found")
        }
    })
}
console.log(getData());

getData().then((data) => {
    console.log(data);
})

