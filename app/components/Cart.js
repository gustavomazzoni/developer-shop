var React = require('react');
var CartItem = require('./CartItem');

var Cart = React.createClass({

	render: function(){

		var self = this;

		var items = this.props.developers.map(function(d) {

			// Passing the onClick callback of this Cart to each CartItem.
			return <CartItem developer={d.developer} 
						onClick={self.props.onClick} 
						onChange={self.props.onChange} />
		});

		if(!items.length){
			return null;
		}

		return (
			<section id="cart">
				<div className="container">
					<div className="row">
						<div className="col-md-6 col-md-offset-3 text-center wow fadeInUp animated">
			                <h1>Cart</h1>
			                <div className="separator"><span><i className="fa fa-circle"></i></span></div>
			                <div className="spacer-single"></div>
			            </div>
						{items}
						<div className="col-md-12 cart-list-item">
							<div className="col-md-6">
							</div>
							<div className="col-md-2 text-center">
							</div>
							<div className="col-md-2 text-center">
								<p><strong className="total">total:</strong></p>
							</div>
							<div className="col-md-2">
								<p><strong className="total">${this.props.total}</strong></p>
							</div>
			          	</div>
					</div>
				</div>
			</section>
   		)

	}

});

module.exports = Cart;