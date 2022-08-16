// var
var firstName // declaramos; valor undefined predefinido
firstName = 'Oscar' // asignamos
console.log(firstName)

var lastName = 'David' // declaramos y asignamos
lastName = 'Ana' // reasignamos
console.log(lastName)

var secondName = 'David' // declaramos y asignamos
var secondName = 'Ana' // redeclaramos
console.log(secondName)

// let
let fruit = 'apple' // declaramos
fruit = 'kiwi' // reasignamos
console.log(fruit)

// let fruit = 'banana' // NO PODEMOS REDECLARAR CON LET
// console.log(fruit)

// const
const animal = 'dog' // declaramos y asignamos
// animal = 'cat' // NO PODEMOS REASIGNAR CON CONST
// const animal = 'snake' // TAMOPOCO PODEMOS REDECLARAR CON CONST
console.log(animal)

const vehicles = [] // declaramos y asignamos
vehicles.push('nissan') // METODOS DE ARRAY != REASIGNAR
console.log(vehicles)

vehicles.pop() // METODOS DE ARRAY != REASIGNAR
console.log(vehicles)
