import {Card, Container, Collapse,Button, Accordion} from "react-bootstrap"
import React from 'react'

function Veterinarians(props) {

  return (
    <div>

    <Container>
      <Card style={{ width: '18rem' }} >
        <Card.Img style={{ width: '100%',height:'350px' }}  variant="top" src={props.data.image} />
        <Card.Body>
          <Card.Title>Dr. {props.data.name}</Card.Title>
          <Card.Text>

       
  
      <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header> About {props.data.name}</Accordion.Header>
        <Accordion.Body>
        {props.data.desc}
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
          </Card.Text>
        </Card.Body>
        
      </Card>

      </Container>
      
    </div>
  )
}

export default Veterinarians