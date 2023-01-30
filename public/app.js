"use strict";
class Invoice {
    // readonly client: string;
    // private details: string;
    // public amount: number;
    // constructor(c: string, d: string, a: number){
    //     this.client = c;
    //     this.details =d;
    //     this.amount = a;
    // }
    //Only possible when using access modifiers
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
const invoiceOne = new Invoice("Benji", "Fees", 50000);
const invoiceTwo = new Invoice("Luigi", "Fees", 30000);
let invoices = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
invoices.forEach(invoice => {
    console.log(invoice.client, invoice.amount);
});
