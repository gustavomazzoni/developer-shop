var React = require('react');
var DeveloperItem = require('./DeveloperItem');

var DeveloperList = React.createClass({

	render: function(){

		var self = this;

		var developers = this.props.developers.map(function(d) {

			// Passing the onClick callback of this DeveloperList to each DeveloperItem.

			return <DeveloperItem developer={d.developer} onClick={self.props.onClick} />
		});

		if(!developers.length){
			return null;
		}

		return (
			<section id="developers">
				<div className="container">
					<div className="row">
						<div>
							<h2 className="page-header">Developers</h2>
						</div>
						{developers}
					</div>
				</div>
			</section>
   		)

	}

});

module.exports = DeveloperList;