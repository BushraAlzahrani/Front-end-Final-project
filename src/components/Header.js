import React from 'react'
import {Navbar, Nav, Container} from "react-bootstrap"
import imgLogo from './images/pet-care-logo.png'

function Header() {
  return (


    <div>

<Navbar bg="info" variant="dark">
        <Container>
          <Navbar.Brand href="/home"><img className='rounded' src={imgLogo} height="50"/> </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">HOME</Nav.Link>
            <Nav.Link href="/consult">CONSULT</Nav.Link>
            <Nav.Link href="/vets">OUR VETERINARIANS</Nav.Link>
             <Nav.Link href="/inquiries">Q & A</Nav.Link>
            <Nav.Link href="/joinus">JOIN US</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header