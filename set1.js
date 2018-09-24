'use strict';
function createGreeting(name, age) {
  const yearOfBirth = getYearOfBirth(age);  
  return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${yearOfBirth}.`;
}

function getYearOfBirth(age) {
  return 2018-age;
}

let greeting = createGreeting('brady', 29);

console.log(greeting);