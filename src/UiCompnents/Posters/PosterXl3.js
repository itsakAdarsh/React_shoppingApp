import React from "react";

function PosterXl3() {
  return (
    <div>
      <div class="product-cover-wrap">
        <div class="product-cover-img-wrap">
          <img src={process.env.PUBLIC_URL + 'img/product-cover/section_boots.jpg'} alt="" />
          <div class="product-cover-context large-cover ">
            <h1 class="heading-25px">Boots & Sneakers Essentials</h1>
            <p class="product-cover-para">
              From the world’s best brands and boutiques.
            </p>
            <span class="product-price-spap">only $184</span>
            <button class="default-button text-capitalize hover-button">
              Dicover Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PosterXl3;
