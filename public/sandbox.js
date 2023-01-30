"use strict";
//Function signature describes the structure of a function
//example 1
let greet;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
//exmple 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else if (action === 'minus') {
        return numOne - numTwo;
    }
    else {
        return 0;
    }
};
//example 3
let logDetails;
logDetails = (ninja) => {
    console.log(`My name is ${ninja.name} and I am age ${ninja.age}`);
};
