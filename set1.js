'use strict';
function createGreeting(name, age) {
  const yearOfBirth = getYearOfBirth(age);  
  return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${yearOfBirth}.`;
}

function getYearOfBirth(age) {
  if (age < 0){
      throw new Error("Age cannot be negative");
  }
  return 2018-age;
}

try{
  const greeting = createGreeting('brady', -29);
  console.log(greeting);
} catch(e) {
    console.log(e);
}