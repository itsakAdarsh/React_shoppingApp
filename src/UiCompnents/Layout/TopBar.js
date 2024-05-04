import React from "react";
import { Telephone, Envelope } from "react-bootstrap-icons";

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="custom-container">
        <div className="row align-items-center justify-content-center">
       
        <div className="col-lg-3 col-md-6 order-lg-1 order-xl-1">
            <div className="bar-contacts">
              <ul>
                <li>
                  <a className="a-hover">
                    <Telephone /> +391 (0)35 2568 4593
                  </a>
                </li>
              </ul>
            </div>
          </div>          
          <div className="col-lg-3 col-md-6 order-lg-3 order-xl-3">
            <div className="bar-contacts">
              <ul>
                <li>
                  <a className="a-hover">
                    <Envelope /> support@alothemes.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 order-lg-2 order-xl-2">
          <div className="bar-context">
            <span>Free shipping on all orders over $79 Shop Now</span>
            <button type="button" className="top-bar-button mx-1">
              Shop Now
            </button>
          </div>
        </div>  
        </div>
      </div>
    </div>
  );
};

export default TopBar;
