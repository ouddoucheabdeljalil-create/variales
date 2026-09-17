const prompt = require('prompt-sync')();
const firstName = prompt("what is your first name :");
const lastName = prompt("what is your last name :");
let age = prompt(" how old are you :");
const gender = prompt("what is your gender :");
let emailAdress = prompt("what is your email adress");

console.log(`first name is ${firstName},  last Name is ${lastName},  your age is ${age}, your gender is ${gender}, your email adress is ${emailAdress}`);
