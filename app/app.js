// var React = require('react');
// var ReactDOM = require('react-dom');
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// components are concerned w/ 3 things: state, lifecycle event, UI

class App extends Component {
  render() { // used to describe lifecycle of component
    return (
      <div>Hello World!</div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
