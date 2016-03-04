var mongoose = require('mongoose');

var ItemSchema = new mongoose.Schema({
  developer_id: {type: mongoose.Schema.ObjectId, ref: 'DeveloperSchema'},
  quantity: Number,
  price: Number
});

var CartSchema = new mongoose.Schema({
  items: [ItemSchema],
  total: Number,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Cart', CartSchema);
