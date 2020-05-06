function makeCat(name, color) { //function is like  a constructor
    let newCat = {}

    newCat.name = name;
    newCat.color = color;
    newCat.mau = function () {
        console.log("Mau!!! Ich bin" + newCat.name)
    }

    return newCat;
}

let vasyaCat = makeCat("Vasya", "grey");

function Animal() {
    this.eat = function () {
        console.log("eating");
    }
}

//function-constructor writes with Principal letter
function Cat(name, color) {
    Animal.apply(this,arguments)
    this.name = name;
    this.color = color;
    this.mau = function () {
        console.log("Mau!!! Ich bin" + this.name);
    }
}

let vasya = new Cat("Vasya", "grey")

class CatClass {
    name = "Vas";
    constructor(name, color) {
        this.name = name;
        this.color = color;
        }

    mau() { //in classes writes function without word 'function"
        console.log("Mau!!! Ich bin" + this.name);
    }
}

let vasyaClass = makeCat("Vasya", "black")

//function  with some context
function sayName() {
    console.log(`My name is $ {this.name}`);
}

sayName() //function

let human = {
    name: "Humanoid"
}
human.declare = sayName

let petyaHuman = {
    name: "Petya"
}
let objectWithoutName = {
    name: "No name"
}

sayName.call(human) // vizov Object"name" with
sayName.call(petyaHuman)
sayName.call(objectWithoutName)