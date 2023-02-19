export {Button as default}

class Button{
    constructor(strURL) {
        this.position = {
            x:0,
            y:0
        }
        this.size = {
            width:0,
            height:0
        }

        this.image = new Image()
        this.image.src = strURL
    }
}