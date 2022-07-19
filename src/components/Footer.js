import React from 'react'
import petimg from './images/pets-img2.png'

function Footer() {
  return (

    <div>
    <div className="footer-img container-fluid row pt-4">
        <img src={petimg}/> 
        </div>

<footer bg="info" className="page-footer font-small pt-4 text-white bg-danger">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Pet Care</h5>
                <p>We understand that your pets are more than just pets, they're family.
                
                </p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Home</a></li>
                    <li><a href="#!">Join Our Vets Team</a></li>

                </ul>
            </div>
            
            <div className="col-md-3 mb-md-0 mb-3">
           
                <h5 className="text-uppercase">Contact</h5>
                <ul className="list-unstyled">
                    <li className='mb-2'><img className='contact-img' src={"https://stmaaprodfwsite.blob.core.windows.net/assets/sites/9/2020/05/email-13765.png"} /> info@example.com</li>
                    <li><img className='contact-img' src={"https://warwick.ac.uk/fac/cross_fac/academy/findus/unnamed.png"} /> + 05 123 456 78 </li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2022 Copyright:
        <a href=""> PetCare.com</a>
    </div>

</footer>
    </div>
  )
}

export default Footer