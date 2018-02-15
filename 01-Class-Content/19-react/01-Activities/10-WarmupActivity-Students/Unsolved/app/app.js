// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

var Parent = require("./components/Parent.jsx");

// This code here allows us to render our main component
ReactDOM.render(  <div className="main-container">
    <Parent />

  </div>,

document.getElementById("app"));
