var server = {};
if (process.env.NODE_ENV) {
	server = {
		protocol: "http",
		hostname: "mazzoni-developer-shop.herokuapp.com",
		port: 80
	};
} else {
	server = {
		protocol: "http",
		hostname: "localhost",
		port: 8080
	};
}
module.exports = {
  database: process.env.MONGOLAB_URI || 'localhost/developer-shop',

  server: server,

  // Using mikedeboer GitHub API for NodeJS (https://github.com/mikedeboer/node-github)
  github: {
    // required
    version: "3.0.0",
    // optional
    debug: true,
    protocol: "https",
    host: "api.github.com", // should be api.github.com for GitHub
    // pathPrefix: "/api/v3", // for some GHEs; none for GitHub
    timeout: 10000,
    headers: {
    	"user-agent": "Developer-Shop-App" // GitHub is happy with a unique user agent
    },
    org: "pinterest"
  }
};