import React from "react";
import "./Cart.css";
import { Trash } from "react-bootstrap-icons";
import StaticBanner from "../UiCompnents/Banners/StaticBanner";
import { Link } from "react-router-dom";

function Cart() {
  // Dummy cart data for static display
  const cart = [
    {
      id: 1,
      title: "The Italian Leathee Chelsea Boot",
      image: "/img/cards/TheItalianLeatherSquareToeChelseaBoot_540x.jpg",
      quantity: 2,
      Subtotal: 200,
    },
    {
      id: 2,
      title: "Stylish Winter Tops For Women",
      image: "/img/cards/Tanktop.jpg",
      quantity: 1,
      Subtotal: 100,
    },
  ];

  const GrandSubtotal = 300; // Dummy subtotal for static display
  const discount = 0.1; // 10% discount
  const totalAfterDiscount = GrandSubtotal * (1 - discount);

  return (
    <div>
      <StaticBanner Name="Cart" />
      <div className="container-fluid mt-4 mb-4">
        <div className="row">
          <div className="col-md-9">
            <div className="cart_ui_block">
              <table className="cart-table">
                <thead>
                  <tr>
                    <th style={{ width: "30px" }}>Sr.</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th style={{ width: "70px" }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.title}</td>
                      <td>
                        <img src={item.image} alt={item.title} />
                      </td>
                      <td>{item.quantity}</td>
                      <td>{item.Subtotal}</td>
                      <td>
                        <button className="btn btn-sm btn-danger">
                          <Trash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-3">
            <div className="cart_ui_block">
              <div className="Billing-section">
                <h5>Billing</h5>

                <table className="billing-table">
                  <tbody>
                    <tr>
                      <td>Subtotal :</td>
                      <td>{GrandSubtotal}</td>
                    </tr>
                    <tr>
                      <td>Discount :</td>
                      <td>10%</td>
                    </tr>
                    <tr>
                      <td>Total :</td>
                      <td>{totalAfterDiscount}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div style={{ margin: "15px" }}>
          <Link to="/shop"> 
            <button className="default-button text-Uppercase hover-button">
              Return To Shop
            </button>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
}

export default Cart;
