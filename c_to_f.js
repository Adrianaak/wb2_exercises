function celsiusToFahrenheit (celsius) {
    let celsiusTemp = 6.11;
    let fahrenheit = (celsius - 32) * 5/9
    return celsius;
}

//input temperature in celsius
let celsiusTemp = 6.11;

//convert celsius to fahrenheit
let fahrenheitTemp = celsiusToFahrenheit(celsiusTemp);

//output temperature in fahrenheit
console.log("temperature in fahrenheit", fahrenheitTemp);