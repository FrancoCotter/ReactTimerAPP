var React = require('react');

var CountdownForm = React.createClass({
  onSubmit:function(e){
    e.preventDefault();
    var cdText = this.refs.second.value;

    console.log('input count ',$('input').length);
    if(cdText.match(/^[0-9]*$/) && cdText.length > 0){
      this.refs.second.value = '';
      this.props.onSetCountdown(parseInt(cdText,10));
    }
  },
  render:function(){
    return(
      <div>
        <form ref='form' className="countdown-form" onSubmit={this.onSubmit}>
          <input type="text" ref="second" placeholder="请输入要倒数的秒数"/>
          <button className="button expanded">开始</button>
        </form>
      </div>
    )
  }
});

module.exports = CountdownForm;
