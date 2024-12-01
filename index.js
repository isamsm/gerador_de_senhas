let passDiv = document.getElementById('pass_div')
let password = document.getElementById('password')
let personalizedDiv = document.getElementById('personalized_pass')
let personalizedBtn = document.getElementById('personalized_btn')
let randomBtn = document.getElementById('random_btn')

function generatePersonalizedDiv(el) {
    let form = document.getElementById("personalized_form")
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        generatePersonalized()
    })

    passDiv.style.display = "none"
    personalizedDiv.style.display = "flex"
    personalizedDiv.classList.add('transition')
    randomBtn.classList.remove('selected_btn')
    el.classList.add('selected_btn')
    password.innerHTML = ''
}

let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let size

function generatePersonalized() {
    let pass = ''
    let word = document.getElementById('word').value
    size = document.getElementById('size').value

    size = Math.floor(Math.random() * (20 - 10) + 10)
    for(let i = 0; i <= size; i++) {
        let randomIndex = Math.floor(Math.random() * (chars.length))
        let randomChars = chars[randomIndex] 
        pass += randomChars
    }

    let sizePass = Math.floor(Math.random() * (pass.length))

    let personalizedPassword = pass.slice(0, sizePass) + word + pass.slice(sizePass)

    passDiv.style.display = "flex"
    password.innerHTML = personalizedPassword
}

function generateRandom(el) {
    let randomPassword = ''

    //Gerar número aleatorio entre 10 e 20
    size = Math.floor(Math.random() * (20 - 10) + 10)
    for(let i = 0; i <= size; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length)
        let randomChars = chars[randomIndex]
        randomPassword += randomChars
    }

    personalizedDiv.style.display = "none"
    passDiv.style.display = "flex"
    personalizedDiv.classList.remove('transition')
    personalizedBtn.classList.remove('selected_btn')
    el.classList.add('selected_btn')
    password.innerHTML = randomPassword
}


function copyPass() {
    let alert = document.getElementById('alert')
    let passVal = password.innerHTML
    navigator.clipboard.writeText(passVal)
    alert.textContent = "Copiado para a área de transferência!"
    alert.style.opacity = "1"
    alert.classList.remove('transition_hide')

    setTimeout(() => {
        alert.classList.add('transition_hide')
        alert.addEventListener('animationend', () => {
            alert.textContent = ""
            alert.style.opacity = "0"
        }, { once: true })
    }, 2000)
}