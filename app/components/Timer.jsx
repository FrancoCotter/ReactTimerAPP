var React = require('react');
var Clock = require('Clock');
var Timer = (props)=>{
  return(
    <div>
      <Clock totalSeconds={0}/>
    </div>
  )
}
module.exports = Timer;
