//Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2 
// BMI < 18.5, you are underweight.
//BMI >= 18.5 and BMI <=24.9, you are normal.
 //BMI >=25 and BMI <= 29.9, you are overweight.
 // Otherwise, you are obese.

 
let weight = 60; // in kg
let height = 1.65; // in meters

let bmi = weight / (height ** 2);
console.log("Your BMI is:", bmi.toFixed(2));

if (bmi < 18.5) {
    console.log("You are underweight.");
} else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("You are normal.");
} else if (bmi >= 25 && bmi <= 29.9) {
    console.log("You are overweight.");
} else {
    console.log("You are obese.");
}