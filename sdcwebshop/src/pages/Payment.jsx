import React, { useEffect } from "react";
import { useShopModule } from "../lib/useShopModule";

export default function Payment() {
  useShopModule();

  useEffect(() => {
    document.title = "Shopmaiah - Payment & Delivery";

  }, []);

  return (
    <div className="legacy-page" dangerouslySetInnerHTML={{ __html: "\n<header>\n<div class=\"logo\">\n<h1>Shopmaiah</h1>\n</div>\n</header>\n<div class=\"container\">\n<nav class=\"sidebar\">\n<ul>\n<li><a href=\"#/\">Home</a></li>\n<li><a href=\"#/about\">About</a></li>\n<li><a href=\"#/contact\">Contact Us</a></li>\n<li><a href=\"#/login\">Login</a></li>\n<li><a href=\"#/catalog\">Product Catalog</a></li>\n<li><a href=\"#/cart\">Shopping Cart</a></li>\n</ul>\n</nav>\n<main class=\"main-content\">\n<h2>Payment &amp; Delivery</h2>\n<form action=\"confirmation.html\" id=\"paymentForm\" method=\"get\">\n<label for=\"paymentMethod\">Payment Method:</label>\n<select id=\"paymentMethod\" name=\"paymentMethod\" required=\"\">\n<option value=\"\">Select</option>\n<option value=\"credit\">Credit Card</option>\n<option value=\"paypal\">PayPal</option>\n<option value=\"cod\">Cash on Delivery</option>\n</select>\n<label for=\"deliveryOption\">Delivery Option:</label>\n<select id=\"deliveryOption\" name=\"deliveryOption\" required=\"\">\n<option value=\"\">Select</option>\n<option value=\"standard\">Standard (\u20b150, 5-7 days)</option>\n<option value=\"express\">Express (\u20b1100, 2-3 days)</option>\n</select>\n<button type=\"submit\">Confirm Order</button>\n</form>\n</main>\n</div>\n<footer>\n<p>\u00a9 2025 Shopmaiah. All rights reserved.</p>\n<p>Contact: info@shopmaiah.com | Phone: 09273880721</p>\n</footer>\n" }} />
  );
}
