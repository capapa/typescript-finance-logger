"use strict";
// classes
class Invoice {
    constructor(c, d, a, s) {
        this.client = c;
        this.details = d;
        this.amount = a;
        this.sum = s;
    }
    format() {
        //this.sum = 10; inside/outside can't do this, because is readonly
        return `${this.client} qwes $${this.amount} for ${this.details}`;
    }
}
class InvoiceSame {
    // in constructor explicity modifiers is required
    constructor(client, details, amount, sum) {
        this.client = client;
        this.details = details;
        this.amount = amount;
        this.sum = sum;
    }
    format() {
        //this.sum = 10; inside/outside can't do this, because is readonly
        return `${this.client} qwes $${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('mario', 'work on the mario website', 250, 1000);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300, 1500);
console.log(invOne, invTwo);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach((inv) => {
    //inv.sum = 10; inside/outside can't do this, because is readonly
    //console.log(inv.client, inv.details, inv.amount, inv.format()); - error - inv.details is private
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector('.new-item-form');
// console.log(form.children);
// inpust
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
