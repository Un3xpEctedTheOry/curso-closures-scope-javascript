const myGlobal = 0

function myFunnction() {
    const myNumber = 1
    console.log({ myGlobal })

    function parent() { // funcion interna (creando closure...)
        const inner = 2
        console.log({ myGlobal, myNumber })

        function child() {
            console.log({ myGlobal, myNumber, inner })
        }

        return child()
    }

    return parent()
}

myFunnction()