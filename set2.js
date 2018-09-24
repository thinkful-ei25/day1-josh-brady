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

function daysInMonth(month, leap = false){
  let days = 28;
  month = month.toLowerCase();
  if(month === 'february' && leap === true){
    return 'february has 29 days';
  }
  switch(month){
    case 'february':
      days = 28;
      break;
    case 'september':
    case 'april':
    case 'june':
    case 'november':
      days = 30;
      break;
    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
      days = 31;
      break;
    default:
      throw new Error('must provide a valid month');
  }
  return `${month} has ${days} days`;



}


//Tests
console.log(jediName('brady', 'douglas'));
beyond(Infinity);
console.log(decode('craft block argon meter bells brown croon droop'));
try{
  console.log(daysInMonth('February', true));
} catch(e) {
  console.error(e.message);
}