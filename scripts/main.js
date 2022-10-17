/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');



const player = new Player(25, 100, 50, 50, 'green', ctx)
const enemy = new Enemy(900, 100, 50, 50, 'blue', ctx);


let game = new Game(ctx, 1100, 650, player, enemy);

game.start()

window.addEventListener("keydown", (e) => {
    switch (e.code) {
      case "ArrowUp":
        console.log('square makes brrrrrrrr');
      player.speedY -= 2;
        break;
      case "ArrowDown":
        console.log('square makes rrrrrrr');
        player.speedY += 2;
        break;
    }});

















/*function drawCanvas(x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
  };

drawCanvas(25, 100, 50, 50, 'green');
ctx.save();
drawCanvas(1100, 100, 50, 50, 'blue');
ctx.save();

let speedPlayer = 0;
let speedEnemy = 0;

function clearCanvas() {
    ctx.clearRect(0, 0, 1100, 650);
}

function updateCanvas() {
    speedPlayer += 1;
    speedEnemy += 1;

    clearCanvas();

    drawCanvas(25, speedPlayer, 50, 50, 'green');
    drawCanvas(1100, speedEnemy, 50, 50, 'blue');

    requestAnimationFrame(updateCanvas);
}

updateCanvas();*/

/* class Player {
    constructor() {
        this.y = 25;

    function drawCanvas(x, y, w, h, color) {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, w, h);
    }
    drawCanvas(25, 100, 50, 50, 'green')

}

    moveUp() {
        this.y -= 1;
    }

    moveDown(){
        this.y += 1;
    }

  } */

  /* const player = new Player(); */


  /* class Enemy {
    constructor() {
        this.y = 25;

    function drawCanvas(x, y, w, h, color) {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, w, h);
    }
    drawCanvas(1000, 100, 50, 50, 'blue')

}

    moveUp() {
        this.y -= 1;
    }

    moveDown(){
        this.y += 1;
    }

  } */

  /* const enemy = new Enemy(); */

/* let speedPlayer = 0;
let speedEnemy = 0; */

/* function clearCanvas() {
    ctx.clearRect(0, 0, 1100, 650);
}

function updateCanvas() {
    speedPlayer += 1;
    speedEnemy += 1;

    clearCanvas();
} */

  

  /*document.addEventListener('keydown', e => {
    switch (e.code) {
        case 'ArrowUp':
          player.moveUp() -= 1;
          break;
        case 'ArrowDown':
          player.moveDown() += 1;
          break;
    }
    updateCanvas();
  })

  function updateCanvas() {
    ctx.clearRect(0, 0, 1200, 690);
    
}

updateCanvas()*/