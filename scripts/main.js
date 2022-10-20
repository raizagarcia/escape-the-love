/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

window.onload = () => {
    document.getElementById('startButton').onclick = () => {
      startGame();
    }
  }


function startGame() {
const player = new Player(30, 100, 50, 50, 'green', ctx)
const enemy = new Enemy(740, 590, 70, 70, 'blue', ctx);
const newEnemy = new NewEnemy(810, 590, 70, 70, 'green', ctx)

let game = new Game(ctx, 900, 590, player, enemy, newEnemy);


let initialScreen = document.getElementById('telainicial')
  initialScreen.classList.add('hidden')
game.start()

document.getElementById('restart').onclick = () => {
  
  game.ctx.clearRect(0, 0, 800, 550)
  game = null;
  startGame()
}

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