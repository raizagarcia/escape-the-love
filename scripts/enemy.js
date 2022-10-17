class Enemy {
    constructor(x, y, h, w, color, ctx) {
        this.y = y;
        this.x = x;
        this.h = h;
        this.w = w;
        this.color = color;
        this.speedEnemy = 0;
        this.ctx = ctx;

}

    moveUp() {
        this.y -= 1;
    }

    drawCanvas() {
    this.ctx.fillStyle = this.color
    this.ctx.fillRect(this.x, this.y, this.w, this.h);

    }
    

    moveDown(){
        this.y += 1;
    }

    

  }

