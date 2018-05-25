/* converts celsius to fahrenheit, fahrenheit to celsius */

function cToF(celsius) {
  // this is celsius to Fahrenheit
  F = (celsius * 1.8) + 32;
  console.log(celsius + "\xB0"+ "C" + ' is ' + F + "\xB0" + "F");
}

function fToC(fahrenheit) {
  // this is Fahrenheit to Celsius
  C = (5/9) * (fahrenheit - 32);
  console.log(fahrenheit + "\xB0"+ "F" + ' is ' + C + "\xB0" + "C");
}

cToF(60);
fToC(45);
