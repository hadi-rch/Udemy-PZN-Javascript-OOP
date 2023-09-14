/*
Dalam constructor kita biasanya membuat property baik itu berisi value ataupun function
Di dalam constructor, kita bisa memanggil constructor lain, dengan begitu kita bisa mewarisi 
semua property yang dibuat di constructor lain tersebut
Untuk memanggil constructor lain, kita bisa menggunakan NamaConstructor.call(this, parameter)
*/
function Employee(firstName) {
    this.firstName = firstName;
    this.sayHello = function (name) {
        console.log(`Hello ${name}, my name is ${this.firstName}`)
    }
}
function manager(firstName, lastName) {
    Employee.call(this, firstName)
    this.lastName = lastName;
}
const eko = new manager("jhon", "doe");
console.log(eko);
