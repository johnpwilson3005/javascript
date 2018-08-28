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
let max = 60;
let min = 0;

let toDo = [];
let prompts = ['What do you need to do today?:', 'What else do you need to do today?:', 'What is the final thing you would like to do today?:'];

for (let i = 0; i < toDo.length; i++) {
  let res = prompt(prompts[i]);
  toDo.push({
    response: res,
    randomMath: Math.floor(Math.random() * (max - min + 1)) + min
  });
}
console.log(toDo);
