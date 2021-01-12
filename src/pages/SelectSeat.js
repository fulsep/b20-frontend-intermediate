import React, { Component } from 'react'
import { Button, Row, Col, Container } from 'react-bootstrap'

import Navbar from '../components/Navbar'
import cinemaList from '../dummy/cinemaList'
import filmList from '../dummy/filmList'

export default class SelectSeat extends Component {
    state = {
        cinema: {},
        movie: {},
        selectedSeat: []
    }
    componentDidMount(){
        const {movieId} = this.props.location.state
        const {id: cinemaId} = this.props.match.params
        this.setState({
            cinema: cinemaList.filter(item=>item.id===Number(cinemaId))[0],
            movie: filmList.filter(item=>item.id===Number(movieId))[0],
        })
    }
    componentDidUpdate(){
        console.log(this.state.selectedSeat)
    }
    selectSeat = (id)=> {
        const {selectedSeat} = this.state
        let newArray = []
        if(selectedSeat.indexOf(id)===-1){
            selectedSeat.push(id)
            newArray = selectedSeat
        }else{
            newArray = selectedSeat.filter(item=>item!==id)
        }
        this.setState({
            selectedSeat: newArray
        })
    }
    render() {
        const {movie, cinema, selectedSeat} = this.state
        return (
            <>
            <Navbar />
            <Container>
                <Row>
                    <Col md={8}>
                        <Row>
                        {[...Array(20)].map((_item, index)=>(
                            <Col md={3}>
                                <Button 
                                variant={`${selectedSeat.indexOf(index)!==-1?'default':'primary'}`}
                                onClick={()=>this.selectSeat(index)}>{index+1}</Button>
                            </Col>
                        ))}
                        </Row>
                    </Col>
                    <Col md={4}>
                        <Row>
                            <Col md={12}>
                                <img src={movie.image} alt={movie.name} />
                            </Col>
                            <Col md={12}>{movie.name}</Col>
                        </Row>
                        <Row>
                            <Col>Price</Col>
                            <Col>{cinema.price}</Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            </>
        )
    }
}
