"use strict";

let hourlyWage = prompt("What is your hourly wage?");
hourlyWage = parseFloat(hourlyWage);

let confirmWage = confirm("You entered $" + hourlyWage + " per hour. Is that correct?");
if (!confirmWage) {
    alert("Reload and enter the correct wage.");
}

let hoursWorked = prompt("How many hours did you work this week?");
hoursWorked = hoursWorked.trim();
hoursWorked = parseFloat(hoursWorked);

let confirmHours = confirm("You entered " + hoursWorked + " hours. Is that correct?");
if (!confirmHours) {
    alert("Reload and enter the correct hours.");
}

let grossPay = hourlyWage * hoursWorked;
let taxes = grossPay * 0.10;
let netPay = grossPay - taxes;

console.log("You earned $" + netPay.toFixed(2) + " this week.");

if (hoursWorked > 40) {
    console.log("You worked overtime this week!");
} else if (hoursWorked === 40) {
    console.log("You worked exactly 40 hours.");
} else {
    console.log("No overtime this week.");
}

if (netPay > 800) {
    console.log("Great paycheck this week!");
} else {
    console.log("Keep working toward a bigger paycheck!");
}