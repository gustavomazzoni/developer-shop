var React = require('react');
var DevShopAPI = require('../utils/DevShopAPI');

var Item = React.createClass({

	getInitialState: function() {
		return {
			developer: {}
		};
	},

	componentDidMount: function() {
		var self = this;
		DevShopAPI.getDeveloperById(this.props.developer_id, function(developer) {
			self.setState({developer: developer});
		});
	},

	render: function(){
		var developer = this.state.developer;
		return (
			<div className="list-group-item">
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
						<p>{this.props.quantity} hours</p>
					</div>
					<div className="col-md-2 text-center">
						<p>${this.props.price} /per hour</p>
					</div>
					<div className="col-md-2 text-center">
						<p>${(this.props.price * this.props.quantity)}</p>
					</div>
          	</div>
		)

	}

});

module.exports = Item;