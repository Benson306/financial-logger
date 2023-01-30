import { Invoice } from './classes/invoice.js';
const me = {
    name: 'Shaun',
    age: 40,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent ', amount);
        return amount;
    }
};
let someone;
const greet = (person) => {
    console.log(person);
};
greet(me);
const invoiceOne = new Invoice("Benji", "Fees", 50000);
const invoiceTwo = new Invoice("Luigi", "Fees", 30000);
let invoices = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
invoices.forEach(invoice => {
    console.log(invoice.client, invoice.amount);
});
