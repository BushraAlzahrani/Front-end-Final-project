import React from 'react'
import {Navbar, Nav, Container} from "react-bootstrap"

function Header() {
  return (


    <div>

<Navbar bg="info" variant="dark">
        <Container>
          <Navbar.Brand href="/home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">HOME</Nav.Link>
            <Nav.Link href="/consult">CONSULT</Nav.Link>
            <Nav.Link href="/consult">OUR VETERINARIANS</Nav.Link>
             <Nav.Link href="/inquiries">Q & A</Nav.Link>
            <Nav.Link href="/joinus">JOIN US</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header