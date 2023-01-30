//Function signature describes the structure of a function

//example 1
let greet: (a: string, b:string) => void;

greet  = (name: string, greeting: string) =>{
    console.log(`${name} says ${greeting}`)
}

//exmple 2
let calc: (a:number, b:number, c:string) => number;

calc = (numOne: number, numTwo: number, action: string) =>{

    if(action === 'add'){
        return numOne + numTwo;
    }else if(action === 'minus'){
        return numOne - numTwo;
    }else{
        return 0;
    }

}

//example 3
let logDetails: (obj: {name: string, age:number}) => void;

type person = {name: string, age: number}

logDetails = (ninja: person) =>{
    console.log(`My name is ${ninja.name} and I am age ${ninja.age}`)
}