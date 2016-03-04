var React = require('react');
var browserHistory = require('react-router').browserHistory;
var DevShopAPI = require('../utils/DevShopAPI');

var DeveloperList = require('./DeveloperList');
var Cart = require('./Cart');

var Home = React.createClass({

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
		DevShopAPI.getDevelopers(function(developers) {
			developers.forEach(function(developer){
				// Check if it's already in cart
				var index = self.isDeveloperInCart(developer);
				if(index === -1) self.addToDevelopers(developer);
			});
		});
	},

  	// Set to inital state
	componentWillUnmount: function() {
		this.setState(this.getInitialState());
	},

	onSubmit: function(){
		var cartItems = this.state.cartItems;
		var cartTotal = this.state.cartTotal;
		DevShopAPI.saveCart(cartItems, cartTotal, function(cart) {
			// Route to Do something with this saved cart.
			browserHistory.push('/purchase/' + cart._id);
		});
	},

	onAdd: function(developer){
		this.removeFromDevelopers(developer);
		this.addToCart(developer);
	},

	onRemove: function(developer){
		this.removeFromCart(developer);
		this.addToDevelopers(developer);
	},

	onChange: function(developer) {
		var cartItems = this.state.cartItems;
		cartItems.forEach(function(dev){
			if (dev.username == developer.username) {
				dev.quantity = developer.quantity;
			}
		});

		this.updateCartTotal(cartItems);
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

		developers.push(developer);

		this.setState({
			developers: developers
		});
	},

	removeFromDevelopers: function(developer){
		var developers = this.state.developers;
		// var index = -1;

		var index = developers.indexOf(developer);

		// If it was found, remove it from the developers array
		if(index > -1){
			developers.splice(index, 1);

			this.setState({
				developers: developers
			});
		}
	},

	addToCart: function(developer){
		var cartItems = this.state.cartItems;

		developer.quantity = 1;

		cartItems.push(developer);

		this.setState({
			cartItems: cartItems
		});

		// Keep Cart state by saving cartItems in local storage
		localStorage.cartItems = JSON.stringify(cartItems);
	},

	removeFromCart: function(developer){
		var cartItems = this.state.cartItems;
		// var index = -1;

		var index = cartItems.indexOf(developer);

		if(index > -1) {
			cartItems.splice(index, 1);

			this.updateCartTotal(cartItems);
		}
	},

	isDeveloperInCart: function(developer){
		var cartItems = this.state.cartItems;
		var index = -1;

		cartItems.forEach(function(dev, i){
			if(dev.username == developer.username){
				index = i;
			}
		});
		
		return index;
	},

	updateCartTotal: function(cartItems) {
		var total = 0;
		cartItems.forEach(function(dev){
			total += Number(dev.price) * Number(dev.quantity);
		});
		this.setState({
			cartTotal: total,
			cartItems: cartItems
		});
		localStorage.cartItems = JSON.stringify(cartItems);
	},

	render: function(){
		
		return (
			<div>
				<header className="main-header">
			        <div className="container">
			            <h1>Developer Shop</h1>
			            <p>Get the Right Developer for your Right Project. </p>
			        </div>
			    </header>

				<DeveloperList developers={this.state.developers} 
					onAdd={this.onAdd} />
				
				<Cart developers={this.state.cartItems} total={this.state.cartTotal}
					onRemove={this.onRemove}
					onChange={this.onChange}
					onSubmit={this.onSubmit}/>
			</div>
		);
	}

});

module.exports = Home;