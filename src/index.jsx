import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Board from './component/board';
import Option from './component/option';
import Ads from './component/ads';

class Index extends Component {
  constructor(){
    super()
  }

  render() {
    return (
      <div>
        <Board />
        <Option />
        <Ads />
      </div>
    )
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('app')
);
