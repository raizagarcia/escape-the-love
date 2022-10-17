class Player {
    constructor(x, y, w, h, color, ctx) {
        this.y = y;
        this.x = x;
        this.h = h;
        this.w = w;
        this.color = color;
        this.speedY = 0;
        this.ctx = ctx;

}

drawCanvas() {
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(this.x, this.y, this.w, this.h);
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

    /* draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.h); */
        /* ctx.drawImage(25, 100, 50, 50, 'green') */
    

    /* moveUp() {
        this.y -= 1;
    }

    moveDown(){
        this.y += 1;
    } */

  }