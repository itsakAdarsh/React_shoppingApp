import React from "react";

function PosterXl1() {
  return (
    <div>
      <div class="product-cover-wrap">
        <div class="product-cover-img-wrap">
          <img src={process.env.PUBLIC_URL + 'img/product-cover/Section-sneakers.jpg'} alt="" />
          <div class="product-cover-context large-cover ">
            <h1>Find Your Style Come Have a Look</h1>
            <p class="product-cover-para">
              Casual pieces for chilling at home.
            </p>
            <button class="default-button text-capitalize hover-button">
              Shop the look
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PosterXl1;
