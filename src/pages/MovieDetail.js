import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'

import Navbar from '../components/Navbar';
import CinemaCard from '../components/CinemaCard';
import cinemaList from '../dummy/cinemaList';
import filmList from '../dummy/filmList';

export default class MovieDetail extends Component {
    state = {
        cinemaList,
        movie: {

        }
    }
    componentDidMount(){
        const {id} = this.props.match.params
        const data = filmList.filter((item)=>item.id===Number(id))[0]
        this.setState({movie: data})
    }
    render() {
        const {cinemaList: list, movie} = this.state
        const {id} = this.props.match.params
        return (
            <>
                <Navbar />
                <Container>
                    <Row className="vh-50">
                        <Col>
                            <img src={movie.image} alt={movie.name} />
                        </Col>
                    </Row>
                    <Row>
                        {list.map((item) => (
                        <Col key={String(item.id)} md={4}>
                            <CinemaCard movieId={id} data={item} />
                        </Col>
                        ))}
                    </Row>
                </Container>
            </>
        )
    }
}
