// La primera lógica no funcionó, porque no calcula la suma acumulada
// de saveCoins, ya que siempre se inicializa en 0

// function moneyBox(coins){
//     let saveCoins = 0
//     saveCoins += coins
//     console.log(`Money Box: $${saveCoins}`)
// }

// moneyBox(5)
// moneyBox(5)

// El problema de la lógica anterior puede solucionarse usando closures:

function moneyBox() {
    let saveCoins = 0

    function countCoins(coins) {
        saveCoins += coins
        console.log(`Money Box: $${saveCoins}`)
    }

    return countCoins
}

const myMoneyBox = moneyBox()
myMoneyBox(5)
myMoneyBox(5)
myMoneyBox(15)

const moneyBoxAna = moneyBox()
moneyBoxAna(5)
moneyBoxAna(5)
moneyBoxAna(15)