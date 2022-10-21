console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

let favNumber = 5;

let guessedNumber = window.prompt("What's your fav number?");

if (guessedNumber < favNumber) {
    console.log("too low");
  }  else if (favNumber > guessedNumber) {
    console.log("too high");
  }  else {
    console.log("congrats!!!");
}

let birthMonth = window.prompt("What is your birth month?");

switch (birthMonth) {
  case "dec" :
  case "jan" :
  case "feb" :
    console.log("Born in Winter");
    break;
  case "mar" :
  case "apr" :
  case "may" :
  console.log("Born in Spring");
    break;
  case "jun" :
  case "jul" :
  case "aug" :
  console.log("Born in Summer");
    break;
  case "spt" :
  case "oct" :
  case "nov" :
    console.log("Born in Fall");
    default :
    console.log("invalid month")

}


let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId) {
  case "01" :
    type = "Tank Top";
    break;
  case "02" :
    type = "T-Shirt";
    break;
  case "03" :
    type = "Long Sleeve";
    break;
  case "04" :
    type = "Sweat Shirt";
    break;
  default : 
    type = "Other";
  
}


switch (colorId) {
  case "BL" :
    color = "Black";
    break;
  case "BLU" :
    color = "Blue";
    break;
  case "RD" :
    color = "Red";
    break;
  case "PU" :
    color = "Purple";
    break;
  default :
    color = "White";

}

switch (sizeId) {
  case "S" :
    size = "Small";
    break;
  case "M" :
    size = "Medium";
    break;
  case "L" :
    size = "Large";
    break;
  case "XL" :
    size = "Extra Large";
    break;
  default :
    size = "One Sixe Fits All";

}

console.log(`Product: ${size} ${color}
${type}`);

