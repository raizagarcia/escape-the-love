class Game {
    constructor(ctx, width, height, player, enemy) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.player = player;
        this.enemy = enemy;
        this.intervalId = null;
        this.obstacles = [];
        this.frames = 0;
    }
    
    clearCanvas() {
       this.ctx.clearRect(0, 0, 1100, 650);
    }

    updateCanvas = () => {
    /* speedPlayer += 1;
    speedEnemy += 1; */
    this.clearCanvas();
    this.enemy.drawCanvas();
    this.player.drawCanvas();
    this.player.newPos();
    }

    start(){
        this.intervalId = setInterval(this.updateCanvas, 1000 / 60)
    }
} 
