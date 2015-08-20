var React = require('react');
var ReactDOM = require('react-dom');

var Tableta = require('./tableta.js');
var Tab = require('./tab.js');

var App = React.createClass({

	render: function(){
		return(
			<div>
				<Tableta contName="hoe">
					<Tab name="fuck" active={true} >
						some content
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