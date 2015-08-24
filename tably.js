var React = require('react');

var Tab = React.createClass({
	render: function(){
		if (this.props.image && this.props.image.length > 0) {
			return(
				<div>
					<img src={this.props.image}/>
					<span>{this.props.name}</span>
				</div>
			);
		}else{
			return(
				<div>
					<span>{this.props.name}</span>
				</div>
			);
		};
		

	}
});

module.exports = Tab;