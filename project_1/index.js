// console.log("mahsa");
// console.log("sama");

// async function showNumbers() {
//     let counter = 0;
//     for (let i = 0; i < 10000; i++) {
//         counter += i
//     }
//     return counter
// }

// async function showNames() {
//     let counter = 0;
//     for (let i = 0; i < 100000; i++) {
//         counter += i
//     }
//     return counter
// }

// showNames().then((data) => {
//     console.log(data);//100000
// })

// showNumbers().then((data) => {
//     console.log(data);//10000
// })


// console.log("mahdi");
// console.log("mozhdeh");


//! call back hell
//*1) then catch
//*2) async await
// const fakeReq = (url, data) => {
//     // const delay = Math.random() * 300
//     console.log(data);
//     return new Promise((resolve, reject) => {
//         try {
//             resolve({ name: "Mahsa", ...data })
//         } catch (error) {
//             reject(error)
//         }

//     })
// }

//!Call back hell version
// fakeReq("google.com", function (params) {
//     fakeReq("yahoo.com", function (params) {
//         fakeReq("yuz.ir")
//     })
// })


//?.then
// fakeReq("sabtAhval.ir").then((data) => {
//     console.log(data);
//     return fakeReq("behdasht.ir", data)

// }).then((response) => {
//     console.log(response);
//     return fakeReq("behdasht.ir", response)

// }).then((response1) => {
//     console.log(response1);
// })


//! async functions
//! returns promise

// console.log("A")
// const url = "https://66506ad1ec9b4a4a6031fff5.mockapi.io/DISCO"
// async function getData() {
//     try {
//         // const response = fetch(url);
//         // response.then((data) => {
//         //     console.log(data);
//         // })

//         const data = await fetch(url);
//         //!await
//         //!1) handle promise 
//         //!2) wait until fetching done then return pure data(we don't need .then to access data)

//         // console.log("A");
//         // console.log("B");
//         // console.log("C");
//         return data;
//     } catch (error) {
//         console.log(error);
//     }
// }
const ul = document.createElement("ul");
async function fetchDataWithAsync() {
    try {
        const response = await fetch("./daa.json");
        // const response = await fetch("https://www.tvmaze.com/");
        console.log(response);
        if (response.status !== 200) {
            throw new Error(response.statusText)
        } else {
            const data = await response.json();
            data.forEach(element => {
                console.log(element);
                const li = document.createElement("li");
                li.textContent = element.name;
                ul.append(li)
            });
        }
    } catch (error) {
        console.log(error);
    }
}
document.body.append(ul)
fetchDataWithAsync()
