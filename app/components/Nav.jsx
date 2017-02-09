var React = require('react');
var {Link,IndexLink} = require('react-router');

var Nav  = React.createClass({
  render:function(){
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              React Timer APP
            </li>
            <li>
              <IndexLink to='/Timer' className="active-link">Timer</IndexLink>
            </li>
            <li>
              <Link to='/CountDown' className="active-link">Countdown</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">
              Created by <a href="http://francocotter.github.io/blog" target="_blank">Mariano</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
});
module.exports = Nav;
