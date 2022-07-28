let sliderImg = document.querySelector("#slider ul li img")
let next = document.querySelector("#next")
let middle = document.querySelector("#middle")
let prev = document.querySelector("#prev")
let play = document.querySelector("#play")
let pause = document.querySelector("#pause")
let h5 = document.querySelector("#text-area h5")
let h1 = document.querySelector("#text-area h1")
let p = document.querySelector("#text-area p")
let a = document.querySelector("#text-area a")
let categories = document.querySelector("#categories")
let catMenu = document.querySelector("#cat-menu")
let arrowUp = document.querySelector("#arrow-up")
let currency = document.querySelector("#currency")
let usd = document.querySelector(".header-bottom span")
let ls = [h5, h1, p, a]
let counter = 1
let counterOpacity = 1
let counterCategories = 0
let time = 0


next.onclick = function () {
    time=1
    pauseStop()
    setTimeout(function () { nextSlider(); }, 300)
}


prev.onclick = function () {
    time=1
    pauseStop()
    setTimeout(function () { prevSlider(); }, 300)
}


middle.onclick = function () {
    time=1
    pauseStop()
    setTimeout(function () { middleSlider(); }, 300)
}


play.onclick = function () {
    time=0
    playStop()

}
pause.onclick = function () {
    time=1
    pauseStop()
}


usd.onclick=function (){
    currency.classList.toggle("activeCurrency")
}


categories.onclick = function () {
    if (counterCategories == 0) {
        catMenuOpener()
    }
    else {
        catMenuCloser()
    }
}




function nextSlider() {
    if (counterOpacity != 3) {
        sliderImg.style.opacity = "0"
        setTimeout(function () {
            sliderImg.style.opacity = "1"
            sliderImg.src = "images/slider-3.webp";
        }, 200)
    }
    counterOpacity = 3
    prev.style.background = "rgb(255, 255, 255)";
    next.style.background = "rgb(247, 175, 35)";
    middle.style.background = "rgb(255, 255, 255)";
    if (counter != 3) {
        for (const i of ls) {
            i.classList.add("delete")
            i.classList.remove("aniLeft", "aniTop", "aniRight", "click")

            setTimeout(function () {
                i.classList.add("aniRight")
            }, 500)

            setTimeout(function () {
                i.classList.add("click")
                i.classList.remove("aniLeft", "aniTop", "aniRight", "delete")
            }, 700)
        }
    }
    counter = 3
}
function prevSlider() {
    if (counterOpacity != 1) {
        sliderImg.style.opacity = "0"
        setTimeout(function () {
            sliderImg.style.opacity = "1"
            sliderImg.src = "images/slider-1.webp";
        }, 200)
    }
    counterOpacity = 1
    prev.style.background = "rgb(247, 175, 35)";
    next.style.background = "rgb(255, 255, 255)";
    middle.style.background = "rgb(255, 255, 255)";
    if (counter != 1) {
        for (const i of ls) {
            i.classList.add("delete")
            i.classList.remove("aniLeft", "aniTop", "aniRight", "click")

            setTimeout(function () {
                i.classList.add("aniLeft")
            }, 500)

            setTimeout(function () {
                i.classList.add("click")
                i.classList.remove("aniLeft", "aniTop", "aniRight", "delete")
            }, 700)
        }
    }
    counter = 1
}
function middleSlider() {
    if (counterOpacity != 2) {
        sliderImg.style.opacity = "0"
        setTimeout(function () {
            sliderImg.style.opacity = "1"
            sliderImg.src = "images/slider-2.webp";
        }, 200)
    }
    counterOpacity = 2
    prev.style.background = "rgb(255, 255, 255)";
    next.style.background = "rgb(255, 255, 255)";
    middle.style.background = "rgb(247, 175, 35)";
    if (counter != 2) {
        for (const i of ls) {
            i.classList.add("delete")
            i.classList.remove("aniLeft", "aniTop", "aniRight", "click")

            setTimeout(function () {
                i.classList.add("aniTop")
            }, 500)

            setTimeout(function () {
                i.classList.add("click")
                i.classList.remove("aniLeft", "aniTop", "aniRight", "delete")
            }, 700)

        }
    }
    counter = 2
}
function catMenuOpener() {
    catMenu.style.opacity = "1"
    catMenu.style.visibility = "visible"
    catMenu.style.top = "92px"
    catMenu.style.height = "427px"
    arrowUp.style.opacity = "1"
    arrowUp.style.visibility = "visible"
    counterCategories = 1
}
function catMenuCloser() {
    catMenu.style.opacity = "0"
    catMenu.style.visibility = "hidden"
    catMenu.style.top = "80px"
    catMenu.style.height = "0px"
    arrowUp.style.opacity = "0"
    arrowUp.style.visibility = "hidden"
    counterCategories = 0
}
function pauseStop() {
    pause.style.visibility = "hidden"
    pause.style.opacity = "0"
    play.style.visibility = "visible"
    play.style.opacity = "1"
}
function playStop() {
    pause.style.visibility = "visible"
    pause.style.opacity = "1"
    play.style.visibility = "hidden"
    play.style.opacity = "0"
}
function timeInt(){
    for (let i = 0; i < array.length; i++) {
        
    }
    settimeout(middleSlider(),5000)
    settimeout(nextSlider(),5000)
    settimeout(prevSlider(),5000)

}


