// Shivam Arora- 8873923


import React from "react";
import SliderBanner from "../UiCompnents/Banners/SliderBanner";
import PosterXl1 from "../UiCompnents/Posters/PosterXl1";
import PosterXl2 from "../UiCompnents/Posters/PosterXl2";
import PosterXl3 from "../UiCompnents/Posters/PosterXl3";
import PosterSm1 from "../UiCompnents/Posters/PosterSm1";
import PosterSm2 from "../UiCompnents/Posters/PosterSm2";
import PosterFull from "../UiCompnents/Posters/PosterFull";
import CustomerCare from "../UiCompnents/CustomerCare/CustomerCare";
import ProductSlider from "../UiCompnents/Product/ProductSlider";

function Home() {
  return (
    <div>
      {/*Slider section*/}
      <div>
        <SliderBanner />
      </div>

      {/*posters section with multiple section Xl or sm  */}
      <div className="products-cover">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <PosterXl1 />
            </div>
            <div className="col-md-6">
              <PosterXl2 />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <PosterXl3 />
            </div>
            <div className="col-md-3">
              <PosterSm1 />
            </div>
            <div className="col-md-3">
              <PosterSm2 />
            </div>
          </div>
        </div>
      </div>

      {/*Product Slider*/}
      <ProductSlider name="New Products" />

      {/*Poster Full */}

      <div>
        <PosterFull />
      </div>

      {/*Customer Care Section*/}
      <div>
        <CustomerCare />
      </div>
    </div>
  );
}

export default Home;
