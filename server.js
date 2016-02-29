var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var config = require('./config');
var developers = require('./routes/developers');
var Developer = require('./models/Developer');
var GitHubApi = require("github");
var githubHandler = require('./helpers/githubHandler');

// Connect to our mongo database
mongoose.connect(config.database, function(err) {
    if(err) {
        console.log('connection error', err);
    } else {
        console.log('connection successful');
    }
});

// Put database on initial config
// Developer.remove({}, function(err) { 
//    console.log('Developer database empty') 
// });

// Create an instance of GitHubApi then pass it to githubHandler
// var github = new GitHubApi(config.github);
// githubHandler(github, config.github.org);

// Create an express instance and set a port variable
var app = express();
app.set('port', process.env.PORT || 8080);

// API Developers Route
app.use('/developers', developers);

// Set /public as our static content dir
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});