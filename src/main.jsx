import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Account from "./pages/Account";
import Checkout from "./pages/Checkout";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import BlogDetail from "./pages/BlogDetail";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Support from "./pages/Support";
import Logout from "./pages/Logout";
import GiftcardExchange from "./pages/GiftcardExchange";
import ProcessTransaction from "./pages/ProcessTransaction";
import OrderTracking from "./pages/OrderTracking";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Services />} />
          <Route path="blog" element={<Blog />} />
          <Route path="account" element={<Account />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="login" element={<Login />} />
          <Route path="blog/:id" element={<BlogDetail />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="settings" element={<Settings />} />
          <Route path="support" element={<Support />} />
          <Route path="logout" element={<Logout />} />
          <Route path="giftcard-exchange" element={<GiftcardExchange />} />
          <Route path="process-transaction" element={<ProcessTransaction />} />
          <Route path="order-tracking" element={<OrderTracking />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>,
);
