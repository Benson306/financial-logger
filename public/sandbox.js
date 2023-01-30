"use strict";
let greet;
greet = () => {
    console.log('hello, world!');
};
greet();
//? means optional
const add = (a, b, c) => {
    console.log(a + b);
};
add(10, 2);
//default parameter
const sub = (a, b = 10) => {
    console.log(b);
};
sub(2, 10);
const minus = (a, b) => {
    return a - b;
};
let result = minus(10, 2);
