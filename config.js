module.exports = {
  database: process.env.MONGO_URI || 'localhost/developer-shop',

  host: 'http://mazzoni-developer-shop.herokuapp.com',

  // Using mikedeboer GitHub API for NodeJS (https://github.com/mikedeboer/node-github)
  github: {
    // required
    version: "3.0.0",
    // optional
    debug: true,
    protocol: "https",
    host: "api.github.com", // should be api.github.com for GitHub
    // pathPrefix: "/api/v3", // for some GHEs; none for GitHub
    timeout: 5000,
    headers: {
    	"user-agent": "Developer-Shop-App" // GitHub is happy with a unique user agent
    },
    org: "pinterest"
  }
};