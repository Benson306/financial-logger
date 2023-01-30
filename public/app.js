import { Invoice } from './classes/invoice.js';
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
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
