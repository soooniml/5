function Plus(){
    var numberOne = document.querySelector('.numberOne').value
    var numberTwo = document.querySelector('.numberTwo').value
    const result = document.querySelector('.result')

    numberOne = parseInt(numberOne)

    numberTwo = parseInt(numberTwo)

    var res = numberOne + numberTwo

    result.innerHTML = res


    // result.innerHTML = parseInt(document.querySelector('.numberOne').value) + parseInt(document.querySelector('.numberTwo').value)
}

function Minus(){
    var numberOne = document.querySelector('.numberOne').value
    var numberTwo = document.querySelector('.numberTwo').value
    const result = document.querySelector('.result')

    numberOne = parseInt(numberOne)

    numberTwo = parseInt(numberTwo)

    var res = numberOne - numberTwo

    result.innerHTML = res

}


function Multi(){
    var numberOne = document.querySelector('.numberOne').value
    var numberTwo = document.querySelector('.numberTwo').value
    const result = document.querySelector('.result')

    numberOne = parseInt(numberOne)

    numberTwo = parseInt(numberTwo)

    var res = numberOne * numberTwo

    result.innerHTML = res
}

function Del(){
    var numberOne = document.querySelector('.numberOne').value
    var numberTwo = document.querySelector('.numberTwo').value
    const result = document.querySelector('.result')

    numberOne = parseInt(numberOne)

    numberTwo = parseInt(numberTwo)

    var res = numberOne / numberTwo

    result.innerHTML = res

}

function Clear(){
    var numberOne = document.querySelector('.numberOne')
    var numberTwo = document.querySelector('.numberTwo')

    numberOne.value = '  '
    numberTwo.value = '  '
    result.innerHTML = '  '
}