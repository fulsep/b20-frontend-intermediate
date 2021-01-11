import React, {Component} from 'react'
import {Navbar as NavbarBootstrap, Nav, NavDropdown, Container} from 'react-bootstrap'
import {FaSearch} from 'react-icons/fa'

import logo from '../assets/logo.png'
import profile from '../assets/profile-nav.png'
import './Navbar.css'

class Navbar extends Component{
  render(){
    return(
      <NavbarBootstrap className="nb" bg="light" variant="light">
        <Container>
          <NavbarBootstrap.Brand>
            <img src={logo} alt="Tickitz" />
          </NavbarBootstrap.Brand>
          <NavbarBootstrap.Collapse>
            <Nav className="mr-auto">
              <Nav.Link>Movie</Nav.Link>
              <Nav.Link>Cinema</Nav.Link>
              <Nav.Link>Buy Tickets</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <NavDropdown className="d-flex mx-2 justify-content-center align-items-center" title="Location">
                <NavDropdown.Item>Jakarta</NavDropdown.Item>
                <NavDropdown.Item>Bandung</NavDropdown.Item>
                <NavDropdown.Item>Surabaya</NavDropdown.Item>
              </NavDropdown>
              <Nav.Item className="d-flex mx-2 justify-content-center align-items-center">
                <FaSearch />
              </Nav.Item>
              <Nav.Item>
                <img src={profile} alt="Profile" />
              </Nav.Item>
            </Nav>
          </NavbarBootstrap.Collapse>
        </Container>
      </NavbarBootstrap>
    )
  }
}

export default Navbar