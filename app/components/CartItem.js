var React = require('react');
var CartItem = require('./CartItem');

var CartItem = React.createClass({

	handleClick: function(){
		this.props.onClick(this.props.developer);
	},

	render: function(){

		var cn = "list-group-item";

		return (
			<a className={cn} onClick={this.handleClick}>
				{this.props.developer.username}
				<span className="createdAt">{this.props.developer.price}</span>
				<span className="glyphicon glyphicon-menu-right"></span>
			</a>
		)

	}

});

module.exports = CartItem;