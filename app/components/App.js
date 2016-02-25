var React = require('react');

// var Search = require('./Search');
var DeveloperList = require('./DeveloperList');
var Cart = require('./Cart');


var App = React.createClass({

	getInitialState: function(){

		// Extract the developers from local storage

		var developers = [];
		var cart = [];

		developers.push({
			developer: {
				username: "brenoc",
				price: "$240"
			}
		});
		developers.push({
			developer: {
				username: "firstdoit",
				price: "$410"
			}
		});
		
		if(localStorage.developers){
			developers = JSON.parse(localStorage.developers);
		}

		if(localStorage.cart){
			cart = JSON.parse(localStorage.cart);
		}

		return {
			developers: developers,
			cart: cart
		};
	},

	toggleDeveloper: function(developer){

		if(this.isDeveloperInCart(developer)){
			this.removeFromCart(developer);
			this.addToDevelopers(developer);
		}
		else{
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

		localStorage.developers = JSON.stringify(developers);
	},

	removeFromDevelopers: function(developer){

		var developers = this.state.developers;
		var index = -1;

		for(var i = 0; i < developers.length; i++){

			if(developers[i].developer == developer){
				index = i;
				break;
			}

		}

		// If it was found, remove it from the developers array

		if(index !== -1){
			
			developers.splice(index, 1);

			this.setState({
				developers: developers
			});

			localStorage.developers = JSON.stringify(developers);
		}

	},

	addToCart: function(developer){

		var cart = this.state.cart;

		cart.push({
			developer: developer
		});

		this.setState({
			cart: cart
		});

		localStorage.cart = JSON.stringify(cart);
	},

	removeFromCart: function(developer){

		var cart = this.state.cart;
		var index = -1;

		for(var i = 0; i < cart.length; i++){

			if(cart[i].developer == developer){
				index = i;
				break;
			}

		}

		// If it was found, remove it from the cart array

		if(index !== -1){
			
			cart.splice(index, 1);

			this.setState({
				cart: cart
			});

			localStorage.cart = JSON.stringify(cart);
		}

	},

	isDeveloperInCart: function(developer){

		var cart = this.state.cart;

		for(var i = 0; i < cart.length; i++){

			if(cart[i].developer == developer){
				return true;
			}

		}

		return false;
	},

	search: function(text){
		
		var self = this;

	},

	render: function(){
		
		return (
			<div>
				<div className="row">
					<h1>Dev Shop</h1>
				</div>

				<DeveloperList developers={this.state.developers} onClick={this.toggleDeveloper} />
				<br/>
				<div className="row">
					<Cart developers={this.state.cart} onClick={this.toggleDeveloper} />
				</div>
			</div>
		);
	}

});

module.exports = App;