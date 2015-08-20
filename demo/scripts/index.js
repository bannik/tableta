var React = require('react');
var ReactDOM = require('react-dom');

var Tableta = require('./tableta.js');
var Tab = require('./tably.js');
var Component = React.createClass({
	render: function(){
		return(
			<span>Unicorn</span>
		)
	}
});
var App = React.createClass({

	render: function(){
		return(
			<div>
				<Tableta contName="hoe">
					<Tab name="fuck" active="active">
						<Component />
					</Tab>
					<Tab name="fuck2">
						some content2
					</Tab>
					<Tab name="fuck3">
						some content3
					</Tab>
					<Tab name="fuck4">
						some content4
					</Tab>
				</Tableta>
			</div>
		);
	}

});
ReactDOM.render(<App />, document.getElementById('root'));