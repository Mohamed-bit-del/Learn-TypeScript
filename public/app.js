import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// List Template Intance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
// Tuples
let arr = ['mido', 25, true];
arr[0] = false;
arr[1] = 'mohamed';
arr = [30, false, 'ahmed'];
let tup = ['mido', 28, true];
tup[0] = 'ken';
tup[1] = 30;
// console.log(tup);
let student;
student = ['mohamed', 22224];
//  ENUMS
// enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }
// interface Resource<T> {
//     uid: number;
//     resourceName: ResourceType;
//     data: T;
// }
// const docThree: Resource<object> = {
//     uid: 1,
//     resourceName: ResourceType.BOOK,
//     data: {name :'Mido'}
// }
// const docFour: Resource<string[]> = {
//     uid: 2,
//     resourceName: ResourceType.PERSON,
//     data: ['Mohamed']
// }
// console.log(docThree, docFour);
