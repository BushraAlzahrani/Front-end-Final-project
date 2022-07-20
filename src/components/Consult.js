import {Form, Container, Row, Col, Button} from "react-bootstrap"
import axios from 'axios';
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import img from './images/pets-img-consult.PNG' 


function Consult() {

  const navigate = useNavigate()

  const[name, setName] = useState('');
  const[petType, setPetType] = useState('');
  const[describtion, setDescribtion] = useState('');

  const postData = () =>{
      axios.post(`https://62d3e355cd960e45d44f7d93.mockapi.io/ConsultRequest`,{name, petType, describtion})
      .then((res)=>{
          console.log(res);
          navigate("/inquiries");
      })
      .catch((err)=>{
          console.log(err);
      })

  }

  return (
    <div>
   
    <Container className=" mt-5 mb-5 d-flex justify-content-center" >

    
      
    <span class="border pt-5 pb-5 px-5 rounded border-danger shadow p-3 mb-5 bg-white">
    <h2 className="mb-5"> Ask For Consultation </h2>
            <Form>
            
            <Row className="mb-3">
                <Form.Group as={Col} >
                <Form.Label>Name</Form.Label>
                <Form.Control input placeholder="Your Name" onChange={(e)=>{setName(e.target.value)}} />
                </Form.Group>

                <Form.Group as={Col} >
                <Form.Label>Your Pet Type</Form.Label>
                <Form.Select defaultValue="Choose..." onChange={(e)=>{setPetType(e.target.value)}} >
                    <option>Choose...</option>
                    <option>Cat</option>
                    <option>Dog</option>
                    <option>Rabbit</option>
                    <option>Bird</option>
                </Form.Select>
                </Form.Group>
                
            </Row>

            <Form.Group className="mb-3" >
                <Form.Label>Your Question</Form.Label>
                <Form.Control as="textarea" aria-label="With textarea" placeholder="Provide us the details" 
                onChange={(e)=>{setDescribtion(e.target.value)}} />
            </Form.Group>

            <div className='d-flex justify-content-center'>
            <Button variant="info" className='text-white' onClick={postData}>
            Submit
        </Button>
        </div>

            </Form>
            </span>

            <div class="d-flex bd-highlight">

            <div className="pb-5">
        <img src={img} /> 
        </div>
            </div>
      </Container>
      

    </div>
  )
}

export default Consult