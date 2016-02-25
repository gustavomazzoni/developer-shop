var React = require('react');
var DeveloperItem = require('./DeveloperItem');

var DeveloperItem = React.createClass({

	handleClick: function(){
		this.props.onClick(this.props.developer);
	},

	render: function(){

		// var cn = "list-group-item";

		return (
			<div className="col-md-4 developer-listing" onClick={this.handleClick}>
				<div className="media">
                  <div className="pull-left">
                      <span className="fa-stack fa-2x">
                            <i className="fa fa-circle fa-stack-2x text-primary"></i>
                            <i className="fa fa-user fa-stack-1x fa-inverse"></i>
                      </span> 
                  </div>
                  <div className="media-body">
                      <h4 className="media-heading">{this.props.developer.username}</h4>
                      <p>{this.props.developer.price}</p>
                  </div>
                </div>
			</div>
		)

	}

});

module.exports = DeveloperItem;