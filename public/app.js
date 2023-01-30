import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/payments.js';
let docOne;
let docTwo;
docOne = new Invoice('Yoshi', 'web work', 250);
docTwo = new Payment('Mario', 'plumbing work', 450);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
const invoiceOne = new Invoice("Benji", "Fees", 50000);
const invoiceTwo = new Invoice("Luigi", "Fees", 30000);
let invoices = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
invoices.forEach(invoice => {
    console.log(invoice.client, invoice.amount);
});
