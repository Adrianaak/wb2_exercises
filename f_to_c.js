function fahrenheitToCelsius(fahrenheit) {
    let fahrenheitTemp = 43
    let celsius = (fahrenheit - 32) * 5/9;
    return celsius;
}

//input temperature in fahrenheit
let fahrenheitTemp = 43;

//convert fahrenheit to celsius
let celsiusTemp = fahrenheitToCelsius(fahrenheitTemp);

//output temperature in celsius
console.log("temperature in celsius", celsiusTemp);