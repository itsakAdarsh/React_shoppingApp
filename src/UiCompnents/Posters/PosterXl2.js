import React from "react";

function PosterXl2() {
  return (
    <div>
      <div class="product-cover-wrap">
        <div class="product-cover-img-wrap">
          <img src={process.env.PUBLIC_URL + "img/product-cover/section_long_shoe.jpg"} alt="" />
          <div class="product-cover-context large-cover ">
            <h1>Up To 50% Off Mid-Season Sale</h1>
            <p class="product-cover-para">
              Casual pieces for chilling at home.
            </p>
            <button class="default-button text-capitalize hover-button">
              Dicover Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PosterXl2;
