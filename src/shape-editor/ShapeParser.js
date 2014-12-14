var ShapeParser = function(){

  var shapeRegex = /(rect|ellipse|text)(\s[a-z]+:\s[a-z0-9]+;)*/i;
  this.parse = function(text) {
    var lines = text.split('\n');

    var shapes = lines.map(_extractShapeFromLine);

    return shapes.filter(function (s) {
      return s != null;
    });

  };


  function _extractShapeFromLine(line) {
    var match = line.match(shapeRegex);
    if (!match) return null;

    var type = match[1],
        parts = match.input.split(' '),
        propPairs = parts.slice(1).join(' ').split(';');

    var shape = {
      type: type,
      properties: {}
    };
    propPairs.forEach(function (p) {
      var pair = p.split(':');
      if (pair.length < 2) return;

      var prop = pair[0].trim(),
        value = pair[1].trim();

      shape.properties[prop] = value;
    });

    return shape;
  }


};