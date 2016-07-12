import React from "react";
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'

var HelloMessage = React.createClass({
  render() {
    return (
      <div className="xl-tac xl-p24 xl-m40 xl-ba-black-500 xl-co-white xl-br16">
        <em className="icon-flexiblegs xl-pr16"></em>
        <span className="xl-vam xl-fs24 xl-fw300">Hello <span className="xl-fw600">{this.props.name}</span></span>
      </div>
    );
  }
});

var Homepage = React.createClass({
  render() {
    return (
      <HelloMessage name="Flexible Grid System" />
    );
  }
});

var Install = React.createClass({
  render() {
    return (
      <HelloMessage name="Install" />
    );
  }
});

var NotFound = React.createClass({
  render() {
    return (
      <HelloMessage name="Not Found" />
    );
  }
});

var routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Homepage}/>
    <Route path="/install" component={Install}/>
    <Route path="*" component={NotFound}/>
  </Router>
)

ReactDOM.render(routes, document.getElementById('app'));
