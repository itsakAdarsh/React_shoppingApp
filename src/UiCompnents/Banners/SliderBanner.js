import React from "react";
import { ArrowRight, ArrowLeft } from "react-bootstrap-icons";

function SliderBanner() {
  return (
    <div>
      <div class="banner">
        <div
          id="carouselExampleIndicators"
          class="carousel carousel-fade"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators slider-indecators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner d-flex align-items-center">
            <div class="carousel-item active">
              <div class="banner-wrap-img">
                <img
                  src={process.env.PUBLIC_URL + "img/banner/banner1.webp"}
                  class="baner-animation"
                  alt=""
                />
              </div>
              <div class="banner-wrap-label">
                <div class="banner-heading-div">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-8 col-md-12">
                        <div className="inner-content-wrap">
                          <p class="banner-collection-content">
                            Summer Collection 2023
                          </p>
                          <span>
                            <h1 class="banner-heading ">
                              Extra 15% off the up
                            </h1>
                            <h1 class="banner-heading ">to 70% off sale!</h1>
                          </span>
                          <p class="banner-collection-content2 ">
                            Casual pieces for chilling at home.
                          </p>
                          <button class="banner-button hover-button ">
                            Explore More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item ">
            <div class="banner-wrap-img">
              <img
                src={process.env.PUBLIC_URL + "img/banner/banner2.webp"}
                class="baner-animation"
                alt=""
              />
            </div>
            <div class="banner-wrap-label">
              <div class="banner-heading-div">
                <div class="container">
                  <div class="row">
                    <div class="col-md-8 col-md-12">
                      <div className="inner-content-wrap">
                        <p class="banner-collection-content">
                          Summer Collection 2023
                        </p>
                        <span>
                          <h1 class="banner-heading ">
                            Extra 15% off the up
                          </h1>
                          <h1 class="banner-heading ">to 70% off sale!</h1>
                        </span>
                        <p class="banner-collection-content2 ">
                          Casual pieces for chilling at home.
                        </p>
                        <button class="banner-button hover-button ">
                          Explore More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item ">
          <div class="banner-wrap-img">
            <img
              src={process.env.PUBLIC_URL + "img/banner/banner3.jpg"}
              class="baner-animation"
              alt=""
            />
          </div>
          <div class="banner-wrap-label">
            <div class="banner-heading-div">
              <div class="container">
                <div class="row">
                  <div class="col-md-8 col-md-12">
                    <div className="inner-content-wrap">
                      <p class="banner-collection-content">
                        Summer Collection 2023
                      </p>
                      <span>
                        <h1 class="banner-heading ">
                          Extra 15% off the up
                        </h1>
                        <h1 class="banner-heading ">to 70% off sale!</h1>
                      </span>
                      <p class="banner-collection-content2 ">
                        Casual pieces for chilling at home.
                      </p>
                      <button class="banner-button hover-button ">
                        Explore More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          </div>

          <button
            class="carousel-control-prev sliders-button mx-3 shadow"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <ArrowLeft />
          </button>
          <button
            class="carousel-control-next sliders-button mx-3 shadow"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SliderBanner;
