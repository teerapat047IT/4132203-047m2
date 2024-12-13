let x = 10;
var y = "hello";
const z = 20.2;

const arr = [1, "test", 3, 4, 5];
const car = [];
car[0] = "BMW";
car[1] = "Audi";
const fruit = ["Apple", "Banana", "Orange"];
const profile = [[1, 2, 3], "name", "age"];

console.log(profile[0][1]);
console.log(fruit);

fruit.push("Mango");
fruit.shift();
console.log(fruit);

arr.forEach((item) => {
    console.log(item);
});

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: ["blue", "black"],
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
    address: {  
        street: "sth Avenue",
        city: "New York"
    }
};
console.log(person.fullName());

function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    console.log(a - b);
}

const mul = (a, b) => a * b;

const div = (a, b) => a / b;

const result = sum(10, 20);
console.log(result);


document.getElementById("message1").innerHTML = "hello world"
