class Paddle {
    constructor(game) {
        this.img = document.getElementById("paddle");
        this.width = 150;
        this.height = 20;

        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.maxSpeed = 10;
        this.speed = 0;

        this.position = {
            x: game.gameWidth / 2 - this.width / 2,
            y: game.gameHeight - this.height - 10,
        }
    }

    moveLeft() {
        this.speed = -this.maxSpeed
    }

    moveRight() {
        this.speed = this.maxSpeed
    }


    moveWithPosition(x) {
        this.position.x = x;
    }

    stop() {
        this.speed = 0;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.position.x, this.position.y, this.width, this.height);
    }

    update(deltaTime) {
        this.position.x += this.speed;
        if (this.position.x < 0) this.position.x = 0;
        if (this.position.x > this.gameWidth - this.width) this.position.x = this.gameWidth - this.width;
    }


}