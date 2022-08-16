// console.log(nameOfDog) // undefined
// var nameOfDog = 'Elmo'
// console.log(nameOfDog) // Elmo

nameOfDog() // El mejor perrito es undefined

function nameOfDog(){
    console.log(`El mejor perrito es ${elmo}`)
}

var elmo = 'elmito'

// El hoisting afecta a las variables y a las funciones de diferente manera, 
// las funciones llamadas antes de su declaracion son ejecutadas, mientras 
// que las variables se declaran e inicializan con un valor undefined