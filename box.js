class Box {
    //properties
    constructor(x, y, width, height) {

        var options = {
            restitution: 0.8,
            density: 1.0,
            friction: 0.4
        }

        this.body = Bodies.rectangle(x, y, width, height, options)
        this.width = width;
        this.height = height;
        World.add(myWorld, this.body)

        console.log(this.body)
    }

    display() {
        push()
        translate(this.body.position.x, this.body.position.y)
        rotate(this.body.angle)
        rectMode(CENTER)
        rect(0, 0, this.width, this.height)
        pop()
    }

}