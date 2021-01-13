import React, { Component } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'

import Navbar from '../components/Navbar';
import ProgressBar from '../components/ProgressBar';
import Seat from '../components/Seat';
import filmList from '../dummy/filmList'

class Home extends Component {
  state = {
    filmList,
    pc: 0
  };
  goToDetail = (id)=> {
    this.props.history.push(id, {movieId: id})
  }

  setPercentage = ()=>{
    setInterval(()=>{
      if(this.state.pc < 100){
        const {pc} = this.state
        this.setState({pc: pc+1})
      }
    },100)
  }

  componentDidMount(){
    this.setPercentage()
  }

  render() {
    const { filmList, pc } = this.state;
    return (
      <>
        <Navbar />
        <Container>
          <Row>
            {filmList.map((item)=>(
              <Link to={`/movie/${item.id}`}>
                <Card className="mx-3">
                  <div>
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="text-center">
                    <span className="h4">{item.name}</span>
                  </div>
                </Card>
              </Link>
            ))}
          </Row>
          <Row>
            <Col className="text-center">
              <ProgressBar percentage={pc} />
              <Button onClick={this.setPercentage}>Add percentage</Button>
            </Col>
          </Row>
          <Row>
            {[...Array(20)].map((val,index)=>(
              <Col>
                <Seat loveNest={index===10?true:false}/>
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default Home;
