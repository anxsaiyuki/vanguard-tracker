import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../css/option.css';

export default class Option extends Component {
  constructor(){
    super()
  }

  render() {
    //FOR NOW, 20% WIDTH OF THE WINDOW
    return (
      <div id="option">
        Option
        <ul>

        </ul>
      </div>
    )
  }
}

