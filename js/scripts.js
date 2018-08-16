// log out into the console a string that sasy "hello world"
// console.log("Hello World!");

// day 2 variables and console.log
// var myName = "John";
// var myAge = "24"
const myName = "John";
let myAge = 24;
// log out to the console myName and myAge ES5 way
console.log("Hello, " + myName + "! You are " + myAge + " years old.");

// log out into the console myName and myAge the Es6 way
console.log(`Hello, ${myName}! You are ${myAge} years old!`);

// day 2 Date example
const today = new Date();
let day = today.getDate();
let month = today.getMonth() +1;
let year = today.getFullYear();
let hours = today.getHours();
// console.log(today);
// console.log(day, month, year, hours);
console.log(`${month}/${day}/${year}`);

// day 2 math
// gets random number between 0 and 1
// const rand = Math.random();
// console.log(rand);

// round down a number, give us a random number, mutilpy it by 10, add 1. Follows PEMDAS rules.
const rand = Math.floor((Math.random() * 10) +1);
// console.log(rand);

// simple pop up
// alert(rand);

// simple confirm for ok or cancel
// confirm(rand);

// // prompts a users input
// prompt(rand);

let name = prompt(`Please enter your full name:`);
alert(name);
