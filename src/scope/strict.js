// pi = 3.1416 // asignamos sin declarar, js interpreta declaracion y asignación
// console.log(pi) // muestra en consola pi

'use strict' // le decimos a js que no use hoisting 
pi = 3.1416
console.log(pi) // NO PODEMOS MOSTRRAR PI YA QUE NO FUE DECLARADO

function myFunction() {
    'use strict' // tambien aplica para funciones
    return pi = 3.1416
}

console.log(myFunction()) // la funcion no retorna pi ya que no fue declarada