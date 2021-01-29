import React, { Component } from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import {Container, Nav, Navbar, Row, Col, Jumbotron, Table, Form, Button} from 'react-bootstrap'
import {FaCog, FaDatabase, FaUser} from 'react-icons/fa'
import http from '../helpers/http'
import {parsingDMY} from '../helpers/date'
import {connect} from 'react-redux'
export default class Admin extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar variant="dark" color="dark" bg="dark" expand="md">
                    <Container>
                        <Navbar.Brand>Admin Pages</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse>
                            <Nav className='ml-auto'>
                                <Link className="nav-link" to='/logout'>Logout</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Container className="mt-3">
                    <Row>
                        <Col md={3}>
                            <Nav className="flex-column">
                                <Nav.Item className="d-flex flex-row align-items-center">
                                <FaUser /><Link className="nav-link" to="/admin/profile">Profile</Link>
                                </Nav.Item>
                                <Nav.Item className="d-flex flex-row align-items-center">
                                <FaCog /><Link className="nav-link" to="/admin/settings">Settings</Link>
                                </Nav.Item>
                                <Nav.Item className="d-flex flex-row align-items-center">
                                <FaDatabase /><Link className="nav-link" to="/admin/manage_user">Manage User</Link>
                                </Nav.Item>
                                <Nav.Item className="d-flex flex-row align-items-center">
                                <FaDatabase /><Link className="nav-link" to="/admin/manage_movie">Manage Movie</Link>
                                </Nav.Item>
                                <Nav.Item className="d-flex flex-row align-items-center">
                                <FaDatabase /><Link className="nav-link" to="/admin/manage_genre">Manage Genre</Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col md={9}>
                            <Switch>
                                <Route path='/admin' exact>
                                    <Jumbotron>
                                        <h1>Welcome to admin panel</h1>
                                        <p>Here you can manage data for your system!</p>
                                    </Jumbotron>
                                </Route>
                                <Route path="/admin/profile">
                                Hello  
                                </Route>
                                <Route path="/admin/settings">
                                Settings  
                                </Route>
                                <Route path="/admin/manage_user">
                                Manage User
                                </Route>
                                <Route path="/admin/manage_movie" exact>
                                <MovieTable />  
                                </Route>
                                <Route path="/admin/manage_movie/edit/:id" component={WrappedEditMovie} />
                                <Route path="/admin/manage_genre">
                                Manage Genre  
                                </Route>
                            </Switch>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

class MovieTable extends Component{
    state = {
        movies: []
    }
    async componentDidMount(){
        const response = await http().get('movies')
        this.setState({
            movies: response.data.results
        })
    }
    render(){
        const {movies} = this.state
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Release Date</th>
                        <th>Created By</th>
                        <th>Option</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map(movie => {
                        return (
                            <tr key={String(movie.id)}>
                                <td>{movie.id}</td>
                                <td>{movie.name}</td>
                                <td>{parsingDMY(movie.releaseDate)}</td>
                                <td>{movie.createdBy}</td>
                                <td>
                                    <Link to={`/admin/manage_movie/edit/${movie.id}`} className="btn btn-sm btn-warning">Edit</Link>
                                    {' '}
                                    <Link to={`/admin/manage_movie/delete/${movie.id}`} className="btn btn-sm btn-danger">Delete</Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        )
    }
}

class EditMovie extends Component{
    state = {
        movie: {}
    }
    async componentDidMount(){
        const {id} = this.props.match.params
        const response = await http().get(`movies/${id}`)
        this.setState({
            movie: response.data.results
        })
    }
    saveData = async (e)=> {
        e.preventDefault()
        const {id} = this.props.match.params
        const {name} = this.state.movie
        const data = new URLSearchParams();
        data.append('name', name)
        const response = await http(this.props.auth.token).patch(`movies/${id}`, data)
        window.alert(response.data.message)
    }
    changeText = (event)=> {
        const {movie} = this.state
        this.setState({movie:{
            ...movie,
            [event.target.name]:event.target.value
        }})
    }
    render(){
        const {movie} = this.state
        return(
            <React.Fragment>
                {Object.keys(movie).length > 0 &&(
                    <Form onSubmit={this.saveData}>
                        <Form.Control type="text" onChange={this.changeText} name="name" defaultValue={movie.name} />
                        <Form.Control type="text" onChange={this.changeText} defaultValue={movie.releaseDate} name="releaseDate" />
                        <Form.Control type="text" onChange={this.changeText} defaultValue={movie.createdBy} name="createdBy" />
                        <Button type="submit" variant="warning">Save</Button>
                    </Form>
                )}
            </React.Fragment>
        )
    }
}

const WrappedEditMovie = connect(state=>({auth:state.auth}))(EditMovie)