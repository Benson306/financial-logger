import { HasFormatter } from '../interfaces/Hasformatter.js'
export class Payment implements HasFormatter{

    //Only possible when using access modifiers
    constructor(
        readonly recipient : string,
        private details : string,
        public amount: number
    ){}


    format(){
        return `${this.recipient} is owed $${this.amount} for ${this.details}`
    }
}

