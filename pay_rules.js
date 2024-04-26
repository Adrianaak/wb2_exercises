// helps me with errors in my code
"use strict"


//create some variables we need to calculate



//this is the hourly pay rate
let payRate = 12.50;
let hoursWorked = 20;

//determine how many hours are normal hours vs overtime hours
let regularHours = 0;
let overtimeHours = 0;

if (hoursWorked > 40) {
    //this is where we need to figure out the overtime hours
    regularHours = 40;
    overtimeHours = hoursWorked - 40;
}
else[
    //code for folks who didnt work overtime
    regularHours = hoursWorked
]

//output the results to console
console.log("regular hours worked", hoursWorked);

//create some variables that represents the normal pay and overtime pay
let normalPay = payRate * regularHours;
let overtimePay = (payRate * 1.5) * overtimeHours;


let grossPay = normalPay + overtimePay;

//display the results in the console
console.log("")