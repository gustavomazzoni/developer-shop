var React = require('react');
var DevShopAPI = require('../utils/DevShopAPI');

var Item = require('./Item');

var Purchase = React.createClass({

	getInitialState: function() {
		return {
			cart: {
				items: []
			}
		};
	},

	componentDidMount: function() {
		var self = this;
		DevShopAPI.getCartById(this.props.params.id, function(cart) {
			self.setState({cart: cart});
		});
	},

	render: function(){

		var self = this;

		var cart = this.state.cart;

		var items = cart.items.map(function(item) {

			return <Item key={item._id} developer_id={item.developer_id} 
				quantity={item.quantity} 
				price={item.price}/>
		});

		if(!items.length){
			return null;
		}
		
		return (
			<section id="order" className="no-header">
				<div className="container">
					<div className="row">
						<div className="col-md-6 col-md-offset-3">
							<div className="panel panel-success">
								<div className="panel-heading">Congratulations on your purchase!</div>
								<div className="panel-body">
									<p>Below you can see details about your purchase:</p>
								</div>

								

								<div className="list-group">
									{items}
									<div className="panel-footer">
										<div className="col-md-8"></div>
										<div className="col-md-2 text-center">
											<p><strong className="total">total:</strong></p>
										</div>
										<div className="col-md-2 text-center">
											<p><strong className="total">${cart.total}</strong></p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
});

module.exports = Purchase;