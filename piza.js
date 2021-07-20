
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
    for (let i = 0; i < cadenaAnalizar.length; i++) {
        let caracter = cadenaAnalizar.charCodeAt(i);
        if ((caracter != 32) && (caracter < 48 || caracter > 57)) {
            return false;
        }
    }
    return true
}

function validarString(cadenaAnalizar) {
    for (let i = 0; i < cadenaAnalizar.length; i++) {
        let caracter = cadenaAnalizar.charCodeAt(i);
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

// ////////cart////////////
window.onload = function () {

    let cartItems = {
        picture: "",
        productName: "",
        quantity: "",
        price: "",
        closePicture: "https://cdn0.iconfinder.com/data/icons/navigation-set-arrows-part-one/32/Close-128.png"
    }

    let cart = document.getElementById('cart')
    let champButton = document.getElementById("champigniones")
    let hambButton = document.getElementById("hamburguesa")
    let aceitunasNegrasButton = document.getElementById("aceitunasNegras")
    let papas = document.getElementById("papas")
    let sandwich = document.getElementById("sandwich")
    let muza = document.getElementById("muza")

    let counter = 0;
    let cartIcon = document.getElementById('cartIcon')
    let cartChild = document.getElementById('cartChild')
    let totalPrice = document.getElementById('totalPrice')
    let checkCart = document.getElementById("checkCart")
    checkCart.addEventListener("click", addToForm)
    champButton.onclick = addToCart
    hambButton.onclick = addToCart
    aceitunasNegrasButton.onclick = addToCart
    papas.onclick = addToCart
    sandwich.onclick = addToCart
    muza.onclick = addToCart

    function addToCart() {

        cartItems.picture = this.parentNode.parentNode.children[0].childNodes[1].getAttribute('src')
        cartItems.productName = this.parentNode.children[0].innerHTML
        cartItems.quantity = this.parentNode.children[4].value
        cartItems.price = parseInt(this.parentNode.children[3].innerHTML)


        let div = document.createElement('div')
        div.classList.add("cartElement")
        let img = document.createElement('img')
        img.classList.add("productPicture")
        img.setAttribute("src", cartItems.picture)
        let h4 = document.createElement('h4')
        h4.innerHTML = cartItems.productName
        let span1 = document.createElement('span')
        span1.innerHTML = cartItems.quantity + " Item"
        let div2 = document.createElement('div')
        div2.classList.add("price")
        div2.innerHTML = cartItems.price * cartItems.quantity + " $"
        let img2 = document.createElement('img')
        img2.classList.add("close")
        img2.setAttribute("src", cartItems.closePicture)

        //console.log(div2);

        cart.insertBefore(div, cartChild)
        div.appendChild(img)
        div.appendChild(h4)
        div.appendChild(span1)
        div.appendChild(div2)
        div.appendChild(img2)


        let close = document.getElementsByClassName('close')
        for (i = 0; i < close.length; i++) {
            close[i].onclick = function () {
                let parent = this.parentNode.parentNode
                let child = this.parentNode
                parent.removeChild(child)
                counter--
                circle.innerHTML = counter
                totalSum()
            }
        }

        let circle = document.getElementById('circle')
        counter++
        circle.innerHTML = counter

        function totalSum() {
            let summ = 0
            let elementsPrice = document.getElementsByClassName('price')
            for (i = 0; i < elementsPrice.length; i++) {
                summ += parseInt(elementsPrice[i].innerHTML)
                totalPrice.innerHTML = summ + " $"
            }
            if (elementsPrice.length == 0) {
                summ = 0
                totalPrice.innerHTML = summ + " $"
            }
        }
        totalSum()
    }



}


const addToForm = function (event) {
    let lista = this.parentNode.getElementsByClassName("cartElement")
    // console.log(lista)

    var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
    var theUrl = "http://localhost:3000";
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            let toast = document.querySelector(".toast")
           toast.show()
            console.log(xmlhttp.response);
        }
    }
    xmlhttp.open("POST", theUrl);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.withCredentials = false;
    xmlhttp.setRequestHeader('Access-Control-Allow-Origin', '*');
    let payload = []


    for (element of lista) {
        // console.log(element)
        let name = element.attributes.class.ownerElement.childNodes[1].childNodes[0].parentElement.firstChild.parentElement.innerHTML
        let items = element.attributes.class.ownerElement.childNodes[1].childNodes[0].parentElement.firstChild.parentElement.nextElementSibling.lastChild.data
        let price = element.attributes.class.ownerElement.childNodes[1].childNodes[0].parentElement.firstChild.parentElement.nextElementSibling.nextElementSibling.innerHTML

        payload.push({ name, items, price })
    }

    xmlhttp.send(JSON.stringify(payload));


    // for (element of lista) {
    //     console.log(element)
    //     let name = element.attributes.class.ownerElement.childNodes[1].childNodes[0].parentElement.firstChild.parentElement.innerHTML
    //     let items = element.attributes.class.ownerElement.childNodes[1].childNodes[0].parentElement.firstChild.parentElement.nextElementSibling.lastChild.data
    //     let price = element.attributes.class.ownerElement.childNodes[1].childNodes[0].parentElement.firstChild.parentElement.nextElementSibling.nextElementSibling.innerHTML

    //     let input = document.createElement("input")

    //     input.setAttribute("type", "hidden")

    //     input.setAttribute("name", "Product")

    //     input.setAttribute("value", items+"/"+ name+"/"+price)
    //     console.log(name, items, price)

    //     //append to form element that you want .
    //     document.getElementById("contact-form").appendChild(input)
    // }

}