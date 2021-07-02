
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
