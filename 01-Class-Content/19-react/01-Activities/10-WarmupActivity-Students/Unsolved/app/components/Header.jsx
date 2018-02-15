// Include React
var React = require("react");

// Create the Header component
// Notice how Header uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component
var Header = React.createClass({
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-body">A Simple Panel</div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Header;
