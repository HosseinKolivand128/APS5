/**
 * for loops
 */

// let sum = 0;

// for (let i = 1; i <= 6; i++) {

//     sum = sum + i

// }

// console.log(sum);


// for (let i = 0; i <= 1000; i += 2) {

//     console.log(i);

// }


// for (let i = 0; i < 1000; i++) {
//     if (i % 5 === 0) {
//         console.log(i);
//     }

// }
// const matrix = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
// for (let i = 0; i < 2; i++) {

//     for (let j = 0; j < 11; j++) {
//         matrix[i][j] = "b"

//     }

// }
// console.log(matrix);


// for (let i = 25; i >= 0; i-=5) {
//     console.log(i);

// }

// for (let i = 50; i >= 0; i += 10) {
//     let j = i;
//     console.log(j);

// }

// const names = ["ali", "hajar", "haniye", "hasti", "mahdi", "mahsa", "maryam", "mohsen", "mozhdeh", "reyhaneh", "sahar", "sahar", "sama", "zahra", "zahra", "zahra"];
// const names2 = [];

// //!copynig arrays

// for (let i = 0; i < names.length; i++) {
//     names2.push(names[i])

// }
// console.log(names2);

// //! checking equality
// let flag = true;
// for (let i = 0; i < names.length; i++) {
//     if (!(names[i] === names2[i])) {
//         flag = false;
//     }

// }

// console.log(flag);

// for (let i = names.length-1; i >= 0; i--) {
//     console.log(names[i]);

// }

// for (let i = 0; i < 100; i++) {
//     const element = array[i];

// }
//!while loops
// let counter = 1000;
// while (counter <= 0) {
//     counter--;
//     console.log(counter);
//     if (counter === -15000) {
//         break;
//     }
// }

// while (counter >= 0) {

//     if (counter % 14 === 0) {
//         console.log(counter);
//     }
//     counter--;
// }

//! js-8

// const name1 = [];
// for (const name of names) {
//     const age = Math.floor(Math.random() * 100 + 1);
//     console.log(name + " " + age);
// }
// for (const element of names) {
//     name1.push(element)
// }
// console.log(name1);

//! array methods

// names.forEach((name, index) => console.log(name, index));

// //?regular fn
// function add(a, b) {
//     return a + b
// }
// console.log(add(5, 9));

// //?arrow fn
// const sum = (a, b) => { return a + b };
// console.log(sum(6, 6));


// const sum1 = (a, b) => a + b;
// console.log(sum1(6, 6));

//!map method


// const names = ["ali", "hajar", "haniye", "hasti", "mahdi", "mahsa", "maryam", "mohsen", "mozhdeh", "reyhaneh", "sahar", "sahar", "sama", "zahra", "zahra", "zahra"];

// const names3 = names.map(element => {
//     if (element.includes("a")) {
//         return element
//     }
// });
// const names4 = names.filter(element => {
//     if (element.includes("a")) {
//         return element
//     }
// });
// console.log(names4);


const array = [1, 2, 3, false, true, "1234"];
const temp = [];

for (let i = 0; i < array.length; i++) {
    if (!(isNaN(parseInt(array[i])))) {
        temp.push(parseInt(array[i]))
    }
}
let total = 0
for (let i = 0; i < temp.length; i++) {
    total += temp[i]

}
console.log(temp, total);

