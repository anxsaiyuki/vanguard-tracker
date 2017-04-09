import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { POWER_INTERVAL, POWER_LIMIT } from '../config.js';

import '../css/option.css';


export default class Option extends Component {
  constructor(){
    super();


    this.state = {
      power: []
    }
  }

  render() {

    let optionItem = this.state.power.map(function(item){
      return (
        <li className="optionItem">{item}</li>
      )
    });

    return (
      <div id="optionWrapper">
        Option
        <ul id="optionList">
          {optionItem}
        </ul>
      </div>
    )
  }
}

