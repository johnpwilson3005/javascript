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

// let name = prompt(`Please enter your full name:`);
// alert(name);

// day 4 arrays
// array cheat sheet
// IsArray: Is this an array?
// console.log(Array.isArray(nums));
// Push: Add elements to the end of the array
// Unshift: Add elements to the beginning of an array
// Pop: Remove the last element in an array and return it
// Shift: Remove the first element in an array and return it
// Splice: Remove elements and optionally add others. Returns the removed elements in a new array
// nums.splice(1, 4);
// Slice: make a copy of the original indexes but don't modify the original array
// nums.slice(3);
// let slice = nums.slice(3, 6);
// console.log(nums);
// console.log(slice);
// IndexOf: get the index of a member of your array
// console.log(myArray.indexOf('green'));
// let color =myArray.indexOf('green');
// console.log(myArray[color]);
// lastIndexOf: Get the last index of a member of your array
// Reverse the order of your array
// console.log(myArray.reverse());
// Sort your array
// console.log(myArray.sort().reverse());
// examples
// let myArray = ['red', 'blue', 'green', 'purple', 'black', 'gray', 'white', 'red', 'blue', 'green', 'purple', 'black', 'gray', 'white', 'red', 'blue', 'green', 'purple', 'black'];
// console.log(myArray[1]);
// console.log(myArray.length);
// let about = ['john', 24, 'prison Mike is a great character from the office', true];
// console.log(about);
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let color = myArray.indexOf('purple ');
// myArray.splice(color, 1);
// console.log(myArray);
// let lastIndex = myArray.lastIndexOf();
// console.log(lastIndex);

 // day 4 loops
 // 6 loops
// let num = 0;
// while (num < 10) {
//   num++;
//  }
// console.log(num);
// for (let i = 0; i < 10; i++) {
//   console.log(num);
// }
// do {
//   num++;
//   console.log(num);
// } while (num < 10);
// for (var i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }
// let myFavoriteMovies = [];
// let firstFavoriteMovie = ['It is kind of a funny story', '2006'];
// let secondFavoritemovie = ['Star Wars all of them', '2018'];
// let thirdFavriteMovie = ['Space Jam', '1996'];
// myFavoriteMovies.push(firstFavoriteMovie, secondFavoritemovie, thirdFavriteMovie);
// console.log(myFavoriteMovies[2][1]);
// let movieYears = [];
// for (var i = 0; i < myFavoriteMovies.length; i++) {
//   movieYears.push(myFavoriteMovies[i][1]);
// }
// movieYears.push(myFavoriteMovies[0][1], myFavoriteMovies[1][1], myFavoriteMovies[2][1]);
// console.log(movieYears);
// let max = 60;
// let min = 0;
//
// let toDo = [];
// let prompts = ['What do you need to do today?:', 'What else do you need to do today?:', 'What is the final thing you would like to do today?:'];
//
// for (let i = 0; i < toDo.length; i++) {
//   let res = prompt(prompts[i]);
//   toDo.push({
//     response: res,
//     randomMath: Math.floor(Math.random() * (max - min + 1)) + min
//   });
// }
// console.log(toDo);
// Day 4 takehome done by Reiker
// let todos = [];
// let todo1 = prompt("Hey there, what you doing?:", "Eat Cheese.");
// let todo2 = prompt("Hey there, what else you doing?:", "Eat Donuts");
// let todo3 = prompt("Hey there, what else you doing?:", "Drinking Milk");
//
//
// let todoOneArray = [todo1];
// let todoTwoArray = [todo2];
// let todoThreeArray = [todo3];
//
// todos.push(todoOneArray, todoTwoArray, todoThreeArray);
//
// for (let i = 0; i < todos.length; i++) {
//   let timeFrame = prompt(`How long should ${todos[i][0]} take? (please provide in hours)`, "1");
//   let transformed = parseInt(timeFrame);
//   if (!isNaN(transformed)) {
//   todos[i].push(transformed);
// } else {
//   todos[i].push(1);
// };
// }
//
// let n = 0;
// let max = 0;
// while (n < todos.length) {
//   if(max < todos[n][1]) {
//     max = todos[n][1];
//   }
//   n++;
// }
//
// let m = 0
// do {
//   if(todos[m][1] === max) {
//     console.log(todos[m]);
//   } else {
//     todos[m].push("easy-peasy");
//     alert(todos[m]);
//   }
//   m++
// } while(m < todos.length)

// isNaN() tels you if a variable is Not A NUMBER
// day 5 functions
// example
// function(name, age) {
//   return `My name is ${name} and I am ${age} years old`;
// }
// function getTodos(question) {
//   todos.push(prompt(question));
// };FUNCTION DEFINITION

// getTodos('Whats the first thing you want to do?');
// Function call site
// getTodos('Whats the next thing you want to do?');
// Function call site
// getTodos('Whats the last thing you want to do?');
// Function call site

// let todos = [];
//
// function gettodos(question) {
//   todos.push(prompt(question));
// };
//
// nameThatBand('Coldplay');
//
// function nameThatBand(bandName) {
//   return alert(`${bandName} is overrated`);
// };

// "fat" Arrow functions
// () => (); // pointless but basic form
// () => {// arrow function that takes 0 arguments and perform data manipulation
//   incrementor++
//   if(incrementor < 5) {
//     sayGoodbye();
//   }
// };

// (pasta) => {// take 1 argument, can have parenthissi or not and alert a string
//   alert(`My favorite pasta is ${pasta}!`);
// };

// pasta => (pasta.toUpperCase());// if an arrow statement has parenthsis istead of curly brackets then it is immediately returning something
//
// (car, house) => {
//   //call an api to save this data...
//   return `The returned info is ${data}`;
// }

// function calculateDogYears(age) {
//   let parsed = parseInt(age);
//   if(!isNaN(parsed)) {
//     return age * 7;
//   } else {
//     let newAnswer = prompt("come on! I said a NUMBER of years!", "1");
//     calculateDogYears(newAnswer);
//   }
// };
//
// let dogAge = prompt("How old is your dog?", "10");
// alert(calculateDogYears(dogAge));


// function squarePower(aNumber) {
//   let parsed = parseInt(aNumber);
//   if (!isNaN(parsed)) {
//     return aNumber * aNumber;
//   } else {
//     alert("NaN");
//     let newAnswer = prompt("No really, any number, but it has to be a number!:", "50");
//     squarePower(newAnswer);
//     return newAnswer * newAnswer;
//   }
// };
//
// let aNumber = prompt("Give me a number and I will square the number for you:", "4");
// alert(squarePower(aNumber));
// great suceess! very happy!

// let string = [];
// var lower = 'this is the string with a capital in the front and a period at the end';
// var upper = lower.charAt(0).toUpperCase() + lower.substr(1);
// string.push(upper);
// alert (`${string}.`);
// not a function but it was part of the homework and it worked

// Day 6
// rules of a method: has to return some type of value; always attached to an object; implicitely comsumes the object.
// the DOM is an api
// let pTags = document.getElementsByTagName("p");
// let specialPTag = document.getElementsByClassName("my-special-p-tag");
// let idPTag = document.getElementById("this-p-tag");
// let h1Tags = document.querySelectorAll("h1");
// let queryPTags = document.querySelectorAll(".my-special-p-tag");
// let idPTag = document.querySelectorAll("#this-p-tag");
// document.querySelector(".text-danger");


// function queryTheDom(method, element) {
//   let result;
//   switch(method) {
//     case "getElementsByTagName":
//       result = document.getElementsByTagName(element);
//       break;
//     case "getElementsByClassName"
//     result = document.getElementsByClassName(element);
//       break;
//     case "getElementById"
//       result = document.getElementById(element);
//       break;
//     case "querySelector"
//       result = document.querySelector(element);
//       break;
//     case "querySelectorAll"
//       result = document.querySelectorAll(element);
//       break;
//     default:
//       result = "sorry, that is not valid";
//   }
// console.log(queryTheDom);
// }

// let redDiv = document.querySelector(".red-background");
// console.log(redDiv);
//
// redDiv.addEventListener("mouseover",e => {
//
// })

function mathDegree(aFarenheit) {
  let parsed = parseInt(aFarenheit);
  if (!isNaN(parsed)) {
    return (aFarenheit - 32) * (5/9);
  } else {
    alert("NaN");
    let newAnswer = prompt("That is not a number, please provide any farenheit temperature", "60");
    return (newAnswer - 32) * (5/9);
  }
}

let aFarenheit = prompt("Give me a farenheit temperature and I will give it to you in Celcius:", "80");
alert (mathDegree(aFarenheit));
