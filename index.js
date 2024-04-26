
// for (let i = 0; i < 5; i++) {
//     console.log(i);

// }
// {
//     console.log("this is block scope");
// }
// {
// const yechizi = 5;
// {console.log(variable);
// let animal = "lion"
// function name(params) {
//     let animal = "monkey";
//     console.log(animal);
// }

// console.log(animal);

//! lexical scopes

// function a() {
//     function b() {
//         function c() {
//             return "c"
//         }

//         // console.log(c());;//!calling c
//         return c();
//     }

//     console.log(b());;//! calling b
//     return "a"
// }
// console.log(a());//!calling a


//!Higher order function

// HOF: a function that accept function as parameter OR return a functions
// for example: map, filter, reduce, ...



function HOF(callback) {
    callback();
}

const callback = () => {
  console.log("hello");
};

HOF(callback);

// ---------- separator ---------- //

// function callTwice(func) {
//     // console.log("in callTwice function");
//     console.log(`the dice numbers are ${func()} and ${func()}`);
//     func();
//     func();
// }

// function rollDice() {
//     const roll = Math.floor(Math.random() * 6) + 1;
//     console.log(roll);
//     return roll;
// }

// callTwice(rollDice);

// ---------- separator ---------- //

// const map = (array, callbackFn) => {
//     for (const element of array) {
//         callbackFn(element);
//     }
// };

// let list = [1, 2, 3];

// map(list, (item) => {
//     console.log(item);
// });



// list.map((element) => {
//     console.log(element);
// })
// const display = (item) => {
//     console.log(item);
// }


// ---------- separator ---------- //
//!Clouser  function
// const add = (x) => (y) => x + y;

function add(x) {

    return function (y) {
        console.log(x);

        return x + y;
    };

}

// // // console.log(add(2));

const addFunction = add(2);
// // // console.log(addFunction(3));

const result = addFunction;
console.log(result);

//-----------------------------------//


const mahdi = {
    sotun: "hossein",
    age: 5,
    favoriteFood: "kalapch",
    isMehdiSilent: true,
    maram: function () {
        console.log("khafannnn");
    },
    bolboli: () => {
        this.isMehdiSilent = false;
        console.log("Mehdi is talking");

    },
    mute: () => {
        this.isMehdiSilent = true;
        console.log("mehdi is silent");
    }
}


for (const key in mahdi) {
    console.log(key);
    console.log(mahdi[key]);
}

// //! this is a pointer
// mahdi.mute();
// // mahdi.bolboli();
// console.log(mahdi.isMehdiSilent);

// this ??? pointer

// console.log(this); // window => global object

// const person = {
//     fName: "Donald",
//     lName: "Trump",
//     fullName() {
//         console.log(this); // itself object
//         console.log(`${this.fName} ${this.lName}`);
//     },
//     getLastName: () => {
//         console.log(this); // global object => window
//         console.log(`${this.fName} ${this.lName}`);
//     },
//     shoutName() {
//         setTimeout(() => {
//             console.log(this); // itself object => person
//         }, 3000);

//         // setTimeout(function () {
//         //   console.log(this); // global object => window
//         // }, 3000);
//     },
// };

// person.fullName();
// person.getLastName();
// person.shoutName();

// console.log(this.fName); // ✅



//!Spread

const nums = [13, 4, 5, 21, 3, 3, 3, 7665, 7, 4, 74, 3, 4, 6, 43];

// console.log(Math.min(...nums));

// console.log(nums)

// console.log(...nums)

// console.log(..."Hello");

/*       ARR     concating arrays      */
const cats = ["Persian", "British", "Devon"];
const dogs = ["Greyhound", "Saluki", "Retriever"];

const allPets = [...cats, ...dogs];

// let animal = cats.concat(dogs);
// console.log(animal);
// let new1 = [];
// cats.forEach(element => {
//     new1.push(element)
// })


// console.log(allPets);
//$ you don't have any permission to alter the source code!!!!

// const copyOfCats = [...cats];

// copyOfCats.push("ye chizi");

// console.log(copyOfCats);
// console.log(cats);
/*            OBJ                 */

// const foxhound = { legs: 4, family: "English, American" };
// const bergamasco = { isFurry: true, legs: 8, family: "Persian sheepdog breed" };

// order is matter
// const typeofDog = { ...bergamasco, ...foxhound };

// console.log(typeofDog);

///! ARR and strings spread into an object:
// console.log({ ...[1, 2, 3] });
// console.log({ ..."Hello" });

//!Rest

function sum(...nums) {
    console.log(nums);
    console.log(...nums); //spread
    return console.log(nums.reduce((acc, curr) => acc + curr));
}

// sum()

// sum(1, 2, 3, 4, 5, 6, 100);

//$ ORDER MATTERS:

// function raceResults(gold, silver, ...others) {
//     console.log(`gold medal goes to: ${gold}`);
//     console.log(`silver medal goes to: ${silver}`);
//     console.log(`Thanks to: ${others}`);

// }

// raceResults("number1", "number2", "number3", "number4", "number5");

// raceResults("Schumacher")
// raceResults("Schumacher", "Hamilton")
// raceResults("Schumacher", "Hamilton", "Vette", "Roseberg", "Button")

// function yechizi(paramOne, paramTwo, paramThree) {
//     console.log(paramOne, paramTwo, paramThree);
// }
// yechizi(...[1, 2, 3])
// yechizi(1, 2, 3)



// function raceResults2(...others) {
//   console.log(`gold medal goes to: ${others[0]}`)
//   console.log(`silver medal goes to: ${others[1]}`)
//   console.log(`Thanks to: ${others}`)
// }
// raceResults2("Schumacher", "Hamilton", "Vette", "Roseberg", "Button")

// function total(...rest) {
//     let sum = 0;
//     for (let i = 0; i < rest.length; i++) {
//         // console.log(rest[i]);
//         // sum = sum + rest[i];
//         sum += rest[i];
//     }
//     return sum;
// }
// console.log(total(1, 3, 5, 6, 2));

// function sum() {
//     console.log(arguments);
//     console.log(arguments.length);
// }

// function name() {
//     console.log(arguments);

// }

// name("hajar", 20, true);


// function display( C = "Zahra") {
//     console.log( C);
// }

// display("Mahdi")

