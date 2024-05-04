import React, { useState } from "react";
import { Search, Cart4 } from "react-bootstrap-icons";
import SearchBar from "../Utilities/SearchBar";
import { Link } from "react-router-dom";
import { useData } from "../../ProductDataProvider";
const Header = ({cartLength}) => {
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const data = useData();

  const categories = [...new Set(data.map((item) => item.category))];
  return (
    <div className="navbar-Sofine">
      <nav>
        <div className="custom-container">
          <div className="desktop-nav-view">
            <div className="row align-items-center">
            <div className="col-md-2 col-sm-6 col-6  order-md-2 order-lg-2 order-xl-2 sm-margin">
                <div className="logo-div">
                  <img
                    src="assets/img/logo/logo_115x115@2x.png"
                    className=""
                    alt=""
                  />
                  <img
                    src={
                      process.env.PUBLIC_URL + "img/logo/logo_115x115@2x.png"
                    }
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-5 col-sm-6 col-6 order-md-3 order-lg-3 order-xl-3 sm-margin">
                <div className="nav-images">
                  <ul>
                    <li className="nav-images-li">
                      <span id="search-button" onClick={toggleSearch}>
                        <Search />
                      </span>
                    </li>
                    <li className="nav-images-li position-relative">
                      <Link to="/cart" id="cart-bar">
                        <Cart4 />
                        <span className="nav-conter order-counter">{cartLength}</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-5 col-sm-12 order-md-1 order-lg-1 order-xl-1">
                <div id="navbar">
                  <ul>
                    <li className="nav-parent-li">
                      <Link to="/" className="nav-parent-a a-hover">
                        Home<i className="bi bi-chevron-down "></i>
                      </Link>
                    </li>
                    <li className="nav-parent-li" id="shop-link">
                      <Link to="/shop" className="nav-parent-a a-hover">
                      Products<i className="bi bi-chevron-down "></i>
                      </Link>
                    </li>
                    <li className="nav-parent-li" id="page-link">
                      <Link to="/about"  className="nav-parent-a a-hover">
                        About Us<i className="bi bi-chevron-down "></i>
                      </Link>
                    </li>
                    <li className="nav-parent-li">
                      <Link to="/contact" className="nav-parent-a a-hover">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </nav>

      {/*Search Bar*/}
      <SearchBar isOpen={searchOpen} toggleSearch={toggleSearch} />
    </div>
  );
};

export default Header;
