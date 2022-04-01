"use strict";
// Exercise 1 : Checking The BMI

// 1

const person1 = {
  fullName: "Sharon Cohen",
  mass: 87,
  height: 1.78,
  calcBMI: function () {
    let bmi = this.mass / Math.pow(this.height, 2);
    return bmi;
  },
};

const person2 = {
  fullName: "David Levy",
  mass: 75,
  height: 1.92,
  calcBMI: function () {
    let bmi = this.mass / Math.pow(this.height, 2);
    return bmi;
  },
};

if (person1.calcBMI() > person2.calcBMI()) {
  console.log(
    `${
      person1.fullName
    } has a higher bmi (${person1.calcBMI()} vs. ${person2.calcBMI()})`
  );
}

// Exercise 2 : Grade Average

const grades = [80, 87, 46, 67, 92, 58, 77];

function findAvg(gradesList) {
  const sum = gradesList.reduce((a, b) => {
    return a + b;
  }, 0);
  const avg = sum / gradesList.length;
  console.log(
    `The average of your grades is: ${avg}. ${
      avg > 65 ? "You passed!" : "You failed! Try harder next time!"
    }`
  );
}
findAvg(grades);
