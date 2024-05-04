// Abhijit Singh - 8865227

import React from "react";
import './Contact.css'
import { Chat, Envelope } from "react-bootstrap-icons";
import GoogleMap from "./GoogleMap";

// Showing the google map
function Contact() {
  return (
    <div>
        <div>
            <GoogleMap/>
        </div>

{/* Form to get the input from the user */}
      <div className="container">
        <div className="text-center">
          <h1 className="mb-5 mt-5">Contact Us</h1>
        </div>
        <div className="row">
          <div className="col-md-7">
            <form className="Sofine-form">
              <div className="mb-3">
                <label>Name</label>
                <input type="text" />
              </div>
              <div className="mb-3">
                <label>Phone Number<span>*</span></label>
                <input type="text" />
              </div>
              <div className="mb-3">
                <label>Email<span>*</span></label>
                <input type="text" />
              </div>
              <div className="mb-3">
                <label>Comment<span>*</span></label>
                <textarea rows={5} ></textarea>
              </div>
              <div className="mb-3">
                <button className="default-button text-capitalize hover-button">Submit</button>
              </div>
            </form>
          </div>
          <div className="col-md-5">
            <div className="contact-detail-wrap">
                <h6 className="mb-3">Get In Touch!</h6>
                <p>We'd love to hear from you - please use the form to send us your message or ideas. Or simply pop in for a cup of fresh tea and a cookie:</p>
                <p><Chat/>TEXT: 091-123-ELLA</p>
                <p><Envelope/>email@domain.com</p>
                <p>685 Market Street<br/>
                San Francisco, CA 94105,<br/>
                United States</p>
                <hr/>
                <p>Opening Hours:</p>
                <p>MON to SAT: 9:00AM - 10:00PM<br/>
                SUN: 10:00AM - 6:00PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// Contact address
export default Contact;
