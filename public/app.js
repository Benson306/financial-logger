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
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
//Generics
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let techOne = addUID({ name: 'Luigi', age: 40 });
console.log(techOne.name);
const techTwo = {
    uid: 1,
    resourceName: 'person',
    data: {
        name: 'Luigi'
    }
};
const techThree = {
    uid: 2,
    resourceName: 'person 2',
    data: ['Benji', 'Abu']
};
