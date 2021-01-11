import React, { Component } from 'react'
import cinemaList from '../dummy/cinemaList'

export default class CinemaDetail extends Component {
  state = {
    cinema: cinemaList.filter((item)=> item.id === Number(this.props.match.params.id))
  }
  render() {
    return (
      <div className="vh-100 d-flex justify-content-center align-items-center h1">
        {this.state.cinema[0].id}
        <img src={this.state.cinema[0].image} alt={this.state.cinema[0].name} />
      </div>
    )
  }
}
