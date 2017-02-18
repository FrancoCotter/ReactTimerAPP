var React = require('react');

var CountdownForm = React.createClass({
  onSubmit:function(e){
    e.preventDefault();
    var cdText = this.refs.second.value;
    if(cdText.match(/^[0-9]*$/) && cdText.length > 0){
      this.refs.second.value = '';
      this.props.onSetCountdown(parseInt(cdText,10));
    }
  },
  render:function(){
    return(
      <div>
        <form ref='form' className="countdown-form" onSubmit={this.onSubmit}>
          <input type="text" ref="second" placeholder="enter some seconds"/>
          <button className="button expanded">Start</button>
        </form>
      </div>
    )
  }
});

module.exports = CountdownForm;
