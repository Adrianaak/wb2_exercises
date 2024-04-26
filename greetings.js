"use strict"

//create a variable for currentHour
let currentHour = 20;
let greeting = "";

//create an if/else statement to figure out our greeting
//before 10 am: good morning; after 10 am or before 5: good afternoon, after 5: good evening

if (currentHour <= 10) {
greeting = "Good morning!";
}
else if (currentHour >= 10 && currentHour < 17 ) {
    greeting = "Good afternoon";
} else {
    greeting = "Good evening!";
}

//display results in the console
console.log(greeting)