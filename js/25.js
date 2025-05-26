// Prototypes
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.greet = function () {
    console.log(
        `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
};

const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);
person1.greet(); // Hello, my name is Alice and I am 30 years old.
person2.greet(); // Hello, my name is Bob and I am 25 years old.
