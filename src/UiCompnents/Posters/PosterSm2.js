import React from 'react'

function PosterSm2() {
  return (
    <div>
    <div class="product-cover-wrap">
    <div class="product-cover-img-wrap">
        <img src={process.env.PUBLIC_URL + 'img/product-cover/Section_white_sneakers.jpg'} alt=""/>
        <div class="product-cover-context small-cover ">
            <div class="bottom-text">
                <h3>Men’s Perforated Sneakers</h3>
                <span class="product-price-spap">
                    only $378</span>
                <button class="default-button text-capitalize hover-button">Shop now</button>
            </div>
        </div>
    </div>


</div>
    </div>
  )
}

export default PosterSm2
