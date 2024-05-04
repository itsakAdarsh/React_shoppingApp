import React from "react";
import { Cart, Eye } from "react-bootstrap-icons";
import ReactStars from "react-rating-stars-component";
import StaticBanner from "../UiCompnents/Banners/StaticBanner";
import { useData } from "../ProductDataProvider";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function ShopWithCategory() {
  const { category } = useParams();
  const data = useData();

  console.log(category);

  const filteredProducts = data.filter(
    (item) => category === "all" || item.category === category
  );

  return (
    <div>
      <StaticBanner Name="Shop" />
      <div className="container">
      <div className="text-center">
        <h1 className="mb-5">{category}</h1>
      </div>
        <div className="row">
          {filteredProducts.map((item) => (
            <div className="col-md-3" key={item.id}>
              <div className="custom-card">
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
                  <ReactStars
                    count={item.rating}
                    size={24}
                    activeColor="rgb(255, 215, 0)"
                  />
                  <div className="product-price-section">
                    <h3 className="price">
                      <span className="Currency">$</span>
                      {item.price}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShopWithCategory;
