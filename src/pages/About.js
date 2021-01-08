import React,{Component} from 'react'
import qs from 'querystring'

class About extends Component{
  state = {
    background: 'white',
    username: ''
  }
  componentDidMount(){
    const params = qs.parse(this.props.location.search.slice(1))
    if(params.success !== "true"){
      this.props.history.push('/register?error=used')
    }
    if(params.color){
      this.setState({background: params.color})
    }
    if(this.props.location.state){
      const {data} = this.props.location.state
      if(data && data.username){
        this.setState({username: data.username})
      }
    }
  }
  render(){
    return(
      <React.Fragment>
        <div className={`vh-100 bg-${this.state.background}`}>
          Register Successfully, welcome {this.state.username}
        </div>
      </React.Fragment>
    )
  }
}

export default About