var React = require('react');
var Tably = require('./tably.js');


var TabletaNav = React.createClass({
	handleClick: function(e){
		e.preventDefault();
		console.log('fuck');
	},
	render: function(){
		var _this = this;
		var things = _this.props.children.map(function(item) {
         	return (
         		<li onClick={_this.handleClick} key={item.props.name}>{item.props.name}</li>
         	);
        });
		return(
			<div className="tableta">
				<ul className="tabletaNav">
					{things}
				</ul>
				<div className={this.props.contName}>
				</div>
			</div>
		);
	}
});
module.exports = TabletaNav;