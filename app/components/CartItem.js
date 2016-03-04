var React = require('react');

var CartItem = React.createClass({

	getInitialState: function() {
		return {
			total: this.props.developer.price
		};
	},

	componentDidMount: function() {
		this.props.onChange(this.props.developer);
	},

	handleChange: function(event) {
		this.props.developer.quantity = Number(event.target.value);
		this.props.onChange(this.props.developer);
	},

	handleClick: function(){
		this.props.onRemove(this.props.developer);
	},

	render: function(){
		var developer = this.props.developer;
		return (
			<div className="col-md-12 cart-list-item">
				<div className="col-md-6">
					<div className="media">
						<div className="pull-left">
							<img className="avatar" 
							width="50px" 
							src={developer.photo_url}/>
		                </div>
						<div className="media-body">
							<h4 className="media-heading">{developer.username}</h4>
                      		<p>{developer.name}</p>
						</div>
					</div>
				</div>
				<div className="col-md-2 text-right">
					<input type="number" qtd="1" min="1" max="200" size="3" placeholder="How many hours?" 
					value={developer.quantity} 
					onChange={this.handleChange}
					className="modern"/>
					hours
				</div>
				<div className="col-md-2 text-center">
					<p>${developer.price} /per hour</p>
				</div>
				<div className="col-md-2">
					<div className="media">
						<div className="pull-right">
							<span className="glyphicon glyphicon-remove-sign" 
							onClick={this.handleClick} aria-hidden="true"></span>
		                </div>
						<div className="media-body">
							<p>${(developer.price * developer.quantity)}</p>
						</div>
					</div>
				</div>
          	</div>
		)

	}

});

module.exports = CartItem;