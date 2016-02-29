var React = require('react');
var config = require('../../config');

var DeveloperList = require('./DeveloperList');
var Cart = require('./Cart');


var App = React.createClass({

	getInitialState: function(){
		var cartItems = [];

		// Extract cartItems from local storage
		if(localStorage.cartItems){
			cartItems = JSON.parse(localStorage.cartItems);
		}

		return {
			developers: [],
			cartItems: cartItems,
			cartCount: 0,
			cartTotal: 0
		};
	},

	// Load developers from server
	componentDidMount: function() {
		var self = this;
		this.serverRequest = $.get(config.host + "/developers", function (result) {
			var developers = [];
			result.forEach(function(data){
				var developer = {
					id: data.id,
					username: data.username,
					name: data.name,
					company: data.company,
					photo: data.photo_url,
					price: data.price,
					followers_count: data.followers_count,
			        repos_count: data.repos_count,
			        forks_count: data.forks_count,
			        stargazers_count: data.stargazers_count
				};
				
				// Check if it's already in cart
				var index = self.isDeveloperInCart(developer);
				if(index === -1) self.addToDevelopers(developer);
			});
	    }.bind(this));
	},

  	// Set to inital state
	componentWillUnmount: function() {
		this.serverRequest.abort();
		this.setState(this.getInitialState());
	},

	toggleDeveloper: function(developer){
		var index = this.isDeveloperInCart(developer);
		
		if(index !== -1) {
			this.removeFromCart(index);
			this.addToDevelopers(developer);
		} else {
			this.removeFromDevelopers(developer);
			this.addToCart(developer);
		}

	},

	addToDevelopers: function(developer){
		var developers = this.state.developers;

		developers.push({
			developer: developer
		});

		this.setState({
			developers: developers
		});
	},

	removeFromDevelopers: function(developer){
		var developers = this.state.developers;
		var index = -1;

		developers.forEach(function(d, i){
			var dev = d.developer;
			if(dev.username == developer.username){
				index = i;
			}
		});


		// If it was found, remove it from the developers array
		if(index !== -1){
			developers.splice(index, 1);

			this.setState({
				developers: developers
			});
		}
	},

	addToCart: function(developer){

		var cartItems = this.state.cartItems;

		cartItems.push({
			developer: developer
		});

		this.setState({
			cartItems: cartItems
		});

		// Keep Cart state by saving cartItems in local storage
		localStorage.cartItems = JSON.stringify(cartItems);
	},

	removeFromCart: function(index){
		var cartItems = this.state.cartItems;
		if(index !== -1) {
			cartItems.splice(index, 1);

			this.updateCartTotal(cartItems);
		}
	},

	isDeveloperInCart: function(developer){
		var cartItems = this.state.cartItems;
		var index = -1;

		cartItems.forEach(function(d, i){
			var dev = d.developer;
			if(dev.username == developer.username){
				index = i;
			}
		});
		
		return index;
	},

	updateCartTotal: function(cartItems) {
		var total = 0;
		cartItems.forEach(function(d){
			var dev = d.developer;
			total += Number(dev.price) * Number(dev.quantity);
		});
		this.setState({
			cartTotal: total,
			cartItems: cartItems
		});
		localStorage.cartItems = JSON.stringify(cartItems);
	},

	onChange: function(developer) {
		var cartItems = this.state.cartItems;
		cartItems.forEach(function(d){
			var dev = d.developer;
			if (dev.username == developer.username) {
				dev.quantity = developer.quantity;
			}
		});

		this.updateCartTotal(cartItems);
	},

	render: function(){
		
		return (
			<div>
				<header>
					<div className="container">
						<div className="row">
							<h1>Dev Shop</h1>
						</div>
					</div>
				</header>
				
				<DeveloperList developers={this.state.developers} 
					onClick={this.toggleDeveloper} />
				
				<Cart developers={this.state.cartItems} total={this.state.cartTotal}
					onClick={this.toggleDeveloper}
					onChange={this.onChange}/>
			</div>
		);
	}

});

module.exports = App;