// var React = require('react');
// var ReactDOM = require('react-dom');
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
require('./style.css');

// components are concerned w/ 3 things: state, lifecycle event, UI

class App extends Component {
  render() { // used to describe lifecycle of component
    return (
      // <div>
      //   <img
      //     src={this.props.img}
      //     alt='Avatar'
      //     style={{width: 100, height: 100}}
      //   />
      //   <h1>Name: {this.props.name}</h1>
      //   <h3>Username: {this.props.username}</h3>
      // </div>
      <div>Hello World!</div>
    );
  }
}

// Badge.propTypes = {
//   img: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   username: PropTypes.string.isRequired,
// }

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
