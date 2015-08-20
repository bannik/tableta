var React = require('react');
var Tably = require('./tably.js');


var TabletaNav = React.createClass({
	getInitialState: function(){
		var things = _this.props.children.map(function(item) {
         	return (
         		<li className={item.props.active} key={item.props.name} onClick={_this.handleClick.bind(_this, item)} id={item.props.name}>{item}</li>
         	);
        });
		return({
			content: this.props.children[0],
			activeClass: '',
			tabs: things
		});
	},
	handleClick: function(item){
		var _this = this;
		$(this).addClass('active');
		$(this).siblings().removeClass("active");
		_this.setState({content: item.props.children});
		console.warn(this.state.content);
	},
	componentWillMount: function(){
	},
	componentDidMount: function(){

	},
	render: function(){
        console.warn(this.state.tabs);
		return(
			<div className="tableta">
				<ul className="tabletaNav">
					{this.state.tabs}
				</ul>
				<div className={this.props.contName}>
					{this.state.content}
				</div>
			</div>
		);
	}
});
module.exports = TabletaNav;