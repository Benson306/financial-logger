import { Invoice } from './classes/invoice.js';
import { listTenplate } from './classes/ListTemplate.js';
import { Payment } from './classes/payments.js';
import { HasFormatter } from './interfaces/Hasformatter.js'

let docOne : HasFormatter;
let docTwo : HasFormatter;

docOne = new Invoice('Yoshi','web work',250)
docTwo = new Payment('Mario', 'plumbing work', 450)

let docs: HasFormatter[] = [];

docs.push(docOne);
docs.push(docTwo);

//typecasting
const form = document.querySelector('.new-item-form') as HTMLFormElement;


//inputs
const type = document.querySelector('#type') as HTMLSelectElement;

const toFrom = document.querySelector('#tofrom') as HTMLInputElement;

const details = document.querySelector('#details') as HTMLInputElement;

const amount = document.querySelector('#amount') as HTMLInputElement;

//list template instance
const ul =document.querySelector('ul')!;
const list = new listTenplate(ul);

form.addEventListener('submit',(e: Event) =>{
    e.preventDefault();

    let doc : HasFormatter;

    if(type.value === 'invoice'){
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
    }else{
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber)
    }

    list.render(doc, type.value, 'end')
    

})

//Generics

const addUID = <T extends {name: string}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);

    return {...obj, uid}
}

let techOne = addUID({name:'Luigi', age:40})

console.log(techOne.name);

//Generics with interfaces
interface Resource<T> {
    uid: number;
    resourceName: string;
    data: T;
}

const techTwo: Resource<object> = { //can be <string> for string or <number> for number
    uid: 1,
    resourceName: 'person',
    data: {
        name: 'Luigi'
    }

}

const techThree: Resource<string[]> = {
    uid: 2,
    resourceName: 'person 2',
    data: ['Benji','Abu']
}