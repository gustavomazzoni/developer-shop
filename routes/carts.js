var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Cart = require('../models/Cart.js');

/* POST /carts */
router.post('/', function(req, res, next) {
	var items = [];
	req.body.cartItems.forEach(function(developer){
		var item = {
			developer_id: developer._id,
			quantity: developer.quantity,
			price: developer.price
		};
		items.push(item);
	});
	var cart = {
		items: items,
  		total: Number(req.body.cartTotal),
	};

	Cart.create(cart, function (err, post) {
		if (err) return next(err);
		res.json(post);
	});
});

/* GET /carts/id */
router.get('/:id', function(req, res, next) {
  Cart.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /carts/:id */
// router.put('/:id', function(req, res, next) {
//   Cart.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

module.exports = router;