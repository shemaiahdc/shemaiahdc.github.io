import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/About.jsx";
import Cart from "./pages/Cart.jsx";
import Catalog from "./pages/Catalog.jsx";
import Contact from "./pages/Contact.jsx";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import Payment from "./pages/Payment.jsx";
import Profile from "./pages/Profile.jsx";
import Signup from "./pages/Signup.jsx";
import Transaction from "./pages/Transaction.jsx";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}
