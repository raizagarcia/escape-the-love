class Game {
    constructor(ctx, width, height, player, enemy, newEnemy) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.player = player;
        this.enemy = enemy;
        this.newEnemy = newEnemy;
        this.intervalId = null;
        this.obstacles = [];
        this.life = [];
        this.frames = 0;
        this.score = 0;
        this.gameOver = new Image();
        this.gameOver.src = 'docs/assets/images/yeslost.png';
        this.win = new Image();
        this.win.src = 'docs/assets/images/yeswin.png'
    }
    
    clearCanvas() {
       this.ctx.clearRect(0, 0, 1100, 650);
    }

    updateCanvas = () => {
    this.frames++;
    this.clearCanvas();
    this.enemy.drawCanvas();
    this.enemy.moveEnemy(); 
    this.newEnemy.move();
    this.newEnemy.drawCanvas();
    this.player.drawCanvas();
    this.player.newPos();
    this.updateObstacles();
    this.checkGameOver()
    this.updateLife();
    this.checkLife()
    this.checkWin()
    this.drawScore()
    }

    start(){
        this.intervalId = setInterval(this.updateCanvas, 1000 / 60)
    }

    checkWin(){
      if(this.score >= 7){
        this.ctx.drawImage(this.win, 0, 0, this.width, this.height)
        this.stop()
      }
    }

    updateObstacles() {
        for (let i = 0; i < this.obstacles.length; i++) {
        this.obstacles[i].x -= 1;
        this.obstacles[i].drawCanvas();
      }

      if(this.frames % 120 === 0){
        this.obstacles.push(new Obstacles(this.enemy.x, this.enemy.y, 30, 30, 'red', ctx))
        this.obstacles.push(new Obstacles(this.newEnemy.x, this.newEnemy.y, 30, 30, 'red', ctx))
      }


    
    }

    updateLife() {
      for (let i = 0; i < this.life.length; i++) {
        this.life[i].x -= 1;
        this.life[i].drawCanvas();
      }

      if(this.frames % 190 === 0){
        this.life.push(new Life(this.enemy.x, this.enemy.y, 30, 30, 'pink', ctx))
      }
    
    }

    
  checkGameOver() {
      const crash = this.obstacles.some((obstacle) => {
        return this.player.crashWith(obstacle);
      });
      if (crash) {
            this.ctx.drawImage(this.gameOver, 0, 0, this.width, this.height)
            this.stop();
          }
    }
  checkLife() {
      const crash = this.life.some((life, index) => {
        if(this.player.crashWith(life)){
          this.life.splice(index, 1)
        }
        return this.player.crashWith(life);
      });
      if (crash) {
            this.score++;
          }
    }

  


  stop() {
      clearInterval(this.intervalId);
    }

  

    drawScore(){
     this.ctx.font = '100px';
     this.ctx.fillStyle = 'black';
     this.ctx.fillText("✨".repeat(this.score), 350, 50)
     
    }


}