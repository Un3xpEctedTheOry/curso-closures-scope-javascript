// function scope
function greeting() {
    let userName = 'anita' // declaracion y asignacion local
    console.log(userName)

    if (userName === 'anita') {
        console.log(`hello ${userName}!`)
    }
}

greeting()
console.log(userName) // no podemos acceder a la variable local