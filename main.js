'use strict'
addEventListener('load', main)

function main(){
    const canvas = document.querySelector("canvas"),
        context = canvas.getContext("2d"),
        background = new Image()

    background.src = "./assets/GUI/menu/bg.png"
    context.drawImage(background,0,0,300,150)
}