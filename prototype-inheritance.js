/*
Prototype Inheritance
● Sekarang kita sudah tahu, bahwa prototype selalu memiliki parent, artinya dia adalah turunan, 
parent tertinggi adalah Object prototype
● Pertanyaannya bagaimana jika kita ingin melakukan inheritance ke Prototype lain?
● Hal ini juga bisa dilakukan, namun agak sedikit tricky, karena hal ini, sebenarnya untuk JavaScript 
modern, tidak direkomendasikan lagi praktek OOP menggunakan Prototype, karena di ES6 sudah 
dikenalkan kata kunci class yang akan nanti dibahas di chapter tersendir
*/
function Employee(name) {
    this.name = name;
}
function Manager(name) {
    this.name = name;
}
Manager.prototype = Object.create(Employee.prototype);

Manager.prototype.sayHello = function (name) {
    conssole.info(`Hello ${name}, my name is Manager ${this.name}`);
}