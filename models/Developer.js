var mongoose = require('mongoose');

var DeveloperSchema = new mongoose.Schema({
  username: String,
  name: String,
  photo_url: String,
  followers_count: 0,
  repos_count: 0,
  forks_count: 0,
  stargazers_count: 0,
  price: Number,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Developer', DeveloperSchema);