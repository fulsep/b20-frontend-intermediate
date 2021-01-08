import React,{Component} from 'react'
import {default as axios} from 'axios'
import {Container, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class Home extends Component{
  state = {
    characterList: []
  }
  async componentDidMount(){
    const {data} = await axios.get('https://rickandmortyapi.com/api/character')
    this.setState({characterList: data.results})
  }
  render(){
    return(
      <Container>
        <div className="my-5">
          <Link className='btn btn-primary' to='/about'>Go to about</Link>
        </div>
        <Row>
          {this.state.characterList.map((character, index)=>{
            return (
              <React.Fragment key={String(character.id)}>
                <Col md={4}>
                  <img src={character.image} alt={character.name} />
                  <div>{character.name}</div>
                  <div>{character.gender}</div>
                </Col>
              </React.Fragment>
            )
          })}
        </Row>
      </Container>
    )
  }
}

export default Home