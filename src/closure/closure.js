function greetings() {
    let username = 'Oscar'

    function displayUsername() {
        return `Hello ${username}`
    }

    return displayUsername
}

const g = greetings()
console.log(g) // retorna la funcion
console.log(g()) // retorna el resultado de ejecutar la funcion