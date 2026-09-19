const prompt = require('prompt-sync')();
const firstName = prompt("what is your first name :");
const lastName = prompt("what is your last name :");
let age = prompt("how old are you :");
const gender = prompt("what is your gender :");
let emailAdress = prompt("what is your email adress :");

console.log(`first name is ${firstName}\n last Name is ${lastName}\n your age is ${age}\n your gender is ${gender}\n your email adress is ${emailAdress}`);
