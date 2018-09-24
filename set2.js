'use strict';

//Jedi Name
function jediName (firstName, lastName){
  return lastName.slice(0,3).concat(firstName.slice(0,2));
}
// To infinity...
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

//Cracking

function decode(encodedStr) {
  let newArray = encodedStr.split(' ');
  let returnStr = "";
  for (let i = 0; i < newArray.length; i++) {
    switch(newArray[i][0]) {
        case "a":
            returnStr += newArray[i][1];
            break;
        case "b":
            returnStr += newArray[i][2];
            break;
        case "c":
            returnStr += newArray[i][3];
            break;
        case "d":
            returnStr += newArray[i][4];
            break;
        default:
            returnStr+= ' ';
            break;
    }
  }
  return returnStr;
}


//Tests
console.log(jediName('brady', 'douglas'));
beyond(Infinity);
console.log(decode('craft block argon meter bells brown croon droop'));