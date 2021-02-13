// this class for the brick of the game
class Brick {
    // this constructor to set the values of the brick
    constructor(game, position) {
        this.img = document.getElementById("brick");
        this.game = game;
        this.position = position;
        this.width = 70;
        this.height = 30;
        this.deleted = false;
    }

    // this method to upadte the ball and game depend on the hit of the ball
    update() {
        //
        if (detectCollision(this.game.ball, this) === 1) {
            this.game.ball.speed.y = -this.game.ball.speed.y;
            this.deleted = true;
            this.game.score += 10;
            // play sound of ball when hit the brick 
            if (this.game.soundEffectOn)
                this.play();
        } 
        //
        else if (detectCollision(this.game.ball, this) === 2) {
            this.game.ball.speed.x = -this.game.ball.speed.x;
            this.deleted = true;
            this.game.score += 10;
            // play sound of ball when hit the brick
            if (this.game.soundEffectOn)
                this.play();
        }
    }


    // this method to re-draw the game
    draw(ctx) {
        ctx.drawImage(this.img, this.position.x, this.position.y, this.width, this.height);
    }

    // this method to play the music
    play() {
        var audio = document.getElementById("audio");
        audio.play();
    }
}