import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import necessary components from react-router-dom
import TopBar from "./UiCompnents/Layout/TopBar";
import Header from "./UiCompnents/Layout/Header";
import Footer from "./UiCompnents/Layout/Footer";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import Shop from "./Pages/Shop";
import { DataProvider } from "./ProductDataProvider"; // Import your data provider
import { useState } from "react";
import About from "./Pages/About";

function App() {

  const [cart, setCart] = useState([]);

  const addToCart = (product, chooseColor, chooseSize, quantity) => {
    const productDiscount =product.price * (1 - product.discountPercentage / 100);

    const Subtotal = quantity * productDiscount;
    const item = {
      product,
      Subtotal,
      chooseColor,
      chooseSize,
      quantity
    };

    console.log(Subtotal);
    const existingItem = cart.find((item) => item.product.id === product.id);

    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, item]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.product.id !== productId);
    setCart(updatedCart);
  };


  const cartLength = cart.length;
  

  return (
    <Router>
      <DataProvider>
        <div className="App">
          <TopBar />
          <Header cartLength={cartLength} />
          <Routes>
            {/* Define your routes here */}
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart name="Cart" cart={cart} removeFromCart={removeFromCart} />} />
            <Route path="/shop" element={<Shop name="Products" />} />
            <Route path="/about" element={<About name="About"/>} />
          </Routes>
          <Footer />
        </div>
      </DataProvider>
    </Router>
  );
}

export default App;
