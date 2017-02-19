var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var CountDown = React.createClass({
  getInitialState:function(){
    return {
      count:0,
      countdownStatus:'stopped'
    };
  },
  componentDidUpdate:function(prevProps,prevState){
    if(this.state.countdownStatus !== prevState.countdownStatus ){
      /*This lets us check if the countdown status has changed,
       *The compare the current countdownStatus which is
       *this.state.countdownStatus with the previous
       * status which is prevState.countdownStatus
       */
      switch(this.state.countdownStatus){
          case 'started':
            this.startTimer();
          break;
      }
    };
  },
  startTimer:function(){
    this.timer = setInterval(() => {
      var newCount = this.state.count - 1;
      this.setState({
        count:newCount >= 0 ? newCount : 0
      });
    },1000);
  },
  handleSetCountDown:function(seconds){
    this.setState({
      count:seconds,
      countdownStatus:'started'
    })
  },
  render:function(){
    var {count}=this.state;
    return(
      <div>
        <Clock totalSeconds={count}/>
        <CountdownForm onSetCountdown = {this.handleSetCountDown}/>
      </div>
    );
  }
});

module.exports = CountDown;
