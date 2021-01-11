import React, {Component} from 'react'
import {Card, Row, Col, Button} from 'react-bootstrap'
import {Link, withRouter} from 'react-router-dom'

class CinemaCard extends Component{
  addToCart = (id)=> {
    this.props.history.push(`/cart/add/${id}`)
  }
  render(){
    return(
      <Card body>
        <Row>
          <Col>
            <img src={this.props.data.image} alt="hiflix" />
          </Col>
          <Col>
            <div className="h4">{this.props.data.name}</div>
            <small className="text-muted">{this.props.data.address}</small>
          </Col>
        </Row>
        <Row>
          {this.props.data.time.map((item,value)=>{
            return(
              <Col md={3}>
                <small>{item.readable}</small>
              </Col>
            )
          })}
        </Row>
        <Row>
          <Col>Price</Col>
          <Col className="text-right">${this.props.data.price}/seat</Col>
        </Row>
        <Row>
          <Col className="text-center">
            {/* <Button>Book now</Button> */}
            <Link className="btn btn-primary" to={`/cinema/${this.props.data.id}`}>Book Now</Link>
          </Col>
          <Col className="text-center">
            <Button onClick={()=>this.addToCart(this.props.data.id)}>Add to cart</Button>
          </Col>
        </Row>
      </Card>
    )
  }
}

export default withRouter(CinemaCard)