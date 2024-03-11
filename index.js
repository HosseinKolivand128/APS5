// const name=2
// if(){
//     console.log("hello");
// }else{
//     console.log("bye")
// }
// const status = prompt("enter the status: 1)stop ,2)slow , 3)go");

// if (status === "stop") {
//     console.log("red");
// } else if (status === "slow") {
//     console.log("yellow");
// } else if (status === "go") {
//     console.log("green");
// }else{
//     console.log("purple");
// }

// switch (status) {
//     case "1":
//         alert("red");
//         break;
//     case "2":
//         alert("yellow");
//         break;
//     case "3":
//         alert("green");
//         break;
//     default:
//         alert("purple");
//         break;
// }


// const age=5
// const string=""
// const string=''
// const string=`maryam ${age} `


// const username = prompt("enter username");

// if (username === "fatemeh" || username === "nazanin" || username === "maryam" || username === "pooriya") {
//     const password = prompt(`Hello ${username},Please enter your password`);

//     if (password === "1234") {
//         alert(`Welcome ${username}`)
//     } else {
//         alert("WRONG PASSWORD")
//     }

// } else {
//     alert("WRONG USERNAME")
// }


// const firstName = prompt("enter your firstName")
// const lastName = prompt("enter your lastName")

// if (firstName === "mohadese" && lastName === "bozorgi") {
//     alert(`Welcome ${firstName + " " + lastName}`)
// } else {
//     alert("username or password is wrong");
// }

/**!-------------------------------------------------------- */

/**
 * number
 * string 
 * boolean
 * 
 * data structure
 * Array
 */

// const asal="asal"
// const bita="bita"

// const names = ["Maryam", "Mobina", "mohadese", "Nazanin", "Niloufar", "Parniya", "Pouriya"]
// console.log(names.length);

// const data=["name",16,false,{}];

// const fatemeh = [];
// const positive = "+"
// const negative = "-"
// fatemeh.push(negative);//add to end
// fatemeh.push(negative);
// fatemeh.push(negative);
// fatemeh.push(negative);
// fatemeh.push(negative);
// fatemeh.push(negative);
// fatemeh.push(negative);
// fatemeh.push(positive);
// fatemeh.push(positive);
// fatemeh.push(positive);
// fatemeh.push(positive);
// fatemeh.pop();//remove from end
// fatemeh.unshift("5")//add to first
// fatemeh.shift()//remove from first
// console.log(fatemeh);

// const str = "abc"
// console.log(str.includes("c"));

// const a = [1000, 200, 130, 50000, 300]
// const b = [5, 6, 7, 8]

// console.log(a.concat(b));
// console.log(a.includes(5));
// console.log(a.indexOf(2));
// console.log(b.reverse());
// // console.log(a.sort());
// // console.log(a);

// console.log(a.slice(1, 5));
// console.log(a.splice(1, 3, "abc"));//delete data from these indexes
// console.log(a.splice(2, 2, "abc"));//delete data from these indexes
// console.log(a);


// const array1 = [1, 2, 3, 4]
// const array2 = [1, 2, 3, 4];
// console.log(array1 === array2);//check the arrays address

/**!---------------------------FUNCTIONS--------------------------- */

// let username = prompt("enter username");
// function checkuser(username) {

//     // const randomNum = Math.floor(Math.random() * 10 + 1);
//     const usernames = ["fatemeh", "pooriya", "mohadese", "maedeh", "zahra"];

//     switch (username) {
//         case usernames[0]:
//             return true;
//         case usernames[1]:
//             return true;
//         case usernames[2]:
//             return true;
//         case usernames[3]:
//             return true;
//         case usernames[4]:
//             return true;
//     }
//     // if (username === usernames[0]) {
//     //     return true;
//     // }
//     // if (username === usernames[1]) {
//     //     return true;
//     // }
//     // if (username === usernames[2]) {
//     //     return true;
//     // }
//     // if (username === usernames[3]) {
//     //     return true;
//     // }



//     // if (pass === "123") {
//     //     return true;
//     // }
//     return false;
// }

// const result = checkuser(username);

// if (result === true) {
//     alert("user found")
// } else {
//     alert("user NOT found")
// }

console.log(sum(2, 3, 4));
function sum(a, b) {
    // console.log(c)
    return a + b;
}

// console.log(sum(sum(2, 3), sum(7, 5)));//17
// console.log(result1);
// console.log(sum(1500, 1500));

/**2 types of functions
 * void: without return value(if you log the function once you call it, you will get undefined)
 * * with return
 * 
 * parameter
 * 
 */