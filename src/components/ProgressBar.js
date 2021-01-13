import React, { Component } from 'react'

import './ProgressBar.css'

class ProgressBar extends Component {
  state = {
    percentage: 0
  }
  componentDidMount(){
    if(this.props.percentage){
      this.setState({percentage: this.props.percentage})
    }
  }
  componentDidUpdate(prevProps){
    if(this.props.percentage !==prevProps.percentage){
      this.setState({percentage: this.props.percentage})
    }
  }
  render() {
    const {percentage} = this.state
    return (
      <div className="pg-bar">
        <div style={{width: `${percentage}%`}} className="indicator"/>
      </div>
    )
  }
}

ProgressBar.defaultProps = {
  percentage: 0
}


export default ProgressBar