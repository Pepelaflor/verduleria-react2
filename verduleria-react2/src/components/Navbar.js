import { dom } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom'



export default function NavBar () {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand href="/">La verduleria</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/nosotros">Nosotros</Nav.Link>
        <Nav.Link as={Link} to="/productos">Catalogo</Nav.Link>
        <Nav.Link className='carrito' as={Link} to="/cart"><CartWidget/></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
}
