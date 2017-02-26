var React = require('react');
var {Link,IndexLink} = require('react-router');

var Nav  = React.createClass({
  render:function(){
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              React 计时器
            </li>
            <li>
              <IndexLink to='/' activeClassName="active-link">计时</IndexLink>
            </li>
            <li>
              <Link to='/CountDown' activeClassName="active-link">倒数读秒</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">
              <a href="http://francocotter.github.io/blog" target="_blank">Mariano</a> 制作
            </li>
          </ul>
        </div>
      </div>
    )
  }
});
module.exports = Nav;
