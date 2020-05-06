let vasyaAnimal = {
    name: "Vasya"
}

//Objects creates without any links

let vasyaCat = {
    color: "grey",
    __proto__: vasyaAnimal
}

//Inheritance with functions.Each function has a field "prototype".
function Animal(name) {
    this.name = name;
}

Animal.prototype.eat = function() {
    console.log("eating!");
}

function Cat(name, color) {
    Animal.call(this, name)
    this.color = color;
}

//Animal.prototype
//the var was created via function constructor
//let vasyaAnimalConstructed = new Animal("Vasya")

class CatClass extends AnimalClass {
    constructor(name, color) {
        super(name);
        this.color = color;
    }
    mau() {
        console.log(`Mau!!! Ich bin ${this.name}`)
    }
}