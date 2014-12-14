/** @jsx React.DOM */

var Ellipse = React.createClass({


  mixins: [ShapePropertyMixin],

  render:function(){
    var style = this.extractStyle(true);
    //style['border-radius'] = '50% 50%';
    style['borderRadius'] = '50% 50%';

    return <div style={style} className="shape" />;
  }
});