import React, { Component } from 'react'
import './Seat.css'

export default class Seat extends Component {
  render() {
    return (
      <label className="cb">
        <input type="checkbox" />
        <span className={`check ${this.props.loveNest&&'lovenest'}`} />
      </label>
    )
  }
}
