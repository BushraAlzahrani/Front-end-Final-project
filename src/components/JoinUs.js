import React from 'react'
import {Form, Container, Row, Col, Button} from "react-bootstrap"

function JoinUs() {
  return (
    <div>

    <Container className="mt-5 mb-5 d-flex justify-content-center" >
    <Form>

    <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control  placeholder="Enter your first name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>
      </Row>

      <Row className="mb-3" >
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
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
        <Button variant="info" className='text-white' type="submit">
        Submit
      </Button>
      </div>

      </Form>
      </Container>
    </div>
  )
}

export default JoinUs