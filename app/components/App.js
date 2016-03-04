var React = require('react');

var App = React.createClass({

	render: function(){
		
		return (
			<div>
				<nav className="navbar navbar-default navbar-fixed-top" role="navigation">
			        <div className="container">
			            <div className="navbar-header">
			                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
			                    <span className="sr-only">Toggle navigation</span>
			                    <span className="icon-bar"></span>
			                    <span className="icon-bar"></span>
			                    <span className="icon-bar"></span>
			                </button>
			                <a className="navbar-brand" href="/">Dev Shop</a>
			            </div>
			        </div>
			    </nav>
			    {this.props.children || <Home/>}
			</div>
		);
	}

});

module.exports = App;