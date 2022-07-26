let sliderImg = document.querySelector("#slider ul li img")
counter = 1
let next = document.querySelector("#next")
let middle = document.querySelector("#middle")
let prev = document.querySelector("#prev")
let h5 = document.querySelector("#text-area h5")
let h1 = document.querySelector("#text-area h1")
let p = document.querySelector("#text-area p")
let a = document.querySelector("#text-area a")
let ls = [h5, h1, p, a]
counterOpacity = 0


next.onclick = function () {
    counterOpacity = 3
    setTimeout(function () { nextSlider(); }, 300)
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


prev.onclick = function () {
    counterOpacity = 1
    setTimeout(function () { prevSlider(); }, 300)
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


middle.onclick = function () {
    counterOpacity = 2
    setTimeout(function () { middleSlider(); }, 300)
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

function nextSlider() {
    if (counterOpacity == 3) {
        sliderImg.style.opacity = "0"
        setTimeout(function () {
            sliderImg.style.opacity = "1"
            sliderImg.src = "images/slider-3.webp";
        }, 200)
    }
    prev.style.background = "rgb(255, 255, 255)";
    next.style.background = "rgb(247, 175, 35)";
    middle.style.background = "rgb(255, 255, 255)";
}
function prevSlider() {
    if (counterOpacity == 1) {
        sliderImg.style.opacity = "0"
        setTimeout(function () {
            sliderImg.style.opacity = "1"
            sliderImg.src = "images/slider-1.webp";
        }, 200)
    }
    prev.style.background = "rgb(247, 175, 35)";
    next.style.background = "rgb(255, 255, 255)";
    middle.style.background = "rgb(255, 255, 255)";
}
function middleSlider() {
    if (counterOpacity == 2) {
        sliderImg.style.opacity = "0"
        setTimeout(function () {
            sliderImg.style.opacity = "1"
            sliderImg.src = "images/slider-2.webp";
        }, 200)
    }
    prev.style.background = "rgb(255, 255, 255)";
    next.style.background = "rgb(255, 255, 255)";
    middle.style.background = "rgb(247, 175, 35)";
}



