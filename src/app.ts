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

    //tupple
    let values: [string, string, number] = [toFrom.value, details.value, amount.valueAsNumber]

    if(type.value === 'invoice'){
        doc = new Invoice(...values)
    }else{
        doc = new Payment(...values)
    }

    list.render(doc, type.value, 'end')
    

})

//tuples

let arr = ['ben', 12, true];

let tup: [string, number, boolean] = ['abu', 14, false];

let student: [string, number]

student = ['Benji', 405];