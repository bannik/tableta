var React = require('react');

var Tab = React.createClass({
	render: function(){
		return(
			<div>{this.props.name}</div>
		);
	}
});

module.exports = Tab;