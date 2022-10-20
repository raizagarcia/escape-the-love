class NewEnemy {
    constructor(x, y, h, w, color, ctx) {
        this.y = y;
        this.x = x;
        this.h = h;
        this.w = w;
        //this.color = color;
        this.img = new Image();
        this.speedNewEnemy = 4;
        this.ctx = ctx;
}


    
    drawCanvas() {
        this.img.src = 'docs/assets/images/enemytwoleft.png'
        this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
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
