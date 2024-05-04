// Pinalben Tulasibhai Balar - 8879533

import React, { useEffect, useState } from "react";
import { Cart, Eye } from "react-bootstrap-icons";
import ReactStars from "react-rating-stars-component";
import StaticBanner from "../UiCompnents/Banners/StaticBanner";
import { useData } from "../ProductDataProvider";
import { Link } from "react-router-dom";

// Showing products to the user
function Shop() {
  const data = useData();

  const categories = [...new Set(data.map((item) => item.category))];
  const [selectedCategory, setSelectedCategory] = useState("all"); // Default selected category
  const filteredProducts =
    selectedCategory === "all"
      ? data
      : data.filter((item) => item.category === selectedCategory);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Showing product categories
  return (
    <div>
      <StaticBanner Name="Products" />
      <div className="container">
       <div className="d-flex align-items-center justify-content-end mb-5">
       <label className="mx-3">Select Catagory : </label>
       <select
       value={selectedCategory}
       onChange={handleCategoryChange}
       className="form-control w-auto ml-auto"
     >
       <option value="all">All Categories</option>
       {categories.map((category, index) => (
         <option key={index} value={category}>
           {category}
         </option>
       ))}
     </select>
       </div>
        <div className="row">
        <div className="custom-card card-product-slider col-md-3">
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
          <div className="custom-card card-product-slider col-md-3">
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
          <div className="custom-card card-product-slider col-md-3">
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
          {/* cards */}
          <div className="custom-card card-product-slider col-md-3">
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
          {/* //slider */}
          <div className="custom-card card-product-slider col-md-3">
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
          <div className="custom-card card-product-slider col-md-3">
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
          <div className="custom-card card-product-slider col-md-3">
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
        </div>
      </div>
    </div>
  );
}

export default Shop;
