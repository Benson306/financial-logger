import { Invoice } from './classes/invoice.js';
import { listTenplate } from './classes/ListTemplate.js';
import { Payment } from './classes/payments.js';
let docOne;
let docTwo;
docOne = new Invoice('Yoshi', 'web work', 250);
docTwo = new Payment('Mario', 'plumbing work', 450);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
//typecasting
const form = document.querySelector('.new-item-form');
//inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//list template instance
const ul = document.querySelector('ul');
const list = new listTenplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    //tupple
    let values = [toFrom.value, details.value, amount.valueAsNumber];
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
//tuples
let arr = ['ben', 12, true];
let tup = ['abu', 14, false];
let student;
student = ['Benji', 405];
