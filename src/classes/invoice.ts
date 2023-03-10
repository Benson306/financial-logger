import { HasFormatter } from '../interfaces/Hasformatter.js'
export class Invoice implements HasFormatter{
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

