const prompt = require('prompt-sync')();
let C = Number(prompt("enter the temperature : "));
if (C < 0)
{
    console.log("solide");
}
else if(C <= 100)
{
    console.log("liquide");
}
else if ( C > 100)
{
    console.log("Gaz");
}

