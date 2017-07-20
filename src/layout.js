room.registerElement('layout', {
  offset: V(1,0,0),
  spacing: 1,

  createChildren: function() {
    var children = this.children;
    var i = 0;
    for (var k in children) {
      children[k].pos = scalarMultiply(this.offset, i++ * this.spacing);        
    }
  },
});

