class NewEnemy {
    constructor(x, y, h, w, color, ctx) {
        this.y = y;
        this.x = x;
        this.h = h;
        this.w = w;
        this.color = color;
        this.speedNewEnemy = 4;
        this.ctx = ctx;
}

    /*moveUp() {
        this.y -= 1;
    }*/

    
    drawCanvas() {
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
    }


    move(){
        this.y += this.speedNewEnemy

        if(this.y + this.w >= 500){
            this.speedNewEnemy = -4;
        } if (this.y <= 0) {
            this.speedNewEnemy = 4;
        }
    }


    top() {
        return this.y;
      }
    
      bottom() {
        return this.y + this.h;
      }

  }
