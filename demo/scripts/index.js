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
					<Tab image="some" name="Unicorn" active="active">
						<Component />
					</Tab>
					<Tab name="Zebra">
						Some zebras are nice
					</Tab>
					<Tab name="Doggy">
						its so fluffy
					</Tab>
					<Tab name="Snoop Dog">
						Doggy dog
					</Tab>
				</Tableta>
			</div>
		);
	}

});
ReactDOM.render(<App />, document.getElementById('root'));