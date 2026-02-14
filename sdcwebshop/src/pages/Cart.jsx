import React, { useEffect } from "react";
import { useShopModule } from "../lib/useShopModule";

export default function Cart() {
  useShopModule();

  useEffect(() => {
    document.title = "Shopmaiah - Shopping Cart";
    if (window.ShopModule?.updateCartDisplay) window.ShopModule.updateCartDisplay();
  }, []);

  return (
    <div className="legacy-page" dangerouslySetInnerHTML={{ __html: "\n<div class=\"main-container\">\n<header>\n<div class=\"logo\">\n<h1>Shopmaiah</h1>\n</div>\n</header>\n<div class=\"container\">\n<nav class=\"sidebar\">\n<ul>\n<li><a href=\"#/\">Home</a></li>\n<li><a href=\"#/about\">About</a></li>\n<li><a href=\"#/contact\">Contact Us</a></li>\n<li><a href=\"#/login\">Login</a></li>\n<li><a href=\"#/catalog\">Product Catalog</a></li>\n<li><a href=\"#/cart\">Shopping Cart</a></li>\n<li><a href=\"#/profile\">Profile</a></li>\n</ul>\n</nav>\n<main class=\"main-content\">\n<h2>\ud83d\uded2 Your Shopping Cart</h2>\n<div id=\"cart-items\">\n<!-- Cart items loaded dynamically -->\n<p id=\"empty-cart-message\">Your cart is empty. <a href=\"#/catalog\">Browse products</a></p>\n</div>\n<div class=\"order-summary\">\n<h3>Order Summary</h3>\n<p>Subtotal: <span>\u20b1<span id=\"subtotal\">0</span></span></p>\n<p>Shipping: <span>\u20b1<span id=\"shipping\">0</span></span></p>\n<p class=\"total\">Total: <span>\u20b1<span id=\"total\">0</span></span></p>\n<button id=\"checkout-btn\" onclick=\"proceedToPayment()\" style=\"display: none;\">Proceed to Payment</button>\n</div>\n</main>\n</div>\n<footer>\n<p>\u00a9 2025 Shopmaiah. All rights reserved.</p>\n<p>Contact: info@shopmaiah.com | Phone: 09273880721</p>\n</footer>\n</div>\n\n\n" }} />
  );
}
