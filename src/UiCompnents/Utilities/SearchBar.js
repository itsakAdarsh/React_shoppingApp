import React, { useState } from "react";

function SearchBar({ isOpen, toggleSearch }) {
 

  return (
    <div>
      {isOpen &&<div class="search-bar-wrap">
      <div class="w-100 h-100 position-relative d-flex align-items-center">
        <div class="search-div">
          <h1 class="search-heading">WHAT ARE YOU LOOKING FOR?</h1>
          <div class="search-bar border">
            <input type="text" placeholder="Search For Products" />
            <button type="button" class="search-button">
              <i class="bi bi-search"></i>
            </button>
          </div>
          <p class="search-context">
            popular searches:{" "}
            <a href="" class="a-hover">
              Sneakers{" "}
            </a>
            ,
            <a href="" class="a-hover">
              Bags{" "}
            </a>
            ,
            <a href="" class="a-hover">
              Jackets
            </a>
          </p>
        </div>
      </div>
      <button class="x-icon x-button rotate search-close" onClick={toggleSearch}>
        X
      </button>
    </div>}
    </div>
  );
}

export default SearchBar;
