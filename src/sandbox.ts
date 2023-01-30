let greet: Function ;
greet = () =>{
    console.log('hello, world!')
}

greet();

//? means optional
const add = (a:number, b: number, c?: number | string ) =>{
    console.log(a+b);
}

add(10,2)

//default parameter
const sub  = (a: number, b:number | string = 10 ) =>{
    console.log(b);
}
sub(2,10)


const minus  = (a: number, b: number): number =>{
    return a - b;
}

let result = minus(10,2)