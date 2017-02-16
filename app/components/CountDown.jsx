var React = require('react');
var Clock = require('Clock');

var CountDown = (props)=>{
  return(
    <div>
      <Clock totalSeconds={62}/>
    </div>
  )
};

module.exports = CountDown;
