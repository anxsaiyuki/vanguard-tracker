import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Circle from './circle';

import '../css/board.css';

export default class Board extends Component {
  constructor(){
    super()
  }

  render() {
    return (
      <div id="board">
        Board
        <div id="circles">
          row/column
          <Circle />
        </div>
      </div>
    )
  }
}

