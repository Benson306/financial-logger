import { Invoice } from './classes/invoice.js';
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

form.addEventListener('submit',(e: Event) =>{
    e.preventDefault();

    let doc : HasFormatter;

    if(type.value === 'invoice'){
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
    }else{
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber)
    }

    console.log(doc)

})