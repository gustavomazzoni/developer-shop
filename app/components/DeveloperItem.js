var React = require('react');

var DeveloperItem = React.createClass({


	handleClick: function(){
		this.props.onClick(this.props.developer);
	},

	render: function(){

		return (
			<div className="col-md-3 col-sm-4">
                <div className="dev-panel panel panel-default text-center">
                    <div className="panel-heading">
                    	<img className="avatar" 
                    		width="80px" 
                    		src={this.props.developer.photo}/>
                    	<div className="dev-info text-left">
						    <h4 className="heading">{this.props.developer.username}</h4>
						    <p>{this.props.developer.name}</p>
						</div>
                    </div>
                    <div className="dev-content panel-body">
                    	<div>
                    		<strong className="price">${this.props.developer.price}</strong>
                        	<span className="text-muted">/per hour</span>
                    	</div>
                    	<div className="dev-stats">
                    	    <div className="dev-stat">
					          <strong className="dev-stat-count">{this.props.developer.followers_count}</strong>
					          <span className="text-muted">Followers</span>
					        </div>
					        <div className="dev-stat" href="#">
					          <strong className="dev-stat-count">{this.props.developer.repos_count}</strong>
					          <span className="text-muted">Repos</span>
					        </div>
					        <div className="dev-stat" href="#">
					          <strong className="dev-stat-count">{this.props.developer.forks_count}</strong>
					          <span className="text-muted">Forks</span>
					        </div>
					        <div className="dev-stat" href="#">
					          <strong className="dev-stat-count">{this.props.developer.stargazers_count}</strong>
					          <span className="text-muted">Stars</span>
					        </div>
						</div>
                        <a onClick={this.handleClick} className="btn btn-primary">Adicionar ao carrinho</a>
                    </div>
                </div>
            </div>
		)

	}

});

module.exports = DeveloperItem;