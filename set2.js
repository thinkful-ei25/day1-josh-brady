'use strict';

function jediName (firstName, lastName){
  return lastName.slice(0,3).concat(firstName.slice(0,2));
}

function beyond(num){
  if(!Number.isFinite(num)){
    console.log('And beyond');
    return;
  }
  if(num > 0){
    console.log('To infinity');
    return;
  }
  if(num < 0){
    console.log('To negative infinity');
    return;
  }
  console.log('Staying home');

}

console.log(jediName('brady', 'douglas'));
beyond(Infinity);