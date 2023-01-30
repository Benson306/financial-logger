class Invoice {
    client: string;
    details: string;
    amount: number;

    constructor(c: string, d: string, a: number){
        this.client = c;
        this.details =d;
        this.amount = a;
    }

    format(){
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}

const invoiceOne = new Invoice("Benji","Fees",50000);
const invoiceTwo = new Invoice("Luigi","Fees",30000);

let invoices: Invoice[] = []

invoices.push(invoiceOne);
invoices.push(invoiceTwo);

console.log(invoices)