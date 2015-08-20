var React = require('react');
var Tab = require('./tab.js');

var cloneWithProps = require('react-addons-clone-with-props');

var TabletaNav = React.createClass({
	componentDidMount: function(){
		var things = React.Children.map(this.props.children);

	},
	renderChildren: function () {
		var _this = this;
	    return (
	    	_this.props.children.map(function(item) {
	         	return <Tab name={item.props.name} key={item.props.name} contName={_this.props.contName} content={item.props.children} active={item.props.active}/>
	        })
	    );
  	},
	render: function(){
		return(
			<div className="tableta">
				<ul className="tabletaNav">
					{this.renderChildren()}
				</ul>
				<div className={this.props.contName}>
				</div>
			</div>
		);
	}
});
module.exports = TabletaNav;