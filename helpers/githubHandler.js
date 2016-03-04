var Developer = require('../models/Developer');

module.exports = function(github, org){

  github.orgs.getMembers({
    // page: "Number",
    // per_page: "Number",
      org: org
  }, function(err, res) {
    if (err) {
      console.log('Error: '+err);
      return;
    }
    
    // If no error, Save ORG members to the database
    var developers = res;
    developers.forEach(function(data){

      // Construct a new developer object with basic infos from github
      var developer = {
        username: data['login'],
        name: "",
        company: "",
        photo_url: data['avatar_url'],
        followers_count: 0,
        repos_count: 0,
        forks_count: 0,
        stargazers_count: 0,
        price: 0
      };


      // Get User's basic info
      github.user.getFrom({
        user: developer.username
      }, function(err, res) {
        if (err) {
          console.log('Error: '+err);
          return;
        }
        // Save user's name
        developer.name = res['name'];
        developer.company = res['company'];
        // Save how many followers user has
        developer.followers_count = Number(res['followers']);
        // Save how many repos user has
        developer.repos_count = Number(res['public_repos']);
      });

      // Get Repos from user
      github.repos.getFromUser({
        user: developer.username
      }, function(err, res) {
        if (err) {
          console.log('Error: '+err);
          return;
        }
        
        var repos = res;
        
        repos.forEach(function(data){
          developer.forks_count += Number(data['forks_count']);
          developer.stargazers_count += Number(data['stargazers_count']);

          // Get Commits from user
          // github.repos.getCommits({
          //   user: developer.username,
          //   repo: data['name']
          // }, function(err, res) {
          //   if (err) return;
          //   // Save how many commits user has
          //   developer.commits_count += Number(res.length);
          // });
        });

        // Calcule the developer's price
        var price = (developer.followers_count * 2);
        price += (developer.repos_count * 1);
        price += (developer.forks_count * 3);
        price += (developer.stargazers_count * 3);
        developer.price = price;


        // Print loaded developer
        console.log(JSON.stringify(developer));

        // Create a new model instance with our object
        var developerEntry = new Developer(developer);

        // Save it to the database
        developerEntry.save(function(err) {
          if (!err) {
            // Everything is cool.
            console.log('Developer saved');
          } else {
            // Error
            console.log('Error: '+err);
          }
        });

      });

    });  
  });

};