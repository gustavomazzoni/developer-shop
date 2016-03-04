var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Developer = require('../models/Developer.js');

/* GET /developers listing. */
router.get('/', function(req, res, next) {
  Developer.find(function (err, developers) {
    if (err) return next(err);
    res.json(developers);
  });
});

/* GET /developers/id */
router.get('/:id', function(req, res, next) {
  Developer.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* POST /developers */
// router.post('/', function(req, res, next) {
//   Developer.create(req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

/* PUT /developers/:id */
// router.put('/:id', function(req, res, next) {
//   Developer.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

module.exports = router;