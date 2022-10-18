class Player {
    constructor(x, y, w, h, color, ctx) {
        this.y = y;
        this.x = x;
        this.h = h;
        this.w = w;
        //this.color = color;
        this.speedY = 0;
        this.ctx = ctx;
        this.img = new Image();
}

    drawCanvas() {
        this.img.src = 'docs/assets/images/shockedcat.png'
        this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }
    
    newPos() {
        this.y += this.speedY;
    }

    top() {
        return this.y;
      }
    
      bottom() {
        return this.y + this.h;
      }
      
      right(){
        return this.x + this.w;
      }
      
      left() {
        return this.x
      }

      crashWith(obstacle) {
        return !(
        this.bottom() < obstacle.top() ||
        this.top() > obstacle.bottom() ||
        this.right() < obstacle.left() ||
        this.left() > obstacle.right()
        );
      }



  }
 