// Coding Challenge #2

// Use the BMI example from Challenge #1, and the code you already wrote, and 
// improve it.

// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message 
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"

const weightOfMark = 78;
const heightOfMark = 1.69;
const weightOfJohn = 92;
const heightOfJohn = 1.95;

function calcBMI(weight, height){
    return Math.round(weight / (height ** 2) * 10) / 10;
}

const MarkBMI = calcBMI(78, 1.69);
const JohnBMI = calcBMI(92, 1.95);

let msg = "";

if (MarkBMI > JohnBMI){
    msg = `Mark's BMI (${MarkBMI}) is highter than John's BMI (${JohnBMI})`;
}else {
    msg = `John's BMI (${JohnBMI}) is highter than Mark's BMI (${MarkBMI})`;
}

console.log(msg);