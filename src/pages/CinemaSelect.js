import React,{Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'

import CinemaCard from '../components/CinemaCard';
import cinemaList from '../dummy/cinemaList';

class CinemaSelect extends Component{
    state = {
        cinemaList
    }
    render(){
        const {cinemaList: list} = this.state
        return(
            <Container>
                <Row>
                    {list.map((item) => (
                    <Col key={String(item.id)} md={4}>
                        <CinemaCard data={item} />
                    </Col>
                    ))}
                </Row>
            </Container>
        )
    }
}

export default CinemaSelect