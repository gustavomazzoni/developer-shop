var http = require('http');
var config = require('../../config');

var options = {
	hostname: config.server.hostname,
	port: config.server.port,
}

var developersPath = "/developers/";
var cartsPath = "/carts/";

module.exports = {

  // Load developers data from server
  getDevelopers: function(callbackFn) {
  	options.path = developersPath;
  	http.get(options, function (resp) {
		resp.on('data', function(result){
			// console.log('Developers: '+result);
			var developers = JSON.parse(result);
			callbackFn(developers);
	  	});
	}).on("error", function(e){
	  console.log("Error: " + e.message);
	});
  },

  // Load developers data from server
  getDeveloperById: function(id, callbackFn) {
  	options.path = developersPath + id;
  	http.get(options, function (resp) {
		resp.on('data', function(result){
			var developer = JSON.parse(result);
			callbackFn(developer);
	  	});
	}).on("error", function(e){
	  console.log("Error: " + e.message);
	});
  },

  // Send cart data to be saved on server
  saveCart: function(cartItems, cartTotal, callbackFn) {
  	var cart = {
  		cartItems: cartItems,
  		cartTotal: cartTotal
  	};

  	var postData = JSON.stringify(cart);

  	options.path = cartsPath;
	options.method = 'POST';
	options.headers = {
		// 'Content-Type': 'application/x-www-form-urlencoded',
		'Content-Type': 'application/json',
		'Content-Length': postData.length
	}
  	
  	var req = http.request(options, function(res) {
		console.log('STATUS: '+res.statusCode);
		// console.log('HEADERS: '+JSON.stringify(res.headers));
		// res.setEncoding('utf8');
		var data = '';
		res.on('data', function(chunk) {
			data+=chunk;
		});
		res.on('end', function() {
			var cart = JSON.parse(data);
			callbackFn(cart);
		})
	});

	req.on('error', function(e) {
		console.log('Problem with request: '+e.message);
	});

	//setting the request contenet type to application/json
	req.setHeader('Content-Type','application/json');
	// write data to request body
	req.write(postData);
	req.end();
  },

  // Get cart data from server
  getCartById: function(id, callbackFn) {
  	options.path = cartsPath + id;
  	http.get(options, function (resp) {
		resp.on('data', function(result){
			var cart = JSON.parse(result);
			callbackFn(cart);
	  	});
	}).on("error", function(e){
	  console.log("Error: " + e.message);
	});
  }

};