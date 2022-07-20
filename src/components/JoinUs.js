import {Form, Container, Row, Col, Button, Modal} from "react-bootstrap"
import {useNavigate} from 'react-router-dom'
import React, { useState } from 'react'


function JoinUs() {
  const navigate = useNavigate()
  const [show, setShow] = useState(false);

  const handleClose = () =>{
    setShow(false);
    navigate("/home");

  } 
  const handleShow = () => setShow(true);

  return (
    <div>
       
    <Container className="mt-5 mb-5 d-flex justify-content-center" >
   
    <span class="border  pt-5 pb-5 px-5 rounded border-danger shadow p-3 mb-5 bg-white">
    <h2 className="mb-5"> Join Our Team </h2>

    <Form>

    <Row className="mb-3">
        <Form.Group as={Col} >
          <Form.Label>First Name</Form.Label>
          <Form.Control placeholder="Enter your first name" />
        </Form.Group>

        <Form.Group as={Col} >
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>
      </Row>

      <Row className="mb-3" >
        <Form.Group as={Col} >
          <Form.Label>Last Name</Form.Label>
          <Form.Control placeholder="Enter your last name" />
        </Form.Group>

        <Form.Group as={Col} >
          <Form.Label>Phone Number</Form.Label>
          <Form.Control placeholder="Enter your phone number" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
      <Form.Group className="position-relative">
            <Form.Label>Veterinary Degree</Form.Label>
            <Form.Control type="file" name="file"/>
          </Form.Group>
        </Row>

        <div className='d-flex justify-content-center'>
        <Button variant="info" className='text-white'  onClick={handleShow}>
        Submit
      </Button>

      <Modal show={show} onHide={handleClose} 
      backdrop="static"keyboard={false}>

        <Modal.Header closeButton>
          <Modal.Title>Thank You For Applying</Modal.Title>
        </Modal.Header>
        <Modal.Body>We will review your application and contact you very soon.</Modal.Body>
        <Modal.Footer>
          <Button variant="info" className='text-white'  onClick={handleClose}>
            Close
          </Button>
        
        </Modal.Footer>
      </Modal>

      </div>

      </Form>
      </span>
      </Container>
    </div>
  )
}

export default JoinUs