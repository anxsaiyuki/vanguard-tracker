import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Board from './component/board';
import Option from './component/option';

class Index extends Component {
  constructor(){
    super()
  }

  render() {
    return (
      <div>
        <Board />
        <Option />
      </div>
    )
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('app')
);
