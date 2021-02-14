// get the canvas from the doc
let canvas = document.getElementById("gameScreen");
// intialize the context
let ctx = canvas.getContext("2d");

// get the max width of the window
function getWidth() {
    return Math.max(
        // get the entire width of body (including not the viewable without margin)
        document.body.scrollWidth,
        // get the entire width of all html (including not the viewable)
        document.documentElement.scrollWidth,
        // get the entire viewable width of body (without border , sroll-bar and margin)
        document.body.offsetWidth,
        // get the entire viewable width of html elment
        document.documentElement.offsetWidth,
        // get the width of the viewable screen client
        document.documentElement.clientWidth
    );
}

// get the max height of the window
function getHeight() {
    return Math.max(
        // get the entire height of body (including not the viewable without margin)
        document.body.scrollHeight,
        // get the entire height of all html (including not the viewable)
        document.documentElement.scrollHeight,
        // get the entire viewable height of body (without border , sroll-bar and margin)
        document.body.offsetHeight,
        // get the entire viewable width of html elment
        document.documentElement.offsetHeight,
        // get the width of the viewable screen client
        document.documentElement.clientHeight
    );
}

// intialize the canvas's width
canvas.width = getWidth() - 20;
// intialize the canvas's height
canvas.height = getHeight() - 30;

// intialize the game width and height
const GAME_WIDTH = getWidth() - 20;
const GAME_HEIGHT = getHeight() - 30;

// create object from game
let game = new Game(GAME_WIDTH, GAME_HEIGHT);
// intialize the last time
let lastTime = 0;

// this function to start the loop of the game
// the timestamp in mile second
function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    game.update(deltaTime);
    game.draw(ctx);

    requestAnimationFrame(gameLoop);
}

// start window animation of the game
requestAnimationFrame(gameLoop);