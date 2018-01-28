room.registerElement('verticallayout', {
  offset: V(0,1,0),
  spacing: 1,
  // FIXME - need proxy inheritance so we don't need to duplicate this function
  create: function() {
    var children = this.children;
    console.log('children!', children);
    var i = 0;
    for (var k in children) {
      children[k].pos = scalarMultiply(this.offset, i++ * this.spacing);        
    }
  },
}, 'layout');
