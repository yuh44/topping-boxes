class Ground {
    //properties
    constructor(x, y, width, height) {

        var options = {
            isStatic: true,
            friction: 0.4
        }

        this.body = Bodies.rectangle(x, y, width, height, options)
        this.width = width;
        this.height = height;
        World.add(myWorld, this.body)

        console.log(this.body)
    }

    display() {

        rectMode(CENTER)
        rect(this.body.position.x, this.body.position.y, this.width, this.height)
    }

}