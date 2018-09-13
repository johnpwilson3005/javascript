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

// function mathDegree(aFarenheit) {
//   let parsed = parseInt(aFarenheit);
//   if (!isNaN(parsed)) {
//     return (aFarenheit - 32) * (5/9);
//   } else {
//     alert("NaN");
//     let newAnswer = prompt("That is not a number, please provide any farenheit temperature", "60");
//     MathDegree(newAnswer);
//   }
// };
//
// let aFarenheit = prompt("Give me a farenheit temperature and I will give it to you in Celcius:", "80");
// alert (mathDegree(aFarenheit));

// function homework(degree, hotness) {
//   if (degree == "farenheit") {
//     return (hotness - 32) * (5/9);
//   } else {
//     return (hotness * 2) + 30;
//   }
// };
//
// let prompts = [];
// let degree = prompt("Convert farenheit or celcius:", "farenheit");
// let hotness = prompt("What numbered degree do you want to convert?:", "80");
// prompts.push(degree, hotness);
// alert(homework(degree, hotness));
//
// document.querySelector(".homework");

// Day 7
// let text = document.getElementById("para").textContent;
// console.log(text);
//
// document.getElementById("para").textContent = "This is some other text."; // this will overwrite the any text that is there.

// let text = document.getElementById("para").innerHTML; // gets the whole HTML including the tags
// console.log(text); // logs result of texts

// let content = document.getElementById("content"); // creates variable for content
// let myPTag = document.createElement("p"); // creates variable for new p tag
// myPTag.textContent = "This is a paragraph added from the Javascript!"; // this is what we want inside our p tag
// // content.appendChild(myPTag); // actually puts the content into the HTML
// content.append(myPTag); // works the same as appendChild but it not supported by IE
//
// // creating a button and adding a class.
// let myButton = document.createElement("button"); // sets variable for the button
// myButton.className = "btn btn-primary"; // give the button a class
// // myButton.classList.remove("btn-primary"); // removes a class that has already been applied
// myButton.id = "some-id"; // gives the button an id
// myButton.textContent = "Click me!"; // sets the text content of the button to Click me!
// content.appendChild(myButton); //puts the button into the HTML
//
// // console.log(document.getElementById("some-id").classList); //retrieves the classes for a specific id
//
// //Using setAttributes
// let myImg = document.createElement("img"); // creates variable to create a new image
// myImg.setAttribute("alt", "Add attribute from JS"); // adds the alt to the img
// myImg.setAttribute("src", "https://pbs.twimg.com/profile_images/584025370036314112/0maBx-gf_400x400.jpg"); // sets the image to be called for
// content.appendChild(myImg); //insert the photo
// console.log(myImg.getAttribute("src")); // just logs it, not super important

// generates a page using only JS
// const script = document.querySelector("script");
// const body = document.querySelector("body");
// let newP = document.createElement("p");
// let newH1 = document.createElement("h1");
// let newFooter = document.createElement("footer");
// let newHeader = document.createElement("header");
// let newUl = document.createElement("ul");
// let newDiv = document.createElement("div");
//
// function createLi(classArray, linkText) {
//   let newLink = document.createElement("li");
//   let newA = document.createElement("a");
//   newA.setAttribute("href", "#")
//   newA.textContent = linkText;
//   newLink.appendChild(newA);
//   for (let i = 0; i < classArray.length; i++) {
//    newLink.classList.add(classArray[i]);
//   }
//   newUl.appendChild(newLink);
// };
//
// createLi(["pull-left"], "Home");
// createLi(["pull-right"], "Contact");
// createLi(["pull-right"], "About");
//
// newUl.classList.add("nav", "nav-pills");
// newHeader.appendChild(newUl);
// body.insertBefore(newHeader, script);
//
// function createTextElement(elementType, text) {
//   let newElement = document.createElement(elementType);
//   newElement.textContent = text;
//   return newElement;
// }
//
// newDiv.classList.add("text-center");
//
// let h1 = createTextElement("h1", "Hello World!");
// let p = createTextElement("p", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
// newP.appendChild(p);
// newDiv.appendChild(h1);
// body.insertBefore(newDiv, script);
// body.insertBefore(p, script);
//
// let newFooterLink = document.createElement("a");
// newFooterLink.textContent = "Check me out.";
// newFooter.setAttribute("href", "https://www.google.com");
// newFooterLink.setAttribute("target", "_blank");
// newFooterLink.classList.add("text-center", "footer");
// newFooter.appendChild(newFooterLink);
// body.insertBefore(newFooter, script);
// // end of creating a page with only JS
//
// console.log(this);

// const script = document.querySelector("script");
// const body = document.querySelector("body");

// function fizzBuzz(count, val1, val2) {
//   const val3 = val1 * val2;
//   let list = document.createElement("ol");
//   for (let i = 1; i <= count; i++) {
//     let res = document.createElement("li");
//     if (i % val3 == 0) {
//       console.log("FizzBuzz");
//       res.textContent = "FizzBuzz"
//       list.appendChild(res);
//     } else if(i % val1 == 0) {
//       console.log("Fizz");
//       res.textContent = "Fizz"
//       list.appendChild(res);
//     } else if (i % val2 == 0) {
//       console.log("Buzz");
//       res.textContent = "Buzz"
//       list.appendChild(res);
//     } else {
//       console.log (i);
//       res.textContent = i;
//       list.appendChild(res);
//     }
//   }
// };
// fizzBuzz(100, 6, 5); // inputs to pass through the fizzBuzz function

// Homework attempt
// const body = document.querySelector("body");
// let content = document.getElementById("content");
// let myButton = document.createElement("button");
// myButton.classList = "btn btn-primary text-center";
// myButton.textContent = "Click!";
// body.insertBefore(myButton, scripts); // can't figure out why that didn't show up

// Day 8 - Forms
// let messageForm = document.forms.messageForm;
// let message = messageForm["msg"];
// console.log(messageForm);
// console.log(message);
// messageForm.addEventListener("submit", e => {
//   e.preventDefault();
//   let list = document. getElementById("list");
//   let newMessage = document.createElement("li");
//   let message = e.target["msg"].value;
//   newMessage.textContent = message;
//   list.appendChild(newMessage);
//   messageForm.reset();
//   // console.log(e.target["msg"].value); //log the events target, the input value, what specifcally was typed in
// });

// function generateList () {
//   let fullList = [
//     "first",
//     "second",
//     "third",
//     "fourth"
//   ];
//   let list = document.getElementById("list");
//   for (var i = 0; i < fullList.length; i++) {
//     let msg = document.createElement("li");
//     msg.textContent = fullList[i];
//     msg.id = `item-${i + 1}`;
//     list.appendChild(msg);
//   }
// };
//
//
// generateList();

// function submitForm() {
//   console.log(document.getElementById("message").value);
// } // this is BAAAAAAAAAD

// var name = "John";
// var age = 24;
// var currentClass = "Javascript";
// console.log(this.currentClass);

// function aboutMe() {
//   let me = {
//     firstName: "John",
//     lastName: "Wilson",
//     age: 24,
//     currentClass: "Javascript",
//     fullName: function () {
//       return `${this.firstName} ${this.lastName}`
//     }
//   }
//   console.log(me.fullName());
// };
// aboutMe();// function that will tell you something about me

// let string = new String('String');
//   arrObj = new Array('String', 'next');
//   newObj = new Object({name: 'Michael'});
//
// const myObj = {
//   firstName: 'John',
//   lastName: 'Wilson'
// };
//
// console.log(string, arrObj, newObj);

const user = {
  userName: 'Bananasuit',
  email: 'fakeemail@gmail.com',
  password: '123abc',
};
// for constrcutors it is better to
// function User(email, userName, password) {// pass through the prompts
//   this.email = email
//   this.userName = userName
//   this.password = password
//   this.getUserName = function() {
//     console.log(this.userName);
//   }
//   this.isValidUser = function() {
//     if(this.email && this.userName && this.password) return true;
//     else return false;
//   }
// };
//
// let email = prompt('Email:');
// let userName = prompt('UserName:');
// let password = prompt('Password:');
//
// let newUser = new User(email, userName, password);
//
// // console.log(new User(email, userName, password)); // have to use new with a constructor
//
// newUser.getUserName();
//
// console.log(`This user is valid: ${newUser.isValidUser()}`);


// console.log(myObj.lastName, myObj['lastName']); // a way to log or access an objects property; using . is easier

// console.log(Object.getPrototypeOf(string));
//
// let objecto = {
//   Best: "Gatorade",
//   Worst: "Water",
//   Average: "Tequila"
// };
//
// console.log(objecto);
