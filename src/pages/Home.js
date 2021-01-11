import React,{Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'

import Navbar from '../components/Navbar'
import CinemaCard from '../components/CinemaCard'
import cinemaList from '../dummy/cinemaList'

class Home extends Component{
  state = {
    cinemaList: cinemaList
  }
  render(){
    return(
      <>
        <Navbar />
        <Container>
          <Row>
            {this.state.cinemaList.map((item, index)=>{
              return(
                <Col md={4}>
                  <CinemaCard data={item} />
                </Col>
              )
            })}
          </Row>
        </Container>
      </>
    )
  }
}

export default Home