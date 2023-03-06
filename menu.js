    const canvas = document.querySelector("canvas")
    const menu = document.getElementById("menu")
    const selectLevel = document.getElementById("selectLevel")
    const credit = document.getElementById("credits")
    canvas.style.display = "none"
    selectLevel.style.display = "none"
    credit.style.display = "none"

    function play(){
        menu.style.display = "none"
        canvas.style.display = "block"
    }
    function level(){
        menu.style.display = "none"
        selectLevel.style.display = "block"
    }
    function credits(){
        menu.style.display = "none"
        credit.style.display = "block"
    }
    function backSL(){
        selectLevel.style.display = "none"
        menu.style.display = "block"
    }
    function backC(){
        credit.style.display = "none"
        menu.style.display = "block"
    }

