const prompt = require('prompt-sync')();
let temperature = Number(prompt("enter today temperature :"));
console.log( temperature + 273.15 );