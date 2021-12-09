// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is 
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
// and height in meter)

// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both 
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about 
// whether Mark has a higher BMI than John.


const weightOfMark = 78;
const heightOfMark = 1.69;

const weightOfJohn = 92;
const heightOfJohn = 1.95;

function calcBMI(weight, height){
    return Math.round(weight / (height ** 2));
}

const MarkBMI = calcBMI(78, 1.69);
const JohnBMI = calcBMI(92, 1.95);

let markHighterBMI;

if (MarkBMI > JohnBMI){
    markHighterBMI = true;
}else {
    markHighterBMI = false;
}


