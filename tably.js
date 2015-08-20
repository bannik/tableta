var React = require('react');

var Tab = React.createClass({
	getInitialState: function(){
		return({
			activeClass: false
		});
	},
	componentDidMount: function(){
		if(this.props.active == true){
			this.setState({activeClass: true});
			$('.'+this.props.contName).html(this.props.content);
		}else{
			// don't do a shit
		}
	},
	render: function(){
		return(
			<li className={this.state.activeClass} id={this.props.name}><a onClick={this.handleClick}>{this.props.name}</a></li>
		);
	}
});

module.exports = Tab;