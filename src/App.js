import React from 'react';
import "/.App.css";
import { BrowserRouter, Routers, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurStore from "./pages/OurStore";
import Blog from "./pages/Blog";
import CompareProduct from "./pages/CompareProduct";
import Wishlist from "./pages/Wishlist";
import Signup from "./pages/Signup";
import Resetpassword from "./pages/Resetpassword";
import RefundPolicy from "./pages/RefundPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import TermAndContions from "./pages/TermAndContions";
import SingleBlog from "./pages/SingleBlog";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Forgotpassword from "./pages/Forgotpassword";
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>

  <>
      <BrowserRouter>
      <Routers>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path = "about" element={<About />} />
          <Route path = "contact" element={<Contact />} />
          <Route path = "store" element={<OurStore />} />
          <Route path = "product/:id" element={<SingleProduct />} />
          <Route path = "blogs" element={<Blog />} />
          <Route path = "blog:/id" element={<SingleBlog />} />
          <Route path="cart" element={<Cart />}/>
          <Route path="checkout" element={<Checkout />}/>
          <Route path = "compare-product" element={<CompareProduct />} />
          <Route path = "wishlist" element={<Wishlist />} />
          <Route path = "login" element={<Login />} />
          <Route path = "forgot-password" element={<Forgotpassword />} />
          <Route path = "signup" element={<Signup />} />
          <Route path = "reset-password" element={<Resetpassword />} />
          <Route path = "privacy-policy" element={<PrivacyPolicy />} />
          <Route path = "refund-policy" element={<RefundPolicy />} />
          <Route path = "shipping-policy" element={<ShippingPolicy />} />
          <Route path = "term-conditions" element={<TermAndContions />} />
        </Route>
      </Routers>
    </BrowserRouter>
  </>
  );
}

export default App;
