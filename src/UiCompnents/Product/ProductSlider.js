import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Cart, Eye } from "react-bootstrap-icons";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

function ProductSlider({ name }) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4, // Change this to 4 to show 4 cards
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <div className="container pb-5">
        <div className="text-center">
          <h1 className="mt-3 mb-5">{name}</h1>
        </div>
        <Carousel responsive={responsive}>
          <div className="custom-card card-product-slider">
            <div className="card-img">
              <div className="card-static-img">
                <img src={process.env.PUBLIC_URL + "img/cards/TheItalianLeatherSquareToeChelseaBoot_540x.jpg"} alt="" />
              </div>
              <div className="card-hover-img">
                <img src={process.env.PUBLIC_URL + "img/cards/TheItalianLeatherSquareToeChelseaBoot2_540x.jpg"} alt="" />
              </div>
              <div className="card-badge">
                <div className="discount-badge d-inline-block">
                  <span>-10%</span>
                </div>
                <div className="new-badge d-inline-block">
                  <span>New</span>
                </div>
              </div>
              <div className="card-bottom-inner-bar">
                <div className="inner-bar-badge">
                  <a title="Add to Cart">
                    <Cart />
                  </a>
                  <a title="Quick View">
                    <Eye />
                  </a>
                </div>
              </div>
            </div>
            <div className="card-detail">
              <div className="card-product-label">
                
                  <h6>The Italian Leathee Chelsea Boot</h6>
              </div>
              <ReactStars count={3.9} size={24} activeColor="#ffd700" />
              <div className="product-price-section">
                <h3 className="price">
                  <span className="Currency">$</span>
                  70
                </h3>
              </div>
            </div>
          </div>
          <div className="custom-card card-product-slider">
            <div className="card-img">
              <div className="card-static-img">
                <img src={process.env.PUBLIC_URL + "/img/cards/TheItalianLeatherStudioBag_540x.jpg"} alt="" />
              </div>
              <div className="card-hover-img">
                <img src={process.env.PUBLIC_URL + "/img/cards/TheItalianLeatherStudioBag2_540x.jpg"} alt="" />
              </div>
              <div className="card-badge">
                <div className="discount-badge d-inline-block">
                  <span>-30%</span>
                </div>
                <div className="new-badge d-inline-block">
                  <span>New</span>
                </div>
              </div>
              <div className="card-bottom-inner-bar">
                <div className="inner-bar-badge">
                  <a title="Add to Cart">
                    <Cart />
                  </a>
                  <a title="Quick View">
                    <Eye />
                  </a>
                </div>
              </div>
            </div>
            <div className="card-detail">
              <div className="card-product-label">
                
                  <h6>The Italian Leather Studio Bag</h6>
              </div>
              <ReactStars count={3.9} size={24} activeColor="#ffd700" />
              <div className="product-price-section">
                <h3 className="price">
                  <span className="Currency">$</span>
                  90
                </h3>
              </div>
            </div>
          </div>
          <div className="custom-card card-product-slider">
            <div className="card-img">
              <div className="card-static-img">
                <img src={process.env.PUBLIC_URL + "/img/cards/TheReNewTransitWeekender_540x.jpg"} alt="" />
              </div>
              <div className="card-hover-img">
                <img src={process.env.PUBLIC_URL + "/img/cards/TheReNewTransitWeekender2_540x.jpg"} alt="" />
              </div>
              <div className="card-badge">
                <div className="discount-badge d-inline-block">
                  <span>-31%</span>
                </div>
              </div>
              <div className="card-bottom-inner-bar">
                <div className="inner-bar-badge">
                  <a title="Add to Cart">
                    <Cart />
                  </a>
                  <a title="Quick View">
                    <Eye />
                  </a>
                </div>
              </div>
            </div>
            <div className="card-detail">
              <div className="card-product-label">
                
                  <h6>The New Weekender Bag</h6>
              </div>
              <ReactStars count={3.9} size={24} activeColor="#ffd700" />
              <div className="product-price-section">
                <h3 className="price">
                  <span className="Currency">$</span>
                  60
                </h3>
              </div>
            </div>
          </div>
          <div className="custom-card card-product-slider">
            <div className="card-img">
              <div className="card-static-img">
                <img src={process.env.PUBLIC_URL + "/img/cards/Tanktop.jpg"} alt="" />
              </div>
              <div className="card-hover-img">
                <img src={process.env.PUBLIC_URL + "/img/cards/TanktopHover.jpg"} alt="" />
              </div>
              <div className="card-bottom-inner-bar">
                <div className="inner-bar-badge">
                  <a title="Add to Cart">
                    <Cart />
                  </a>
                  <a title="Quick View">
                    <Eye />
                  </a>
                </div>
              </div>
            </div>
            <div className="card-detail">
              <div className="card-product-label">
                
                  <h6>Stylish Winter Tops For Women</h6>
              </div>
              <ReactStars count={3.9} size={24} activeColor="#ffd700" />
              <div className="product-price-section">
                <h3 className="price">
                  <span className="Currency">$</span>
                  119
                </h3>
              </div>
            </div>
          </div>
          <div className="custom-card card-product-slider">
            <div className="card-img">
              <div className="card-static-img">
                <img src={process.env.PUBLIC_URL + "/img/cards/DayGlove.jpg"} alt="" />
              </div>
              <div className="card-hover-img">
                <img src={process.env.PUBLIC_URL + "/img/cards/DayGloveHover.jpg"} alt="" />
              </div>
              <div className="card-badge">
                <div className="new-badge d-inline-block">
                  <span>New</span>
                </div>
              </div>
              <div className="card-bottom-inner-bar">
                <div className="inner-bar-badge">
                  <a title="Add to Cart">
                    <Cart />
                  </a>
                  <a title="Quick View">
                    <Eye />
                  </a>
                </div>
              </div>
            </div>
            <div className="card-detail">
              <div className="card-product-label">
                
                  <h6>Day Glove For Women</h6>
              </div>
              <ReactStars count={3.9} size={24} activeColor="#ffd700" />
              <div className="product-price-section">
                <h3 className="price">
                  <span className="Currency">$</span>
                  89
                </h3>
              </div>
            </div>
          </div>
          <div className="custom-card card-product-slider">
            <div className="card-img">
              <div className="card-static-img">
                <img src={process.env.PUBLIC_URL + "/img/cards/TheMiniFormBag_540x.jpg"} alt="" />
              </div>
              <div className="card-hover-img">
                <img src={process.env.PUBLIC_URL + "/img/cards/TheMiniFormBag2_540x.jpg"} alt="" />
              </div>
              <div className="card-badge">
                <div className="discount-badge d-inline-block">
                  <span>-50%</span>
                </div>
                <div className="new-badge d-inline-block">
                  <span>New</span>
                </div>
              </div>
              <div className="card-bottom-inner-bar">
                <div className="inner-bar-badge">
                  <a title="Add to Cart">
                    <Cart />
                  </a>
                  <a title="Quick View">
                    <Eye />
                  </a>
                </div>
              </div>
            </div>
            <div className="card-detail">
              <div className="card-product-label">
                
                  <h6>The Mini Form Bag</h6>
              </div>
              <ReactStars count={3.9} size={24} activeColor="#ffd700" />
              <div className="product-price-section">
                <h3 className="price">
                  <span className="Currency">$</span>
                  45
                </h3>
              </div>
            </div>
          </div>
          <div className="custom-card card-product-slider">
            <div className="card-img">
              <div className="card-static-img">
                <img src={process.env.PUBLIC_URL + "/img/cards/mustard_sneakers.jpg"} alt="" />
              </div>
              <div className="card-hover-img">
                <img src={process.env.PUBLIC_URL + "/img/cards/mustard_sneakerHover.jpg"} alt="" />
              </div>
              <div className="card-badge">
                <div className="discount-badge d-inline-block">
                  <span>-50%</span>
                </div>
                <div className="new-badge d-inline-block">
                  <span>New</span>
                </div>
              </div>
              <div className="card-bottom-inner-bar">
                <div className="inner-bar-badge">
                  <a title="Add to Cart">
                    <Cart />
                  </a>
                  <a title="Quick View">
                    <Eye />
                  </a>
                </div>
              </div>
            </div>
            <div className="card-detail">
              <div className="card-product-label">
                
                  <h6>Stylish Mustart Sneakers For Men</h6>
              </div>
              <ReactStars count={3.9} size={24} activeColor="#ffd700" />
              <div className="product-price-section">
                <h3 className="price">
                  <span className="Currency">$</span>
                  99
                </h3>
              </div>
            </div>
          </div>
          {/* Add more static cards here if needed */}
        </Carousel>
      </div>
    </div>
  );
}

export default ProductSlider;
