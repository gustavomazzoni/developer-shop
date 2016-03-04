var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var browserHistory = require('react-router').browserHistory;
var IndexRoute = require('react-router').IndexRoute;
var App = require('./components/App');
var Home = require('./components/Home');
var Purchase = require('./components/Purchase');

ReactDOM.render(
	<Router history={browserHistory}>
	    <Route path="/" component={App}>
	    	<IndexRoute component={Home}/>
	    	<Route path="purchase/:id" component={Purchase}/>
	    </Route>
	</Router>,

  // <App />,
  document.getElementById('main')
);
