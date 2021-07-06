
//navbar//
const navbar = document.querySelector('nav')
window.onscroll = () => {
    if (window.scrollY > 300) {
        navbar.classList.add('transparent')
        navbar.classList.remove('colored')
        document.querySelector(".gold").style.display = "none"
        document.querySelector("#magic").classList.add('magictime', 'twisterInDown')

    } else {
        navbar.classList.remove('transparent')
        navbar.classList.add('colored')
        document.querySelector(".gold").style.display = "block"
        document.querySelector("#magic").classList.remove('magictime', 'twisterInDown')

    }
}

//cards//
//function animateVanishOn(x) {
// x.querySelector(".vanishTrigger").classList.add("magictime", "vanishIn")
//}
//function animateVanishOff(x) {
// x.querySelector(".vanishTrigger").classList.remove("magictime", "vanishIn")
//}
window.onload = function () {
    let mail = document.getElementById("mail")
    let addres = document.getElementById("addres")
    let name = document.getElementById("name")
    let subject = document.getElementById("subject")
    let phone = document.getElementById("phone")
    let message = document.getElementById("message")
    mail.addEventListener("blur", inputBlur)
    mail.addEventListener("focus", cleaner)
    addres.addEventListener("blur", inputBlur)
    addres.addEventListener("focus", cleaner)
    name.addEventListener("blur", inputBlurName)
    name.addEventListener("focus", cleaner)
    subject.addEventListener("blur", inputBlur)
    subject.addEventListener("focus", cleaner)
    phone.addEventListener("blur", inputBlurNumbrs)
    phone.addEventListener("focus", cleaner)
    message.addEventListener("blur", inputBlur)
    message.addEventListener("focus", cleaner)


}

const inputBlur = function (event) {
    // Chequeamos que no esté vacío
    if (this.value == "") {
        this.style.color = "red"
        this.value = "You must provide data"
    }
    // Si es un input email, chequeamos que que sea un mail valido
    else if (this.getAttribute("type") == "email" && !esEmail(this.value)) {
        this.style.color = "red"
        this.value = "Wrong email"
    }
}
const inputBlurNumbrs = function (event) {
    if (this.value == "") {
        this.style.color = "red"
        this.value = "You must provide data"
    } else if (!validarNumber(this.value)) {
        this.style.color = "red"
        this.value = "You must put numbers"

    }
}
const inputBlurName = function (event) {
    if (this.value == "") {
        this.style.color = "red"
        this.value = "You must provide data"
    }
    else if (!validarString(this.value)) {
        this.style.color = "red"
        this.value = "You must put letters"
    }
}


const cleaner = function (event) {
    this.value = ""
    this.style.color = ""
    document.getElementById("alert").innerHTML = ""

}

const esEmail = function (value) {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)
}


function validarNumber(cadenaAnalizar) {
    for (var i = 0; i < cadenaAnalizar.length; i++) {
        var caracter = cadenaAnalizar.charCodeAt(i);
        if (caracter < 48 || caracter > 57) {
            return false;
        }
    }
    return true
}
function validarString(cadenaAnalizar) {
    for (var i = 0; i < cadenaAnalizar.length; i++) {
        var caracter = cadenaAnalizar.charCodeAt(i);
        if ((caracter < 65 || caracter > 90) && (caracter < 97 || caracter > 122)) {
            return false;
        }

    }
    return true
}
