/** @jsx React.DOM */

var Simple = React.createClass({

  getInitialState: function(){
    return { count: 0 };
  },

  handleMouseDown: function(){
    alert('I was told: ' + this.props.message);
    this.setState({ count: this.state.count + 1});
  },

  render: function(){

    return <div>
      <div className="clicker" onMouseDown={this.handleMouseDown}>
        Give me the message!
      </div>
      <div className="message">Message conveyed <span ref="counter" className="count">{this.state.count}</span> time(s)</div> </div>
    ;
  }
});

React.render(<Simple message="Keep it Simple"/>,
                  document.body);