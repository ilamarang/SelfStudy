// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// This code renders a simple HTML Div.
// The key takeaway here is that we render an ENTIRE DIV.
// Note that ReactDOM.render cannot render a block of HTML elements
// without them all fitting within a single parent div or container.

ReactDOM.render(
  <div className="jumbotron">
    <h1 className="display-3">Hello, world!</h1>
    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <p className="lead">
        <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </p>
  </div>
, document.getElementById("app"));
