export {Button as default}

class Button{
    constructor(strURL, {x, y}, {width, height}) {
        this.position = {
            x:x,
            y:y
        }
        this.size = {
            width:width,
            height:height
        }

        this.image = new Image()
        this.image.src = strURL
    }

    draw(context){
        context.drawImage(this.image,this.position.x,this.position.y,this.size.width, this.size.height)
    }
}