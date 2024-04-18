import React from 'react'
import { useAuth } from '../store/Auth'

const About = () => {
  const {user}=useAuth();
  return (
    <>
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-md-6">
          <h2 className="mt-4 mx-auto">About Us</h2>

          <h4>Hi {user? user.username:"New User"}</h4>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut quam sed
            arcu tempus suscipit vel id tortor. Maecenas nec ipsum neque. Vivamus ac
            quam euismod, tempor lectus at, ultrices odio. Duis accumsan odio eu tortor
            vulputate, a commodo magna dapibus.
          </p>
        </div>
        <div className='col-md-6'>
        <h2 className="mt-4 mx-auto">Frequently Asked Questions</h2>
          <div className="accordion" id="faqAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Question 1: What is Lorem Ipsum?
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  <strong>Answer:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Question 2: Where does it come from?
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  <strong>Answer:</strong> Contrary to popular belief, Lorem Ipsum is not simply random text.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Question 3: Why do we use it?
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  <strong>Answer:</strong> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default About