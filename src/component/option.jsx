import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { POWER_INTERVAL, POWER_LIMIT } from '../config.js';

import '../css/option.css';


export default class Option extends Component {
  constructor(){
    super();

    var powers = [];
    for (var powerMutiplier = 1; powerMutiplier < POWER_LIMIT+1 ; powerMutiplier++) {
      powers.push(powerMutiplier*POWER_INTERVAL);
    }

    this.state = {
      powers: powers,
      sign: '+'
    }
  }


  powerClick(power) {
    console.log("POWER LEVEL: ", power);
  }

  toggleSign(sign){
    if(!sign || sign === "+"){
      this.setState({sign: '-'});
    } else {
      this.setState({sign: '+'});
    }
  }

  critClick(){
    console.log("clicked on crit");
  }


  render() {

    var context = this;
    let powerItem = this.state.powers.map( function(item) {
      return (
        <li unselectable="on" className="option-item" key={ item } onClick={ context.powerClick.bind(context, item) } >{ item }</li>
      )
    });

    return (
      <div id="option-wrapper">
        Option
        <ul id="option-list">
          <li unselectable="on" className="option-item" onClick={ this.toggleSign.bind(this, this.state.sign) } >{ this.state.sign }</li>
          { powerItem }
          <li unselectable="on" className="option-item" onClick={ this.critClick.bind(this) } > Critical </li>
        </ul>
      </div>
    )
  }
}

