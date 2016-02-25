var React = require('react');
var CartItem = require('./CartItem');

var Cart = React.createClass({

	render: function(){

		var self = this;

		var developers = this.props.developers.map(function(d) {

			// Passing the onClick callback of this Cart to each CartItem.

			return <CartItem developer={d.developer} onClick={self.props.onClick} />
		});

		if(!developers.length){
			return null;
		}

		return (			
			<div className="list-group col-xs-12 col-md-6 col-md-offset-3">
				<span className="list-group-item active">Cart</span>
				{developers}
			</div>
   		)

	}

});

module.exports = Cart;