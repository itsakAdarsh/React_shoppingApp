import React from 'react';
import { Envelope, Facebook, Twitter, Whatsapp, EnvelopeFill, Telegram } from "react-bootstrap-icons";


const Footer = () => {
  return (
    <footer>
    <div className="footer">
    <div className="container">
        <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
                <div>
                    <div className="footer-group">
                        <img src={process.env.PUBLIC_URL + "img/logo/logo_115x115@2x.png"} alt=""/>
                    </div>
                    <div className="footer-group">
                        <h6 className="footer-sub-heading">Let’s Talk</h6>
                        <p className="footer-context">
                            <a href="">+391 (0)35 2568 4593</a>
                        </p>
                        <p className="footer-context">
                            <a href="">support@alothemes.com</a>
                        </p>
                    </div>
                    <div className="footer-group">
                        <h6 className="footer-sub-heading">Find Us</h6>
                        <p className="footer-context">
                            <a href="">1418 Riverwood Drive, Suite 3245 Cottonwood</a>
                        </p>
                        <p className="footer-context">
                            <a href="">CA 96052, United States</a>
                        </p>
                    </div>
                    <div className="footer-group">
                        <h6 className="footer-sub-heading">We Accept</h6>
                        <img  src={process.env.PUBLIC_URL + "img/icon/paymen_222x.png"} alt=""/>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="footer-group">
                    <h6 className="footer-heading">Get Help</h6>
                </div>
                <div className="footer-group">
                    <ul className="footer-links">
                        <li>
                            <a href="">About Us</a>
                        </li>
                        <li>
                            <a href="">Track order</a>
                        </li>
                        <li>
                            <a href="">Delivery Information</a>
                        </li>
                        <li>
                            <a href="">Sale Terms & Conditions</a>
                        </li>
                        <li>
                            <a href="">Returns & Refunds</a>
                        </li>
                        <li>
                            <a href="">Privacy Notice</a>
                        </li>
                        <li>
                            <a href="">Shopping FAQs</a>
                        </li>
                        <li>
                            <a href="">Gift vouchers</a>
                        </li>
                        <li>
                            <a href="">Black Friday</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="footer-group">
                    <h6 className="footer-heading">Popular Categories</h6>
                </div>
                <div className="footer-group">
                    <ul className="footer-links">
                        <li>
                            <a href="">Accessories (<span className="items-num">22</span>) </a>
                        </li>
                        <li>
                            <a href="">Backpacks (<span className="items-num">5</span>) </a>
                        </li>
                        <li>
                            <a href="">Men's (<span className="items-num">5</span>) </a>
                        </li>
                        <li>
                            <a href="">Shirts (<span className="items-num">2</span>) </a>
                        </li>
                        <li>
                            <a href="">Shoes (<span className="items-num">8</span>) </a>
                        </li>
                        <li>
                            <a href="">Sunglass (<span className="items-num">1</span>) </a>
                        </li>
                        <li>
                            <a href="">T-Shirt (<span className="items-num">9</span>) </a>
                        </li>
                        <li>
                            <a href="">Women's (<span className="items-num">19</span>) </a>
                        </li>
                        <li>
                            <a href="">Jacket and Coats (<span className="items-num">20</span>) </a>
                        </li>
                        
                    </ul>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="footer-group">
                    <h6 className="footer-heading">Let’s stay in touch</h6>
                </div>
                <div className="footer-group">
                    <div className="techno-input-group">
                        <div className="techno-icon-input rounded">
                            <input type="text" placeholder="Your Email Account"/>
                            <button className="footer-button rounded">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
                <div className="footer-group">
                    <p className="footer-search-context">
                        Keep up to date with our latest news and special offers.
                    </p>
                </div>
                <div className="footer-group">
                    <h6 className="footer-heading">Follow Us</h6>
                </div>
                <div className="footer-group">
                    <ul className="footer-social-icons">
                        <li>
                            <a href=""><Facebook/></a>
                        </li>
                        <li>
                            <a href=""><Twitter/></a>
                        </li>
                        <li>
                            <a href=""><EnvelopeFill/></a>
                        </li>
                        <li>
                            <a href=""><Telegram/></a>
                        </li>
                        <li>
                            <a href=""><Whatsapp/></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div className="footer-bar">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div>
                        <p className="footer-bar-context"> &copy; 2022 <a href="" className="footer-a">Sofine</a> . All Right Reserved</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <ul className="footer-links footer-bar-links">
                        <li>
                            <a href="">Policy</a>
                        </li>
                        <li>
                            <a href="">Terms & Condition</a>
                        </li>
                        <li>
                            <a href="">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="">Help</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
    </footer>
  );
};

export default Footer;