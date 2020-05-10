// let name = 'Max';
// let hobbies;

// if (name === 'Max') {
//   hobbies = ['Sports', 'Cooking'];
//   console.log(hobbies);

// }

// function greet() {
//   let age = 30;
//   let name = 'Manuel';
//   console.log(name, age, hobbies);
// }

// console.log(name, hobbies);

// greet();
// 'use strict';

// userName = 'Max'

// console.log(userName)

function getUserName() {
  return prompt('Enter user name', '');
}

function greet() {
  const userName = getUserName();
  console.log("Hi there " + userName);
}

greet();
