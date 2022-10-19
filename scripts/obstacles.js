class Obstacles{
    constructor(x, y, w, h, color, ctx){
    this.y = y;
    this.x = x;
    this.h = h;
    this.w = w;
    this.color = color;
    this.speedX = 1;
    this.ctx = ctx;
    this.img = new Image();
    }
  
    newPos() {
      this.x += this.speedX;
  }

    top() {
        return this.y;
      }
      left() {
        return this.x;
      }
      bottom() {
        return this.y + this.h;
      }
      right() {
        return this.x + this.w;
      }

      drawCanvas() {
        this.img.src = 'docs/assets/images/red-heart.png'
        this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
     }


}
