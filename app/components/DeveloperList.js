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
			<div className="row">
				<div className="col-lg-12">
					<h2 className="page-header">Developer List</h2>
				</div>
				{developers}
			</div>
   		)

	}

});

module.exports = DeveloperList;