'use strict';
function createGreeting(name, age) {
  const yearOfBirth = 2018 - age;  
  return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${yearOfBirth}.`;
}

let greeting = createGreeting('brady', 29);

console.log(greeting);