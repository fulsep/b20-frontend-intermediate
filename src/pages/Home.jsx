import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {Link} from 'react-router-dom'

import Navbar from '../components/Navbar';
import filmList from '../dummy/filmList'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmList
    };
  }
  goToDetail = (id)=> {
    this.props.history.push(id, {movieId: id})
  }

  render() {
    const { cinemaList: list, filmList } = this.state;
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
        </Container>
      </>
    );
  }
}

export default Home;
