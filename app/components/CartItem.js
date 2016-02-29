var React = require('react');
var CartItem = require('./CartItem');

var CartItem = React.createClass({

	getInitialState: function() {
		this.props.developer.quantity = 1;
		return {
			total: this.props.developer.price
		};
	},

	componentDidMount: function() {
		this.props.onChange(this.props.developer);
	},

	handleChange: function(event) {
		this.props.developer.quantity = Number(event.target.value);
		this.setState({
			total: this.props.developer.price * Number(event.target.value)
		});
		this.props.onChange(this.props.developer);
	},

	handleClick: function(){
		this.props.onClick(this.props.developer);
	},

	render: function(){

		return (
			<div className="col-md-12 cart-list-item">
				<div className="col-md-6">
					<div className="media">
						<div className="pull-left">
							<img className="avatar" 
							width="50px" 
							src={this.props.developer.photo}/>
		                </div>
						<div className="media-body">
							<h4 className="media-heading">{this.props.developer.username}</h4>
                      		<p>{this.props.developer.name}</p>
						</div>
					</div>
				</div>
				<div className="col-md-2 text-center">
					<input type="number" qtd="1" min="1" max="99" placeholder="How many hours?" 
					value={this.props.developer.quantity} 
					onChange={this.handleChange}
					className="form-control"/>
				</div>
				<div className="col-md-2 text-center">
					<p>${this.props.developer.price} /per hour</p>
				</div>
				<div className="col-md-2">
					<div className="media">
						<div className="pull-right">
							<span className="glyphicon glyphicon-remove-sign" 
							onClick={this.handleClick} aria-hidden="true"></span>
		                </div>
						<div className="media-body">
							<p>${(this.props.developer.price * this.props.developer.quantity)}</p>
						</div>
					</div>
				</div>
          	</div>
		)

	}

});

module.exports = CartItem;