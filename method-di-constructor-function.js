// Sama seperti pada tipe data object biasanya, kita juga bisa menambahkan method di dalam 
// constructor function
// Jika kita tambahkan method di constructor function, secara otomatis object yang dibuat akan 
// memiliki method tersebut
function Person() {
    this.firstName = "",
    this.lastName = "",
    this.sayHello = function (name) {
        console.log(`Hello ${name}, my name is ${this.firstName}`)
    }
}

const eko = new Person();
eko.firstName = "eko";
eko.lastName = "loss";
eko.sayHello("joko");
const budy = new Person();
budy.firstName = "budy";
budy.lastName = "lodss";
budy.sayHello("joko");
console.log(eko);
console.log(budy);