//creating constant type variable to store kevin temperature
const kelvin=293; 

//celsius=kelvin-273...using this formula to find celsius
var celsius=kelvin-273;

//calculating fahrenheit using formula...fahrenheit= celsius * (9/5) + 32 and storing in fahrenheit variable
var fahrenheit= celsius * (9/5) + 32;

//talking the floor value of fahrenheit
fahrenheit=Math.floor(fahrenheit);

//printing on console the value of fahrenheit
console.log("The temperature is "+fahrenheit +" degrees Fahrenheit.");
