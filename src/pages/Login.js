import React,{Component} from 'react'
import {Form, Button, Alert} from 'react-bootstrap'
import {connect} from 'react-redux'
import './Register.css'

import {login, autoLogin} from '../redux/actions/auth'

class Register extends Component{
  state = {
    username: '',
    password: ''
  }
  submitData = (e)=> {
    e.preventDefault();
    const {username, password} = this.state
    this.props.login(username, password)
  }
  componentDidUpdate(){
    if(this.props.auth.token){
      const {from = null} = this.props.location.state
      this.props.history.push((from && from.pathname) || '/')
    }
  }
  componentDidMount(){
      const token = localStorage.getItem('token')
      console.log(token)
      if(token){
          this.props.autoLogin(token)
      }
  }
  changeText = (event)=> {
    this.setState({[event.target.name]:event.target.value})
  }
  render(){
    return(
      <div className="d-flex vh-100 justify-content-center align-items-center">
        <Form onSubmit={this.submitData} className="form-register">
          <h1>Login</h1>
          {this.props.auth.errorMsg!== '' && <Alert variant="danger">{this.props.auth.errorMsg}</Alert>}
          <hr />
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control name="username" onChange={(event)=>this.changeText(event)} type="text" placeholder="Enter your username" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" onChange={(event)=>this.changeText(event)} type="password" placeholder="Enter your password" />
          </Form.Group>
          <Button type="submit">Login</Button>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})
const mapDispatchToProps = {login, autoLogin}

export default connect(mapStateToProps, mapDispatchToProps)(Register)