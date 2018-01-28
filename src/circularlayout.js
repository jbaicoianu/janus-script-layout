room.registerElement('circularlayout', {
  radius: 1,

  create: function() {
    var spacing = -2 * Math.PI / this.children.length;
    var children = this.children;
    for (var i = 0; i < children.length; i++) {
      var child = children[i];
      child.pos = V(this.radius * Math.sin(spacing * i), 0, this.radius * Math.cos(spacing * i));
      child.zdir = scalarMultiply(normalized(child.pos), -1);
      child.xdir = cross(V(0,1,0), child.zdir);
    }

  }

}, 'layout');
