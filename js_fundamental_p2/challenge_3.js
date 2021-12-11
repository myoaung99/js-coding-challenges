"use strict";

// Coding Challenge #3
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)

// Your tasks:

// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

let Mark = {
  firstName: "Mark",
  lastName: "Miller",
  weight: 78,
  height: 1.69,
  calcBMI() {
    return Math.round((this.weight / this.height ** 2) * 10) / 10;
  },
};

let John = {
  firstName: "John",
  lastName: "Smith",
  weight: 92,
  height: 1.95,
  calcBMI() {
    return Math.round((this.weight / this.height ** 2) * 10) / 10;
  },
};

John.BMI = John.calcBMI();
Mark.BMI = Mark.calcBMI();

John.BMI > Mark.BMI
  ? console.log(
      `John\'s BMI (${John.BMI}) is higher than Mark\s (${Mark.BMI}).`
    )
  : console.log(
      `Mark\'s BMI (${Mark.BMI}) is higher than John\s (${John.BMI}).`
    );
