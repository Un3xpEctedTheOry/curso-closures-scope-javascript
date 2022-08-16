// block scope
function fruits() {
    if (true) {
        var fruit1 = 'apple' // function scope
        let fruit2 = 'kiwi' // block scope
        const fruit3 = 'banana' // block scope
    }
    console.log(fruit1) // accedemos
    console.log(fruit2) // no accedemos
    console.log(fruit3) // no accedemos
}

fruits()

// para acceder a fruit2 y fruit3 tenemos que llamarlas dentro del if:
// function fruits() {
//     if (true) {
//         var fruit1 = 'apple' // function scope
//         let fruit2 = 'kiwi' // block scope
//         const fruit3 = 'banana' // block scope

//         console.log(fruit2) // accedemos
//         console.log(fruit3) // accedemos
//     }
//     console.log(fruit1) // accedemos
// }

// fruits()