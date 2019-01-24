function Particle(x, y) {
    this.x = x;
    this.y = y;
    
    this.history = [];
    
    this.update = function() {
      
      
  
      var v = createVector(this.x, this.y);
      this.history.push(v); 
      
    }
    
    this.show = function() {
      
      
      
      beginShape();
      for (var i = 0; i < this.history.length; i++) {
        var pos = this.history[i];
        
        vertex(pos.x, pos.y);
      }
      endShape(CLOSE);
      
      
    }
    
  }