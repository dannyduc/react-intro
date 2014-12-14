/** @jsx React.DOM */
var ShapeCanvas = React.createClass({

  getDefaultProps: function(){
    return {
      shapes: []
    };
  },

  render: function () {
    var self = this;
    var shapeTree = <div className="shape-canvas">
    {
      this.props.shapes.map(function(s, i) {
        return self._createShape(s, i);
      })
    }
      </div>;

    var noTree = <div className="shape-canvas no-shapes">No Shapes Found</div>;

    return this.props.shapes.length > 0 ? shapeTree : noTree;
  },

  _createShape: function(shape, id) {
    var type = shape.type;
    var key = type + '-' + id;
    return this._shapeMap[type](key, shape);
  },

  _shapeMap: {
    ellipse: function (k, shape) {
      return <Ellipse key={k} properties={shape.properties} />;
    },

    rect: function (k, shape) {
      return <Rectangle key={k} properties={shape.properties} />;
    },

    text: function (k, shape) {
      return <Text key={k} properties={shape.properties} />;
    }
  }

});
