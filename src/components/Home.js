import React from 'react'
import {Container, Card} from "react-bootstrap"
import img1 from './images/pets-img-home.png' 
import imgLogo from './images/pet-care-logo.png'

function Home() {
  return (
    <div>
    <Container className='pt-5'>
    <div class="d-flex bd-highlight">
    <span className="border  pt-5 pb-5 px-5 rounded border-danger shadow mb-5">
  <div>
  <div class="w-50 bd-highlight ml-5">

  <img className='rounded' src={imgLogo} height="150"/> 
  </div>
    <h3>
    Begin your pet’s journey
      to a healthier life.
    </h3>
    <p> Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div></span>


   
    <div class="p-2 pt-5 w-100 bd-highlight "> 
    <div className="container-fluid ">
        <img src={img1} height="170"/> 
        </div>
    
        <a className="card-link" href="/vets">
    <Card style={{ width: '34rem' }} className="border rounded border-danger shadow p-3 mb-5 bg-white">
      
      <Card.Body>
        <Card.Title>Our Doctors</Card.Title>
        <Card.Text>
        View our dedicated team of veterinarians
        </Card.Text>
      </Card.Body>
    </Card></a></div>
    
</div>


</Container>
            
    </div>
  )
}

export default Home