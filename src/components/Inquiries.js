import axios from 'axios';
import React, { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import {Card, Container, Button, Accordion, Form} from "react-bootstrap"


function Inquiries() {

  const [data,setData]= useState([]);
  
    useEffect (()=>{
        axios
        .get(`https://62d3e355cd960e45d44f7d93.mockapi.io/ConsultRequest`)
        .then((res)=>{
            console.log(res.data);
            setData(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })


    },[])

    const navigate = useNavigate();
    const[vetName, setVetName] = useState('');
    const[vetAnswer, setVetAnswer] = useState('');

    const postAnswer = () =>{
      axios.post(`https://62d3e355cd960e45d44f7d93.mockapi.io/ConsultAnswer`,{vetName, vetAnswer})
      .then((res)=>{
          console.log(res);
          navigate("/inquiries")
      })
      .catch((err)=>{
          console.log(err);
      })

  }

  return (
    <div>
      
      {data.map((e) =>{
            return <Container className='pt-5'>
               
                <Card>
          <Card.Header as="h5">Question</Card.Header>
          <Card.Body>
            <Card.Title>Owner: {e.name}, Pet Type: {e.petType}  </Card.Title>
            <Card.Text>
              {e.describtion}
            </Card.Text>
            
            <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header> <Button variant="info" className='text-white'>Reply</Button></Accordion.Header>
        <Accordion.Body>
          
        <Form.Label>Dr. Name</Form.Label>
       <Form.Control input placeholder="Enter Name" onChange={(e)=>{setVetName(e.target.value)}} />
       <div className='pt-2'>
        <Form.Label>Consultation</Form.Label>
        <Form.Control as="textarea" aria-label="With textarea" placeholder="write your Consultation here" 
                onChange={(e)=>{setVetAnswer(e.target.value)}} />
                </div>

            <div className='pt-2'>  <Button variant="info" className='text-white' onClick={postAnswer}>
            Submit
        </Button></div>
           
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
          </Card.Body>
          </Card>

            </Container>

        })}
        
       
    </div>
  )
}

export default Inquiries