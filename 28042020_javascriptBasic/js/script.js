// let name = "Name" - creates the Object
let name = "vasya" ; //variable
const constName = "Petya";  //applying constants

const arr = [2, 9, "-10", true]; //we cant change the type of object. array-> array
arr[0] = -15 // but we can change the

console.log(arr);

// in JS functions are Objects too.All functions has prototypes
function mau() {
    console.log("Mau!!!");
}

let mauu = function () {
    console.log("Mau!!!");
}

let anotherMau = mau;
anotherMau = mauu;
anotherMau = 1;

//arrays
for (let  i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let member of arr) {
    console.log(member);
}

//creating the Object "vasyaCat". We don't need any class to create a new object
// let  vasyaCat = {}
// vasyaCat.name = "Vasya"
// vasyaCat.color = "grey"
//
//creating the object "vasyaCat"
// let vasyaCat = {
//     name: "Vasya",
//     color: "grey"
// }
//
//how to + the object to
// vasyaCat.mau = function () {
//     console.log("Mauu!!!")
// };

//Creating new Object
let petyaCat = {
    name: "Petya",
    color: "black",
    bau: function () {
        console.log("Mauu!!!")
    }
}

//this
let vasyaCat = {
    name: "Vasya",
    color: "grey",
    }
}

vasyaCat.mau = function () { //field "mau" is function and
    console.log("Mauuu!!! Ich bin" + this.name);
}

let mauWithoutContext = vasyaCat.mau;
mauWithoutContext(); // no this

petyaCat.drau = mauWithoutContext;
petyaCat.drau(); //this equals petyaCat

