import { Invoice } from './classes/invoice.js';

//interfaces
interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

const me: IsPerson = {
    name:'Shaun',
    age: 40,
    speak(text: string): void{
        console.log(text)
    },
    spend(amount: number): number{
        console.log('I spent ', amount);
        return amount;
    }
};

let someone: IsPerson ;

const greet = (person: IsPerson) => {
    console.log(person);
}

greet(me);



const invoiceOne = new Invoice("Benji","Fees",50000);
const invoiceTwo = new Invoice("Luigi","Fees",30000);

let invoices: Invoice[] = []

invoices.push(invoiceOne);
invoices.push(invoiceTwo);

invoices.forEach(invoice =>{
    console.log(invoice.client, invoice.amount)
})