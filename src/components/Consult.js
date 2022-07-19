import React from 'react'
import {Form, Container, Row, Col, Button} from "react-bootstrap"

function Consult() {
  return (
    <div>
    
    <Container className="mt-5 mb-5 d-flex justify-content-center" >

            <Form>
            
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder="Your Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Your Pet Type</Form.Label>
                <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>Cat</option>
                    <option>Dog</option>
                    <option>Rabbit</option>
                    <option>Bird</option>
                </Form.Select>
                </Form.Group>
                
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Your Question</Form.Label>
                <Form.Control as="textarea" aria-label="With textarea" placeholder="Provide us the details" />
            </Form.Group>

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

export default Consult