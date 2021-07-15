
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

    mail.addEventListener("blur", checkMail)
    mail.addEventListener("focus", cleaner)
    addres.addEventListener("blur", inputBlur)
    addres.addEventListener("focus", cleaner)
    addresNumber.addEventListener("blur", inputBlurNumbrs)
    addresNumber.addEventListener("focus", cleaner)
    name.addEventListener("blur", inputBlurName)
    name.addEventListener("focus", cleaner)
    subject.addEventListener("blur", inputBlur)
    subject.addEventListener("focus", cleaner)
    phone.addEventListener("blur", inputBlurNumbrs)
    phone.addEventListener("focus", cleaner)
    message.addEventListener("blur", inputBlur)
    message.addEventListener("focus", cleaner)
    let form = document.getElementById("contact-form")
    let btnSend = document.getElementById("formSend")
    form.addEventListener('submit', sendContact)
}
///////validation form///////////
const esEmail = function (value) {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)
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


const inputBlur = function (event) {
    if (this.value == "" || this.value == " ") {
        document.getElementById("alert").innerHTML = "You must provide data"
    }
    else if (!validarString(this.value)) {
        document.getElementById("alert").innerHTML = "You must put valid data"
    }

}
function checkMail(event) {
    if (this.value == "" || this.value == " ") {
        document.getElementById("alert").innerHTML = "You must provide data"
    }
    else if (this.getAttribute("type") == "email" && !esEmail(this.value)) {
        document.getElementById("alert").innerHTML = "Wrong email"
    }
}

const inputBlurNumbrs = function (event) {
    if (this.value == "" || this.value == " ") {
        document.getElementById("alert").innerHTML = "You must provide data"
    }
    else if (!validarNumber(this.value)) {
        document.getElementById("alert").innerHTML = "You must put numbers"

    }
}
const inputBlurName = function (event) {
    if (this.value == "" || this.value == " ") {
        document.getElementById("alert").innerHTML = "You must provide data"
    }
    else if (!validarString(this.value)) {
        document.getElementById("alert").innerHTML = "You must put letters"
    }
}



const cleaner = function (event) {
    let alert = document.getElementById("alert")
    if (alert.value != "") {

        document.getElementById("alert").innerHTML = ""

    }
}





/////////////// validar form ///////////////
const sendContact = function (event) {

    if (!checkForm()) {
        console.log('prevengo el submit porque hubo errores')
        event.preventDefault()
        document.getElementById("alert").innerHTML = "Something went wrong"
    }

}

const checkForm = function () {
    let mail = document.getElementById("mail")
    console.log(mail.value)
    let addres = document.getElementById("addres")
    let addresNumber = document.getElementById("addresNumber")
    console.log(addres.value)
    let name = document.getElementById("name")
    console.log(name.value)
    let subject = document.getElementById("subject")
    console.log(subject.value)
    let phone = document.getElementById("phone")
    console.log(phone.value)
    let message = document.getElementById("message")
    console.log(message.value)

    if (!esEmail(mail.value)) {
        return false
    } else if (addres.value === "" || addres.value === " " || !validarString(addres.value)) {
        return false
    } else if (addresNumber.value === "" || addresNumber.value === " " || !validarNumber(addresNumber.value)) {
        return false
    } else if (name.value === "" || name.value === " " || !validarString(name.value)) {
        return false
    } else if (subject.value === "" || subject.value === " " || !validarString(subject.value)) {
        return false
    } else if (phone.value === "" || phone.value === " " || !validarNumber(phone.value)) {
        return false
    } else if (message.value === "" || message === " " || !validarString(message.value)) {
        return false
    }

    return true

}


//////close video modal////////////

window.onclick = function (event) {
    let modalOut = document.getElementById("exampleModal")
    if (event.target === modalOut) {
        let video = document.getElementById("video")
        video.src = " "
    }
    video.src = "https://www.youtube.com/embed/pTS5wevgGKs"
}

