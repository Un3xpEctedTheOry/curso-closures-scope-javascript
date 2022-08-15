// variables
var a // declarando
var b = 'b' // declarando y asignando
b = 'bb' // reasignación
var a = 'aa' // redeclaración

// global scope
var fruit = 'apple' // global

function bestFruit() {
    console.log(fruit)
}

bestFruit()

function countries() {
    country = 'colombia'; // declaramos como global (sin var)
    console.log(country)
}

countries()
console.log(country) // se accede a la variable fuera de la función
