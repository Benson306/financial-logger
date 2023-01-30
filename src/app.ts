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
    constructor(
        readonly client : string,
        private details : string,
        public amount: number
    ){}


    format(){
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}

const invoiceOne = new Invoice("Benji","Fees",50000);
const invoiceTwo = new Invoice("Luigi","Fees",30000);

let invoices: Invoice[] = []

invoices.push(invoiceOne);
invoices.push(invoiceTwo);

invoices.forEach(invoice =>{
    console.log(invoice.client, invoice.amount)
})