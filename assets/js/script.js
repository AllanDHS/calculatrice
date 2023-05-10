// Déclaration variable

let nb1 = document.getElementById('nb1')
let ope = document.getElementById('ope')
let nb2 = document.getElementById('nb2')
let resultat = document.getElementById('resultat')
let chiffre = document.getElementById('chiffre')

let one = document.getElementById('1')
let two = document.getElementById('2')
let three = document.getElementById('3')
let four = document.getElementById('4')
let five = document.getElementById('5')
let six = document.getElementById('6')
let seven = document.getElementById('7')
let eight = document.getElementById('8')
let nine = document.getElementById('9')
let zero = document.getElementById('0')

let ac = document.getElementById('ac')
let division = document.getElementById('/')
let multiplication = document.getElementById('*')
let soustraction = document.getElementById('-')
let addition = document.getElementById('+')
let display = nb1
let equal = document.getElementById('equal')
let point = document.getElementById(',')
let virgule = 0




one.addEventListener('click', function () {
    display.innerText += one.innerText
})

two.addEventListener('click', function () {
    display.innerText += two.innerText
})

three.addEventListener('click', function () {
    display.innerText += three.innerText
})
four.addEventListener('click', function () {
    display.innerText += four.innerText
})
five.addEventListener('click', function () {
    display.innerText += five.innerText
})
six.addEventListener('click', function () {
    display.innerText += six.innerText
})
seven.addEventListener('click', function () {
    display.innerText += seven.innerText
})
eight.addEventListener('click', function () {
    display.innerText += eight.innerText
})
nine.addEventListener('click', function () {
    display.innerText += nine.innerText
})
zero.addEventListener('click', function () {
    display.innerText += zero.innerText
})

division.addEventListener('click', function () {
    ope.innerText = division.innerText
    display = nb2
    virgule = 0
})

multiplication.addEventListener('click', function () {
    ope.innerText = multiplication.innerText
    display = nb2
    virgule = 0
})

soustraction.addEventListener('click', function () {
    ope.innerText = soustraction.innerText
    display = nb2
    virgule = 0
})

addition.addEventListener('click', function () {
    ope.innerText = addition.innerText
    display = nb2
    virgule = 0
    
})


point.addEventListener('click', function () {

    if (virgule == 0) {
        display.innerText += point.innerText
        virgule = 1
    }
})



ac.addEventListener('click', function () {
    nb1.innerText = ""
    nb2.innerText = ""
    ope.innerText = ""
    resultat.innerText = ""
    display = nb1
    virgule = 0 
})



equal.addEventListener('click', function () {
    let result = 0
    switch (ope.innerText) {
        case '+':
            result = parseFloat(nb1.innerText) + parseFloat(nb2.innerText)
            break;
        case '-':
            result = parseFloat(nb1.innerText) - parseFloat(nb2.innerText)
            break;
        case '*':
            result = parseFloat(nb1.innerText) * parseFloat(nb2.innerText)
            break;
        case '/':
            result = parseFloat(nb1.innerText) / parseFloat(nb2.innerText)
            break;
    }
    resultat.innerText = result.toFixed(5)
})




