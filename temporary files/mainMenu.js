import Button from "../classes/Button";

const canvas = document.querySelector("canvas"),
    context = canvas.getContext("2d"),
    background = new Image(),
    btnPlay = new Button("./assets/GUI/btn/play.png",{x:130,y:70}, {width:40,height:40}),
    btnOptions = new Button("./assets/GUI/btn/settings.png", {x:10,y:125}, {width:20, height:20}),
    btnSelectLevel = new Button("./assets/GUI/btn/menu.png", {x:270,y:125}, {width:20, height:20}),
    btnVolume = new Button("./assets/GUI/btn/sound.png",{x:10,y:5}, {width:20, height:20}),
    btnAbout = new Button("./assets/GUI/btn/about.png",{x:270,y:5}, {width:20, height:20}),
    title = new Image()


background.src = "./assets/GUI/menu/bg.png"
title.src = "./assets/GUI/title.png"
context.drawImage(background,0,0,300,150)
context.drawImage(title,50,15,200,100)
btnPlay.draw(context)
btnOptions.draw(context)
btnSelectLevel.draw(context)
btnVolume.draw(context)
btnAbout.draw(context)