import React from 'react'
import VetData from './VetData'
import Veterinarians from './Veterinarians';
import {Row} from "react-bootstrap"

function ShowVetsCards() {
    let Vets = VetData.map((data) => {
        return <Veterinarians data={data} />
    
      });
    
      return (
        <div>
          <h2 className="mt-5">Our Veterinarians</h2>
        <Row xs={1} md={4} className="g-3 mt-5 mb-5">  
        {Vets}
            </Row>
            </div>
      )
    }

export default ShowVetsCards