var React = require('react');

var Controls = React.createClass({
  propTypes:{
    countdownStatus:React.PropTypes.string.isRequired,
    onStatusChange:React.PropTypes.func.isRequired
  },
  onStatusChange:function(newStatus){
    // console.log(newStatus);
    return () => {
      this.props.onStatusChange(newStatus);
    };
  },
  render:function(){
    var {countdownStatus} = this.props;
    var renderStartStopButton = () => {
      if(countdownStatus === 'started'){
        return <button className="secondary button" onClick={this.onStatusChange('paused')}>暂停</button>
      }else {
        return <button className="primary button" onClick={this.onStatusChange('started')}>开始</button>
      }
    };
    return(
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>清除</button>
      </div>

    )
  }
});

module.exports = Controls;
