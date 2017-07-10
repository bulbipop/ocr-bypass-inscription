// ==UserScript==
// @name         ocr-bypass-inscription
// @namespace    https://github.com/bulbipop/ocr-bypass-inscription
// @version      0.1
// @match        https://openclassrooms.com/courses/*
// @run-at       document-idle
// ==/UserScript==


function main() {
    try {
        document.querySelector('.fancybox-overlay').remove()
        document.querySelector('.fancybox-opened').remove()
        document.body.scroll = 'yes'
        document.documentElement.style.overflow = 'scroll'
        document.body.style.overflow = 'scroll'
    } catch(ev) {
        console.log(ev)
    }

}

setTimeout(main, 2000)
