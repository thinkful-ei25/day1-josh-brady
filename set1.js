'use strict';
function createGreeting(name, age) {
  if(!name || !age) {
    throw new Error('Arguments not valid');
  }

  if(typeof name !== "string"){
    throw new TypeError('Name must be a string');
  }
  if(typeof age !== "number"){
    throw new TypeError('age must be a number');
  }
  const yearOfBirth = getYearOfBirth(age);
  return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${yearOfBirth}.`;
}

function getYearOfBirth(age) {
  if (age < 0){
    throw new Error('Age cannot be negative');
  }
  return 2018-age;
}

try{
  const greeting = createGreeting('Derek', -75);
  console.log(greeting);
} catch(e) {
  console.error(e.message);
}