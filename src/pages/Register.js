import React,{Component} from 'react'
import {Form, Button} from 'react-bootstrap'
import './Register.css'

class Register extends Component{
  state = {
    username: '',
    password: ''
  }
  submitData = (event)=> {
    event.preventDefault()
    if(this.state.username!=='admin'){
      this.props.history.push('/about?success=true', {data: this.state})
    }else{
      this.props.history.push('/about?success=false')
    }
    console.log(this.state)
  }
  changeText = (event)=> {
    this.setState({[event.target.name]:event.target.value})
  }
  render(){
    return(
      <div className="d-flex vh-100 justify-content-center align-items-center">
        <Form onSubmit={this.submitData} className="form-register">
          <h1>Register</h1>
          <hr />
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control name="username" onChange={(event)=>this.changeText(event)} type="text" placeholder="Enter your username" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" onChange={(event)=>this.changeText(event)} type="password" placeholder="Enter your password" />
          </Form.Group>
          <Button type="submit">Register</Button>
        </Form>
      </div>
    )
  }
}

export default Register