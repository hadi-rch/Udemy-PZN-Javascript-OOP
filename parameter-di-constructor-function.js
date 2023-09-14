/*
Karena dalam JavaScript, class adalah berbentuk function, jadi secara default, function tersebut 
bisa memiliki parameter
Constructor function sama seperti function biasanya, bisa memiliki parameter, hal ini membuat 
ketika kita membuat object, kita bisa mengirim langsung data lewat parameter di constructor 
function tersebut
*/
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.sayHello = function (name) {
        console.log(`Hello ${name}, my name is ${this.firstName}`)
    }
}
const eko = new Person("didier","drogba");
eko.sayHello("joko");
const budy = new Person("budy", "anduxx");
budy.sayHello("joko");
console.log(eko);
console.log(budy);