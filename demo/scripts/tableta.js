var React = require('react');
var Tably = require('./tably.js');


var TabletaNav = React.createClass({
	getInitialState: function(){
		var _this = this;
		var tabs = _this.props.children.map(function(item) {
         	return (
         		<li key={item.props.name} onClick={_this.handleClick.bind(_this, item)} id={item.props.name.replace(' ','')}>{item}</li>
         	);
        });
        for (var i = this.props.children.length - 1; i >= 0; i--) {
        	if(this.props.children[i].props.active == 'active'){
        		var activeEl = this.props.children[i];
        	}
        };
		return({
			content: activeEl.props.children,
			activeClass: activeEl.props.name.replace(' ',''),
			tabs: tabs
		});
	},
	handleClick: function(item){
		var _this = this;
		$('#'+_this.state.activeClass).removeClass('active');
		$('#'+item.props.name.replace(' ','')).addClass('active');
		_this.setState({content: item.props.children, activeClass: item.props.name.replace(' ','')});
	},
	componentDidMount: function(){
		var _this = this;
		$('#' + _this.state.activeClass).addClass('active');
	},
	render: function(){
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