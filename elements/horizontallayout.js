room.registerElement('horizontallayout', {
  spacing: 1,
  offset: V(1,0,0),
  // FIXME - need proxy inheritance so we don't need to duplicate this function
  createChildren: function() {
    var children = this.children;
    console.log('children!', children);
    var i = 0;
    for (var k in children) {
      children[k].pos = scalarMultiply(this.offset, i++ * this.spacing);        
    }
  },
}, 'layout');

