var React = require('react');

var DeveloperItem = React.createClass({


	handleClick: function(){
		this.props.onAdd(this.props.developer);
	},

	render: function(){
		var developer = this.props.developer;
		return (
			<div className="col-md-3 col-sm-4">
                <div className="dev-panel panel panel-default text-center">
                    <div className="panel-heading">
                    	<img className="avatar" 
                    		width="80px" 
                    		src={developer.photo_url}/>
                    	<div className="dev-info text-left">
						    <h4 className="heading">{developer.username}</h4>
						    <p>{developer.name}</p>
						</div>
                    </div>
                    <div className="dev-content panel-body">
                    	<div>
                    		<strong className="price">${developer.price}</strong>
                        	<span className="text-muted">/per hour</span>
                    	</div>
                    	<div className="dev-stats">
                    	    <div className="dev-stat">
					          <strong className="dev-stat-count">{developer.followers_count}</strong>
					          <span className="text-muted">Followers</span>
					        </div>
					        <div className="dev-stat" href="#">
					          <strong className="dev-stat-count">{developer.repos_count}</strong>
					          <span className="text-muted">Repos</span>
					        </div>
					        <div className="dev-stat" href="#">
					          <strong className="dev-stat-count">{developer.forks_count}</strong>
					          <span className="text-muted">Forks</span>
					        </div>
					        <div className="dev-stat" href="#">
					          <strong className="dev-stat-count">{developer.stargazers_count}</strong>
					          <span className="text-muted">Stars</span>
					        </div>
						</div>
                        <a onClick={this.handleClick} className="btn btn-primary btn-outline">Adicionar ao carrinho</a>
                    </div>
                </div>
            </div>
		)

	}

});

module.exports = DeveloperItem;