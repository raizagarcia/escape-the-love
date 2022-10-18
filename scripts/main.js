/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

window.onload = () => {
    document.getElementById('startButton').onclick = () => {
      startGame();
    }
}

function startGame() {
const player = new Player(25, 100, 60, 60, 'green', ctx)
const enemy = new Enemy(600, 580, 50, 50, 'blue', ctx);

let game = new Game(ctx, 900, 590, player, enemy);

game.start()

window.addEventListener("keydown", (e) => {
    switch (e.code) {
      case "ArrowUp":
        if(player.y > 0) {
          player.y -= 20;
        }
        break;
      case "ArrowDown":
        console.log('brrrr')
        if(player.y < 545) {
          player.y += 20;
        }
        break;
    }});
}