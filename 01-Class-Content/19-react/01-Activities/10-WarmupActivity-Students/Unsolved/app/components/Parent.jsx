// Include React
var React = require("react");
var Child = require("./Child.jsx")

// Create the Header component
// Notice how Header uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component
var Parent = React.createClass({
  render: function() {
    return (
      <div className = "container">
        <div className="panel panel-default">
          <div className="panel-body">Parent</div>
        </div>
        <Child />
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Parent;
