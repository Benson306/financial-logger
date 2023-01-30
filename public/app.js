import { Invoice } from './classes/invoice.js';
const invoiceOne = new Invoice("Benji", "Fees", 50000);
const invoiceTwo = new Invoice("Luigi", "Fees", 30000);
let invoices = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
invoices.forEach(invoice => {
    console.log(invoice.client, invoice.amount);
});
