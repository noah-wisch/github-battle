import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// require('./index.css');

// components are concerned w/ 3 things: state, lifecycle event, UI

class App extends Component {
  render() { // used to describe lifecycle of component
    return(
      <div>Hello World!</div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

// var something = "something"
// if (true) {
//   var something = "something else"
// }
//
// console.log(something);
//
// let something = "something"
// if (true) {
//   something = "something else"
// }
//
// console.log(something)
