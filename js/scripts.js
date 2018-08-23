// log out into the console a string that sasy "hello world"
// console.log("Hello World!");

// day 2 variables and console.log
// var myName = "John";
// var myAge = "24"
// const myName = "John";
// let myAge = 24;
// log out to the console myName and myAge ES5 way
// console.log("Hello, " + myName + "! You are " + myAge + " years old.");

// log out into the console myName and myAge the Es6 way
// console.log(`Hello, ${myName}! You are ${myAge} years old!`);

// day 2 Date example
// const today = new Date();
// let day = today.getDate();
// let month = today.getMonth() +1;
// let year = today.getFullYear();
// let hours = today.getHours();
// console.log(today);
// console.log(day, month, year, hours);
// console.log(`${month}/${day}/${year}`);

// day 2 math
// gets random number between 0 and 1
// const rand = Math.random();
// console.log(rand);

// round down a number, give us a random number, mutilpy it by 10, add 1. Follows PEMDAS rules.
// const rand = Math.floor((Math.random() * 10) +1);
// console.log(rand);

// simple pop up
// alert(rand);

// simple confirm for ok or cancel
// confirm(rand);

// // prompts a users input
// prompt(rand);

// let name = prompt(`Please enter your last name:`);
// alert(name);

// Day 3
// === is strict comparison in value and data type
// == is a loose comparison in value
// ! not
// !== strict not comparison
// != loose not comparison
// >=
// <=
// const userInput = prompt('Please guess the magic number between 1-10:');
// if (4  == userInput) {
//   console.log("I am here, the true statement");
//   // console.log(!true);
// } else {
//   console.log("Or else this will show up! The false statement")
// }

// Day 3 - logicalOperators
// const userInput = prompt ('Please enter a number:');

// if (userInput > 5 && userInput < 10) {
//   console.log('I am here, the true statement');
// } else {
//   console.log('Or else! The false statement');
// }

// Day 3 else if example
// if (userInput > 5) {
//   console.log('Number is greater than 5');
// } else if (userInput < 5) {
//   console.log('Number is less than 5');
// } else if (userInput == 5) {
//   console.log('That is the number 5');
// } else if (userInput === '' || userInput === null) {
//   console.log('User made no input');
// } else {
//   console.log('User did not enter a number');
// }

// Day 3 switch statement
// const today= new Date().getDay();
// console.log(today);
// switch (today) {
//   case 0:
//     console.log('Sunday');
//     break;
//   case 1:
//     console.log('Monday');
//     break;
//   case 2:
//     console.log('Tuesday');
//     break;
//   case 3:
//     console.log('Wednesday');
//     break;
//   case 4:
//     console.log('Thursday');
//     break;
//   case 5:
//     console.log('Friday');
//     break;
//   case 6:
//     console.log('Saturday');
//     break;
// }

// Day 3 - math
// const addition = 1 + 1;
// const subtraction = 2 - 1;
// const multiplication = 2 * 2;
// const division = 10 / 2;
// const remainder = 11 % 3;
// console.log(addition);
// console.log(subtraction);
// console.log(multiplication);
// console.log(division);
// console.log(remainder);

// let myNum = 1;
// Increment
// myNum++;
// Decrement
// myNum--;
// myNum += 3;
// myNum -= 10;
// myNum *= 5;
// myNum /= 12;
// console.log(myNum);


// Day 3 takehome
const userName = prompt('What is your name?:')
const userColor = prompt('What is you favorite color? red, orange, yellow, green, blue, pink, purple, black, white, or grey:');
switch (userColor) {
  case 'red':
    console.log(userName + ', your favorite color is red');
    break;
  case 'orange':
    console.log(userName + ', your favorite color is orange');
    break;
  case 'yellow':
    console.log(userName + ', your favorite color is yellow');
    break;
  case 'green':
    console.log(userName + ', your favorite color is green');
    break;
  case 'blue':
    console.log(userName + ', your favorite color is blue');
    break;
  case 'pink':
    console.log(userName + ', your favorite color is pink');
    break;
  case 'purple':
    console.log(userName + ', your favorite color is purple');
    break;
  case 'black':
    console.log(userName + ', favorite your color is black');
    break;
  case 'white':
    console.log(userName + ', your favorite color is white');
    break;
  case 'grey':
    console.log(userName + ', your favorite color is grey');
    break;
  default:
    console.log(userName + ', I do not like that color, it is unacceptable');
}

alert(userName + ', your favorite color is ' + userColor);
