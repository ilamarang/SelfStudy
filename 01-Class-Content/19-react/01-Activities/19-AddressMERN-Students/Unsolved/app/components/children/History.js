// Include React
var React = require("react");
var helpers = require(".././utils/helpers.js");

// Creating the Results component
var History = React.createClass({

  // Here we describe this component's render method

  //  On load display the number of clicks
  componentDidUpdate() {
  
    // The moment the page renders on page load, we will retrieve the previous click count.
    // We will then utilize that click count to change the value of the click state.
    helpers.getHistory()
      .then(function(docs) {
        // Using a ternary operator we can set newClicks to the number of clicks in our response object
        // If we don't have any clicks in our database, set newClicks to 0

        this.setState({
          address: docs
        });
        console.log("RESULTS", docs);

      }.bind(this));
  },

  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Results</h3>
        </div>
        <div className="panel-body text-center">
          <h1>Address</h1>

        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = History;
