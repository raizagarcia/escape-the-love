class Enemy {
    constructor(x, y, h, w, color, ctx) {
        this.y = y;
        this.x = x;
        this.h = h;
        this.w = w;
        //this.color = color;
        this.img = new Image();
        this.speedEnemy = 3;
        this.ctx = ctx;
}

    
    drawCanvas() {
        this.img.src = 'docs/assets/images/enemyone.png'
        this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }


    moveEnemy(){
        this.y += this.speedEnemy

        if(this.y + this.w >= 500){
            this.speedEnemy = -3;
        } if (this.y <= 0) {
            this.speedEnemy = 3;
        }
    }


    top() {
        return this.y;
      }
    
      bottom() {
        return this.y + this.h;
      }

  }

