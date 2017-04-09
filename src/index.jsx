import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Board from './component/board';

class Index extends Component {
  constructor(){
    super()
  }

  render() {
    return (
      <div>
        <Board />
      </div>
    )
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('app')
);
