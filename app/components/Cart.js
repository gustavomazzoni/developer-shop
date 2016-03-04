var React = require('react');
var CartItem = require('./CartItem');

var Cart = React.createClass({

	render: function(){

		var self = this;

		var items = this.props.developers.map(function(developer) {

			// Passing the events callback of this Cart to each CartItem.
			return <CartItem key={developer._id} developer={developer} 
						onRemove={self.props.onRemove} 
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
			          	<div className="col-md-12 text-right">
			          		<div className="col-md-8">
							</div>
							<div className="col-md-4">
								<button type="button" 
									className="btn btn-success btn-lg btn-block"
									onClick={this.props.onSubmit}>Comprar</button>
							</div>
			          	</div>
					</div>
				</div>
			</section>
   		)

	}

});

module.exports = Cart;