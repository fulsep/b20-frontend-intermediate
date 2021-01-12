import React, { Component } from 'react';
import {
  Card, Row, Col, Button,
} from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class CinemaCard extends Component {
  // constructor(props) {
  //   super(props);
  //   this.addToCart = this.addToCart.bind(this);
  // }

  addToCart = (id) => {
    const { history } = this.props;
    history.push(`/cart/add/${id}`);
  }

  bookNow = (id) => {
    const { history, movieId } = this.props;
    history.push(`/select-seat/${id}`, {movieId});
  }

  render() {
    const { data } = this.props;
    return (
      <Card body>
        <Row>
          <Col>
            <img src={data.image} alt={data.name} />
          </Col>
          <Col>
            <div className="h4">{data.name}</div>
            <small className="text-muted">{data.address}</small>
          </Col>
        </Row>
        <Row>
          {data.time.map((item) => (
            <Col key={Number(item.id)} md={3}>
              <small>{item.readable}</small>
            </Col>
          ))}
        </Row>
        <Row>
          <Col>Price</Col>
          <Col className="text-right">
            $
            {data.price}
            /seat
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            {/* <Button>Book now</Button> */}
            <Button onClick={() => this.bookNow(data.id)}>Book Now</Button>
            {/* <Link className="btn btn-primary" to={`/cinema/${data.id}`}>Book Now</Link> */}
          </Col>
          <Col className="text-center">
            <Button onClick={() => this.addToCart(data.id)}>Add to cart</Button>
          </Col>
        </Row>
      </Card>
    );
  }
}

// CinemaCard.propTypes = {
//   history: PropTypes.objectOf(PropTypes.object()),
//   data: PropTypes.objectOf(PropTypes.object()),
// };

// CinemaCard.defaultProps = {
//   history: {},
//   data: {},
// };

export default withRouter(CinemaCard);
