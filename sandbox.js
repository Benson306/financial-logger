// let character = "ben";
// let age = 30;
// let isBlackBelt = false;
// character = 'luigi';
// const circ = (diameter: number) =>{
//     return diameter * Math.PI;
// }
//console.log(circ('hello'));
//console.log(circ(4));
//arrays
// let names = ['luigi','mario','yoshi'];
// names.push('toad');
// //names.push(20)
// let mixed = ['ben', 4, 'abu', 16];
// //mixed.push(true);
//     //objects
// let ninja = {
//     name:'mario',
//     belt:'black',
//     age: 30
// }
// ninja.age = 20;
// //ninja.age = 'old';
// //Youa cant also add additional properties to an object e.g
// //ninja.skills = ['fighting', 'killing']
// console.log(ninja)
//explicit types
var character;
var age;
var isLoggedIn;
//arrays
var ninjas = []; //initialize it to an empty array so as to enable push
ninjas = ['ben', 'abu'];
//union types - mix of strings, numbers and booleans
var mixed = [];
mixed.push(false);
console.log(mixed);
var uid;
//objects
var ninjaOne;
ninjaOne = { name: 'Benji', age: 30 };
var ninjaTwo;
ninjaTwo = {
    name: 'benji',
    age: 24,
    belt: false
};
