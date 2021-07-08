
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
// /////text carrousel///
document.querySelector("#textSlide1").classList.add('magictime', 'tinLeftIn')
document.querySelector("#textSlide1_2").classList.add('magictime', 'tinRightIn')
document.querySelector("#textSlide2").classList.add('magictime', 'tinLeftIn')
document.querySelector("#textSlide2_2").classList.add('magictime', 'tinRightIn')
document.querySelector("#textSlide3").classList.add('magictime', 'tinRightIn')
document.querySelector("#textSlide4").classList.add('magictime', 'tinLeftIn')
document.querySelector("#textSlide4_2").classList.add('magictime', 'tinRightIn')
document.querySelector("#textSlide5").classList.add('magictime', 'tinLeftIn')
document.querySelector("#textSlide5_2").classList.add('magictime', 'tinRightIn')

/////////////////////////////
window.onload = function () {
    let mail = document.getElementById("mail")
    let addres = document.getElementById("addres")
    let addresNumber = document.getElementById("addresNumber")
    let name = document.getElementById("name")
    let subject = document.getElementById("subject")
    let phone = document.getElementById("phone")
    let message = document.getElementById("message")
    mail.addEventListener("change", checkMail)
    mail.addEventListener("focus", cleaner)
    addres.addEventListener("change", inputBlur)
    addres.addEventListener("focus", cleaner)
    addresNumber.addEventListener("change", inputBlurNumbrs)
    addresNumber.addEventListener("focus", cleaner)
    name.addEventListener("change", inputBlurName)
    name.addEventListener("focus", cleaner)
    subject.addEventListener("change", inputBlur)
    subject.addEventListener("focus", cleaner)
    phone.addEventListener("change", inputBlurNumbrs)
    phone.addEventListener("focus", cleaner)
    message.addEventListener("change", inputBlur)
    message.addEventListener("focus", cleaner)
    let form = document.getElementById("contact-form")
    let btnSend = document.getElementById("formSend")
    form.addEventListener('submit', sendContact)
}
///////validation form///////////
const esEmail = function (value) {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)
}
const inputBlur = function (event) {
    if (this.value == "" || this.value == " ") {
        this.style.color = "red"
        this.value = "You must provide data"
    }
    else if (!validarString(this.value)) {
        this.style.color = "red"
        this.p = "You must put valid data"
    }

}
function checkMail(event) {
    if (this.getAttribute("type") == "email" && !esEmail(this.value)) {
        this.style.color = "red"
        this.value = "Wrong email"
    }
}

const inputBlurNumbrs = function (event) {
    if (this.value == "" || this.value == " ") {
        this.style.color = "red"
        this.value = "You must provide data"
    }
    else if (!validarNumber(this.value)) {
        this.style.color = "red"
        this.value = "You must put numbers"

    }
}
const inputBlurName = function (event) {
    if (this.value == "" || this.value == " ") {
        this.style.color = "red"
        this.value = "You must provide data"
    }
    else if (!validarString(this.value)) {
        this.style.color = "red"
        this.value = "You must put letters"
    }
}



const cleaner = function (event) {
    if (this.value == "You must provide data" || this.value == "You must put letters" || this.value == "You must put numbers" || this.value == "Wrong email" || this.value == "You must put valid data" || !this.value) {
        this.value = ""
        this.style.color = ""
        document.getElementById("alert").innerHTML = ""

    }
}




function validarNumber(cadenaAnalizar) {
    for (var i = 0; i < cadenaAnalizar.length; i++) {
        var caracter = cadenaAnalizar.charCodeAt(i);
        if ((caracter != 32) && (caracter < 48 || caracter > 57)) {
            return false;
        }
    }
    return true
}

function validarString(cadenaAnalizar) {
    for (var i = 0; i < cadenaAnalizar.length; i++) {
        var caracter = cadenaAnalizar.charCodeAt(i);
        if ((caracter != 32) && (caracter < 65 || caracter > 90) && (caracter < 97 || caracter > 122)) {
            return false;
        }

    }
    return true
}

const sendContact = function (event) {

    if (!checkForm()) {
        // si no pasa las validaciones, entonces no lo dejamos hacer el submit
        // recordar que el preventDefault de un evento previene que el evento se siga ejecutando
        // por ejemplo en este caso que el botón haría un submit del form, si nosotros
        // le hacemos preventDefault, entonces no hace el submit (es decir, no envía el form)
        console.log('prevengo el submit porque hubo errores')
        event.preventDefault()
    }

}

const checkForm = function () {
    let mail = document.getElementById("mail")
    let addres = document.getElementById("addres")
    let name = document.getElementById("name")
    let subject = document.getElementById("subject")
    let phone = document.getElementById("phone")
    let message = document.getElementById("message")
    if (!esEmail(email.value)) {
        return false
    }
    else if (addres.value === "" || addres.value === " " || !validarString(address.value)) {
        return false
    }
    else if (name.value === "" || name.value === " " || !validarString(namE.value)) {
        return false
    }
    else if (subject.value === "" || subjecet.value === " " || !validarString(subjecT.value)) {
        return false
    }
    else if (phone.value === "" || phone.value === " " || !validarNumber(phonE.value)) {
        return false
    }
    else if (message.value === "" || message === " " || !validarString(messagE.value)) {
        return false
    }

    return true

}





