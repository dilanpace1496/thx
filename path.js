function Particle(x, y) {
  this.x = x;
  this.y = y;

  this.history = [];

  this.update = function () {



    var v = createVector(this.x, this.y);
    this.history.push(v);

  }

  this.show = function () {



    beginShape(POINTS);
    for (var i = 0; i < this.history.length; i++) {
      var pos = this.history[i];

      vertex(pos.x, pos.y);
    }
    endShape(CLOSE);


  }

  beginShape();
  vertex(220, 220);
  vertex(240, 220);
  vertex(240, 240);
  vertex(260, 240);
  vertex(260, 260);
  vertex(220, 260);
  endShape(CLOSE);

}