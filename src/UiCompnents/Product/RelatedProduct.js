import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Cart, Eye } from "react-bootstrap-icons";
import ReactStars from "react-rating-stars-component";
import { useData } from "../../ProductDataProvider";
import { Link } from "react-router-dom";

function RelatedProduct({Find}) {
  const data = useData();

  const filteredProducts = data.filter(
    (item) => Find === "all" || item.category === Find
  );

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
          <h1 className="mt-3 mb-5">Related Products</h1>
        </div>
        <Carousel responsive={responsive}>
          {filteredProducts.map((item) => (
            <div className="custom-card card-product-slider" key={data.id}>
              <div className="card-img">
                <div className="card-static-img">
                  <img src={item.images[0]} alt="" />
                </div>
                <div className="card-hover-img">
                  <img src={item.images[1]} alt="" />
                </div>
                <div className="card-badge">
                  <div className="discount-badge d-inline-block">
                    <span>-{item.discountPercentage}%</span>
                  </div>
                  <div className="new-badge d-inline-block">
                    {item.new === 1 ? <span>New</span> : ""}
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
                  <Link to={`/product/${item.id}`} className="product-link">
                    <h6>{item.title}</h6>
                  </Link>
                </div>
                <ReactStars count={3.9} size={24} activeColor="#ffd700" />
                <div className="product-price-section">
                  <h3 className="price">
                    <span className="Currency">$</span>
                    {item.price}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default RelatedProduct;
